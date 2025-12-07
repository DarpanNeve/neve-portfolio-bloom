// app/page.tsx
import dynamic from 'next/dynamic';
import { Hero } from "../src/components/Hero";

const LoadingSkeleton = () => (
  <div className="py-20 px-4 animate-pulse">
    <div className="max-w-7xl mx-auto">
      <div className="h-12 bg-muted rounded-lg w-64 mx-auto mb-8" />
      <div className="h-6 bg-muted rounded w-96 mx-auto mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-64 bg-muted rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);

const About = dynamic(() => import("../src/components/About").then(mod => ({ default: mod.About })), {
  loading: () => <LoadingSkeleton />
});

const Projects = dynamic(() => import("../src/components/Projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <LoadingSkeleton />
});

const Skills = dynamic(() => import("../src/components/Skills").then(mod => ({ default: mod.Skills })), {
  loading: () => <LoadingSkeleton />
});

const Contact = dynamic(() => import("../src/components/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <LoadingSkeleton />
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
