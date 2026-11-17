import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-white">
      {/* Ambient background lights and delicate pink accents */}
      <BackgroundEffects />

      {/* Sticky sleek navigation bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About & Biography (Typography-focused, no profile photo) */}
        <About />

        {/* Section 3: Technical Skills & Learning */}
        <Skills />

        {/* Section 4: Projects Showcase */}
        <Projects />

        {/* Section 5: Contact & Connect Form (with mobile number & updated email) */}
        <Contact />
      </main>

      {/* Footer in light blush background */}
      <Footer />
    </div>
  );
}
