import Section from "@/components/Section/Section";
import projectsData from "@/data/projectsData";
import Image, { StaticImageData } from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projectsData[slug as keyof typeof projectsData] as {
    name: string;
    description: string;
    date: string;
    tech: string[];
    images: StaticImageData[];
  };
  return (
    <Section classname="my-16 lg:my-20 flex flex-col xl:flex-row ">
      <div className="w-1/3">
        <h2 className="text-left">{project.name}</h2>
        <p>{project.description}</p>
        <span>{project.date}</span>
        <ul>
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div >
        <ul className="gap-y-10 xl:flex xl:flex-row">
          {project.images.map((image, index) => (
            <li key={index}>
              <Image src={image.src} alt="" width={500} height={500} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
