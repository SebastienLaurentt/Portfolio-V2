

import Section from "@/components/Section/Section";
import projectsData from "@/data/projectsData";

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const project = projectsData[slug as keyof typeof projectsData] as { nom: string; description: string; date: string; tech: string[]; images: string[]; };
  return (
    <Section>
      <div>
        {project ? (
          <p>{project.description}</p>
        ) : (
          <p>Aucune description disponible pour ce projet</p>
        )}
      </div>
    </Section>
  );
}
