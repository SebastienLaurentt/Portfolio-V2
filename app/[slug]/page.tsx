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
    <div className=" mb-16 mt-20 flex w-max flex-col px-6 md:px-10 lg:mt-36  xl:flex-row xl:px-16 ">
      <div className="xl:w-[700px]">
        <h2 className="text-left">{project.name}</h2>
        <p>{project.description}</p>
        <span>{project.date}</span>
        <ul>
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="">
        <ul className=" gap-x-10 xl:flex xl:flex-row">
          {project.images.map((image, index) => (
            <li key={index}>
              <Image src={image.src} alt="" width={1000} height={700} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
