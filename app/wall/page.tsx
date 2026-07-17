import type { Metadata } from "next";
import { ProjectPage } from "../_components/ProjectPage";
import { getProject } from "../data";

const project = getProject("wall");

export const metadata: Metadata = {
  title: "Molecule Wall",
  description: project.description,
};

export default function MoleculeWallPage() {
  return <ProjectPage project={project} />;
}
