import Hero from "./sections/Hero"
import AboutQuote from "./sections/AboutQuote";
import AboutCourse from "./sections/AboutCourse";
import Knowlege from "./sections/Knowledge";
import Structure from "./sections/Structure";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Hero id="top" />
      <AboutQuote />
      <AboutCourse />
      <Knowlege id="knowledge" />
      <Structure id="structure" />
    </div>
  );
}
