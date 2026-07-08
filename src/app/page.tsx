import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LearningPaths } from "@/components/LearningPaths";
import { Pillars } from "@/components/Pillars";
import { Principles } from "@/components/Principles";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <LearningPaths />
        <Principles />
        <CallToAction />
        <h1>
          Hello World
        </h1>
      </main>
      <Footer />
    </>
  );
}
