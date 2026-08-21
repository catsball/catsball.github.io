import { useEffect, useState } from "react";
import type { LinkItem } from "../data";
import { fetchLinkPreview, type LinkPreview } from "../linkPreview";

const isTouch = () => window.matchMedia("(hover: none)").matches;

export function Tile({ item }: { item: LinkItem }) {
  const [flipped, setFlipped] = useState(false);
  const [previewState, setPreviewState] = useState<{
    url: string;
    preview: LinkPreview | null;
  } | null>(null);
  const [failedPreviewImage, setFailedPreviewImage] = useState<string | null>(
    null,
  );

  useEffect(() => {
    let isCurrent = true;

    fetchLinkPreview(item.url)
      .then((nextPreview) => {
        if (isCurrent) {
          setPreviewState({ url: item.url, preview: nextPreview });
        }
      })
      .catch(() => {
        if (isCurrent) {
          setPreviewState({ url: item.url, preview: null });
        }
      });

    return () => {
      isCurrent = false;
    };
  }, [item.url]);

  const preview =
    previewState?.url === item.url ? previewState.preview : null;
  const title = preview?.title || item.label;
  const previewImage = preview?.image || "";
  const image =
    previewImage && previewImage !== failedPreviewImage
      ? previewImage
      : item.image;

  return (
    <div className={`tile${flipped ? " is-flipped" : ""}`}>
      <div className="tile-inner">
        <a
          className="tile-front"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (isTouch()) {
              e.preventDefault();
              setFlipped(true);
            }
          }}
        >
          {image ? (
            <img
              src={image}
              alt={title}
              onError={() => {
                if (previewImage && previewImage !== failedPreviewImage) {
                  setFailedPreviewImage(previewImage);
                }
              }}
            />
          ) : (
            <div className="tile-image-placeholder" aria-hidden="true" />
          )}
          <div className="tile-overlay" />
          <span className="tile-label">{title}</span>
        </a>
        <a
          className="tile-back"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="tile-desc">{item.description}</p>
        </a>
      </div>
    </div>
  );
}
