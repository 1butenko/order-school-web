import Hero from "./sections/Hero"
import AboutQuote from "./sections/AboutQuote";
import AboutCourse from "./sections/AboutCourse";
import Knowlege from "./sections/Knowledge";
import Structure from "./sections/Structure";
import Timeline from "./sections/Timeline";
import Audience from "./sections/Audience";
import Videos from "./sections/Videos";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Map from "./sections/Map";

import { MapProvider } from "@/providers/google-maps";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Hero id="top" />
      {/* <AboutQuote /> */}
      {/* <AboutCourse /> */}
      <Knowlege id="knowledge" />
      <Structure id="structure" />
      {/* <Timeline id="timeline" /> */}
      {/* <Audience id="audience" /> */}
      <Videos id="interview" />
      <Faq />
      <Footer />
      
      <MapProvider>
        <Map />
      </MapProvider>
    </div>
  );
}
