import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="intro m-auto max-w-5xl text-center mt-20 flex flex-col justify-center items-center">
        <p className="text-6xl font-bold">Ayushh Khare</p>
        <p className="text-xl mt-4 ">Software Engineer & Web Developer</p>
        <p className="w-1/2 mt-4 text-sm font-bold">
          I'm an indie full-stack developer and content creator building my
          version of the digital world one step at a time. All coding projects
          are built from the ground up, from planning and designing all the way
          to solving real-life problems with code. All video content is built
          the same way, from ideation and planning, all the way to finalizing
          the content with artistic touches. I publish that content on my
          YouTube channel ForrestKnight to more than 400k subscribers.
        </p>
      </section>

      <section className="projects mt-12 mx-12">
        <div className="proj_container flex items-center justify-between">
          <Projects />
          <Projects />
          <Projects />
        </div>
      </section>

      <section className="timeline m-auto max-w-5xl flex justify-center">
        <div className="flex flex-col items-start">
          <p className="text-2xl font-bold underline">Timeline</p>
          <ol>
            <li></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
