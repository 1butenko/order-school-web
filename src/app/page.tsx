import Hero from "./sections/Hero"
import AboutQuote from "./sections/AboutQuote";
import AboutCourse from "./sections/AboutCourse";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Hero />
      <AboutQuote />
      <AboutCourse />
    </div>
  );
}
