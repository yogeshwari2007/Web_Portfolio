import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Skills } from "@/components/Skills";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { CurrentlySection } from "@/components/CurrentlySection";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollReset } from "@/components/ScrollReset";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-white">
      {/* Scroll restoration guard ensuring initial load always starts at top */}
      <ScrollReset />

      {/* Custom Minimal Loading Screen */}
      <LoadingScreen />

      {/* Ambient background lights and delicate pink accents */}
      <BackgroundEffects />

      {/* Sticky sleek navigation bar with Easter egg click counter */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero with live date, rotating roles & handwritten note */}
        <Hero />

        {/* Section 2: About & Biography */}
        <About />

        {/* Section 3: Journey Timeline - "My Journey So Far" */}
        <JourneyTimeline />

        {/* Section 4: Technical Skills & Learning */}
        <Skills />

        {/* Section 5: Interactive Developer Terminal */}
        <InteractiveTerminal />

        {/* Section 6: Currently Section - "Currently in my little corner" */}
        <CurrentlySection />

        {/* Section 7: Case Studies & Projects */}
        <Projects />

        {/* Section 8: Contact & Connect Form */}
        <Contact />
      </main>

      {/* Footer in light blush background */}
      <Footer />
    </div>
  );
}
