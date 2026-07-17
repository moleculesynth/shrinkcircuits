import type { Metadata } from "next";
import { ProjectPage } from "../_components/ProjectPage";
import { getProject } from "../data";

const project = getProject("steamteam");

export const metadata: Metadata = {
  title: "S.T.E.P. Lab",
  description: project.description,
};

export default function StepLabPage() {
  return <ProjectPage project={project} />;
}
