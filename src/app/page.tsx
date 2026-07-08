import { Account } from "@/components/Account";
import { AccountProvider } from "@/components/AccountProvider";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LearningPaths } from "@/components/LearningPaths";
import { Pillars } from "@/components/Pillars";
import { Principles } from "@/components/Principles";

export default function Home() {
  return (
    <AccountProvider>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <LearningPaths />
        <Principles />
        <Account />
        <CallToAction />
      </main>
      <Footer />
    </AccountProvider>
  );
}
