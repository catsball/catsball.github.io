import samplePng from "./sample.png";

export interface LinkItem {
  label: string;
  url: string;
  image: string;
}

export interface MemberItem {
  name: string;
  role: string;
  contact: string;
  link: string;
  photo: string;
}

export const links: LinkItem[] = [
  {
    label: "Struct-Note",
    url: "https://catsball.github.io/struct-note",
    image: samplePng,
  },
  {
    label: "Cat Tower",
    url: "https://catsball.github.io/cat-tower",
    image: "",
  },
];

export const members: MemberItem[] = [
  {
    name: "최인아",
    role: "Producer, Designer",
    contact: "",
    link: "",
    photo: "",
  },
  {
    name: "신동진",
    role: "Engineer, Developer",
    contact: "@sine_dz",
    link: "https://instagram.com/sine_dz",
    photo: "",
  },
  {
    name: "용맹한냥냥이",
    role: "Designer",
    contact: "@the_great_double_nyang",
    link: "https://instagram.com/the_great_double_nyang",
    photo: "",
  },
];
