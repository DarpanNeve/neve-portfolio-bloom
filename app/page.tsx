// app/page.tsx
import dynamic from 'next/dynamic';
import { Hero } from "../src/components/Hero";

const About = dynamic(() => import("../src/components/About").then(mod => ({ default: mod.About })), {
  loading: () => <div className="min-h-screen" />
});

const Projects = dynamic(() => import("../src/components/Projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="min-h-screen" />
});

const Skills = dynamic(() => import("../src/components/Skills").then(mod => ({ default: mod.Skills })), {
  loading: () => <div className="min-h-screen" />
});

const Contact = dynamic(() => import("../src/components/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-screen" />
});

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
