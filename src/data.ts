import samplePng from "./sample.png";

export interface LinkItem {
  label: string;
  url: string;
  image: string;
  description: string;
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
    description: "교육용 2D 구조해석 프로그램",
  },
  {
    label: "Cat Tower",
    url: "https://catsball.github.io/cat-tower",
    image: "",
    description: "Diagram + Flowchart + Scheduler",
  },
];

export const members: MemberItem[] = [
  {
    name: "최인아",
    role: "Producer, Designer",
    contact: "",
    link: "https://instagram.com/olnolr",
    photo: "",
  },
  {
    name: "신동진",
    role: "Engineer, Developer",
    contact: "",
    link: "https://instagram.com/sine_dz",
    photo: "",
  },
  {
    name: "용맹한냥냥이",
    role: "Illustrator",
    contact: "",
    link: "https://instagram.com/the_great_double_nyang",
    photo: "",
  },
  {
    name: "고란이",
    role: "Model",
    contact: "",
    link: "",
    photo: "",
  },
];
