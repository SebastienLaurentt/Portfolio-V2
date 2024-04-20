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
    <div className=" flex h-screen w-max flex-col bg-slate-700 px-6 py-20 md:px-10 lg:pt-36  xl:flex-row xl:items-center xl:px-16 ">
      <div className="flex h-full flex-col justify-around xl:w-[700px]">
        <div className="">
          <h2 className="mb-4 text-left">{project.name}</h2>
          <p className="xl:mb-4 xl:w-[450px] xl:text-xl">
            {project.description}
          </p>
        </div>
        <div className="text-xl">
          <span>{project.date}</span>
          <ul className="flex flex-row gap-x-6">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <ul className=" gap-x-10 xl:flex xl:flex-row">
          {project.images.map((image, index) => (
            <li key={index}>
              <Image src={image.src} alt="" width={1100} height={700} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
