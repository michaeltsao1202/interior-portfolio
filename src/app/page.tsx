import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <PortfolioGrid />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
