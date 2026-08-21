export interface LinkPreview {
  title?: string;
  image?: string;
}

const linkPreviewCache = new Map<string, Promise<LinkPreview>>();

export function fetchLinkPreview(url: string): Promise<LinkPreview> {
  const cachedPreview = linkPreviewCache.get(url);

  if (cachedPreview) {
    return cachedPreview;
  }

  const preview = loadLinkPreview(url).catch((error: unknown) => {
    linkPreviewCache.delete(url);
    throw error;
  });

  linkPreviewCache.set(url, preview);
  return preview;
}

async function loadLinkPreview(url: string): Promise<LinkPreview> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch link preview: ${response.status}`);
  }

  const html = await response.text();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const baseUrl = response.url || url;

  return {
    title: getPageTitle(doc),
    image: getPreviewImage(doc, baseUrl),
  };
}

function getPageTitle(doc: Document): string | undefined {
  return pickFirst(
    getMetaContent(doc, [
      'meta[property="og:title"]',
      'meta[name="twitter:title"]',
      'meta[property="twitter:title"]',
    ]),
    doc.querySelector("title")?.textContent,
  );
}

function getPreviewImage(doc: Document, baseUrl: string): string | undefined {
  const imageUrl = pickFirst(
    getMetaContent(doc, [
      'meta[property="og:image"]',
      'meta[property="og:image:url"]',
      'meta[property="og:image:secure_url"]',
      'meta[name="twitter:image"]',
      'meta[property="twitter:image"]',
    ]),
    doc.querySelector<HTMLLinkElement>('link[rel="image_src"]')?.getAttribute(
      "href",
    ),
  );

  if (!imageUrl) {
    return undefined;
  }

  try {
    return new URL(imageUrl, baseUrl).href;
  } catch {
    return undefined;
  }
}

function getMetaContent(
  doc: Document,
  selectors: readonly string[],
): string | undefined {
  for (const selector of selectors) {
    const content = doc
      .querySelector<HTMLMetaElement>(selector)
      ?.content.trim();

    if (content) {
      return content;
    }
  }

  return undefined;
}

function pickFirst(
  ...values: Array<string | null | undefined>
): string | undefined {
  for (const value of values) {
    const trimmed = value?.trim();

    if (trimmed) {
      return trimmed;
    }
  }

  return undefined;
}
