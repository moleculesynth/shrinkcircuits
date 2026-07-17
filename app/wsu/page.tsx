import type { Metadata } from "next";
import { ProjectPage } from "../_components/ProjectPage";
import { getProject } from "../data";

const project = getProject("wsu");

export const metadata: Metadata = {
  title: "WSU–DTC 338",
  description: project.description,
};

export default function WsuPage() {
  return <ProjectPage project={project} />;
}
