// app/page.tsx
import { Hero } from "../src/components/Hero";
import { About } from "../src/components/About";
import { Projects } from "../src/components/Projects";
import { Skills } from "../src/components/Skills";
import { Contact } from "../src/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
