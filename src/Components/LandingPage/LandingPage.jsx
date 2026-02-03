import React from "react";
import NavBar from "./NavBar";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-primary/30">
      <NavBar />

      <main className="flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-8 gap-12 py-12">
        <HeroContent />
        <HeroVisual />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
