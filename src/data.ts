import samplePng from "./sample.png";

export interface LinkItem {
  label: string;
  url: string;
  image: string;
}

export const links: LinkItem[] = [
  {
    label: "Struct-Note",
    url: "https://catsball.github.io/struct-note",
    image: samplePng,
  },
  // { label: "예시 2", url: "https://example.com", image: "https://picsum.photos/seed/2/600/600" },
  // { label: "예시 3", url: "https://example.com", image: "https://picsum.photos/seed/3/600/600" },
  // { label: "예시 4", url: "https://example.com", image: "https://picsum.photos/seed/4/600/600" },
  // { label: "예시 5", url: "https://example.com", image: "https://picsum.photos/seed/5/600/600" },
];
