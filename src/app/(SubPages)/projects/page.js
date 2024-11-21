import Image from "next/image";
import dynamic from "next/dynamic";
import { projectsData } from "../../data";
import ProjectsList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import bg from "../../../../public/background/projects-background.png";
const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});
export default function Project() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <ProjectsList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
