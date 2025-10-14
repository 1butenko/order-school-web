import Hero from "./sections/Hero"
import AboutQuote from "./sections/AboutQuote";
import AboutCourse from "./sections/AboutCourse";
import Knowlege from "./sections/Knowledge";
import Structure from "./sections/Structure";
import Timeline from "./sections/Timeline";
import Audience from "./sections/Audience";
import Teachers from "./sections/Teachers";
import Videos from "./sections/Videos";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Map from "./sections/Map";
import NamedAfter from "./sections/NamedAfter";


export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Hero id="top" />
      <AboutQuote />
      {/* <AboutCourse /> */}
      <Knowlege id="knowledge" />
      <Structure id="structure" />
      <Timeline id="timeline" /> 
      <Audience />
      <Videos id="interview" />
      <Teachers />
      <NamedAfter />
      <Faq />
      <Footer />
      <Map />
    </div>
  );
}
