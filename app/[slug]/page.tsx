import Section from "@/components/Section/Section";
import projectsData from "@/data/projectsData";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projectsData[slug as keyof typeof projectsData] as {
    nom: string;
    description: string;
    date: string;
    tech: string[];
    images: string[];
  };
  return (
    <Section classname="my-16 lg:my-20 flex flex-col xl:flex-row ">
      <div className="w-1/3">
        <h2 className="text-center">{project.description}</h2>
        <span>{project.date}</span>
        <p>{project.description}</p>
        <ul>
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="w-1/3">
        
      </div>
    </Section>
  );
}
