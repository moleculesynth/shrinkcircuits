export type Project = {
  slug: "steamteam" | "wsu" | "wall";
  navLabel: string;
  title: string;
  eyebrow: string;
  description: string;
  hero: string;
  images: string[];
  externalLink?: {
    href: string;
    label: string;
  };
};

const imagePaths = (folder: string, names: Array<string | number>) =>
  names.map((name) => `/images/${folder}/${name}.webp`);

export const projects: Project[] = [
  {
    slug: "steamteam",
    navLabel: "S.T.E.P. Lab",
    title: "STEAM Team Extended Play",
    eyebrow: "S.T.E.P. Lab",
    description: "Mobile makerspace and design workshop.",
    hero: "/images/steamteam/1.webp",
    images: imagePaths(
      "steamteam",
      Array.from({ length: 18 }, (_, index) => index + 1),
    ),
  },
  {
    slug: "wsu",
    navLabel: "WSU–DTC 338",
    title: "WSU–DTC 338",
    eyebrow: "Washington State University / Spring 2015",
    description:
      "An undergraduate maker-culture course at Washington State University combining hands-on fabrication, physical computing, and creative programming.",
    hero: "/images/wsu/2.webp",
    images: imagePaths("wsu", [2, 1, 5, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
    externalLink: {
      href: "https://github.com/moleculesynth/maker-dtc338/blob/master/README.md",
      label: "View the DTC 338 course site",
    },
  },
  {
    slug: "wall",
    navLabel: "Molecule Wall",
    title: "Molecule Wall",
    eyebrow: "Forest Park School",
    description: "Circuitree: a tactile, collaborative electronics installation.",
    hero: "/images/wall/1.webp",
    images: imagePaths("wall", [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32,
    ]),
    externalLink: {
      href: "https://github.com/mplavcan/ForestParkSchoolWALL",
      label: "View the Molecule Wall documentation",
    },
  },
];

export const homeImages = imagePaths("home", ["1.1", 1, 2, 3, 4, 5, 7, 8, 9, 10]);

export const getProject = (slug: Project["slug"]) =>
  projects.find((project) => project.slug === slug)!;
