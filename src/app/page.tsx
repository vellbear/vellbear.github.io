"use client";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Crosshair from "@/components/Crosshair";

export default function Home() {
  return (
    <main className="grid mb-24">
      <Crosshair />
      <Hero />
      <Intro />
      <About />
    </main>
  );
}
