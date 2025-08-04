import About from "@/components/about";
import Certificates from "@/components/certificates";
import Education from "@/components/education";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
    </div>
  );
}
