"use client";

import Header from '@/Components/Header'
import AvatarPath from "@/Components/AvatarPath";
import Hero from "@/Components/Hero";
import Impact from "@/Components/Impact";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";
import WebsitesSection from "@/Components/WebsitesSection";
import MarketingSection from "@/Components/MarketingSection";
import MLSection from "@/Components/MLsection";
//import Opportunity from '@/Components/Opportunity';

export default function Page() {
  return (
    <main>
      <Header />
       <AvatarPath />
      <Hero />
      <Impact />
      <WebsitesSection />
      <MarketingSection />    
      <Projects />      
   
      <Skills />
   
      <MLSection />
     
      <Contact />
      {/*<Header />
      <AvatarPath />
      <Hero />
      <Impact />
      <Projects />
      <Skills />
      <MLVisual />
      <Profiles />
      <Contact />*/}
    </main>
  );
}
