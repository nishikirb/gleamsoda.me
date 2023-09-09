import blogImg from "@/assets/blog.jpeg";
import projectsImg from "@/assets/projects.jpeg";
import usesImg from "@/assets/uses.jpeg";

export type Content = {
  name: string;
  href: string;
  image: ImageMetadata;
};

export const contents: Content[] = [
  {
    name: "Blog",
    href: "/blog",
    image: blogImg,
  },
  {
    name: "Projects",
    href: "/projects",
    image: projectsImg,
  },
  {
    name: "Uses",
    href: "/uses",
    image: usesImg,
  },
];
