import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FishMenu from "./components/FishMenu";
import DaniaDomowe from "./components/DaniaDomowe";
import DrinksMenu from "./components/DrinksMenu";
import FullBleedQuote from "./components/FullBleedQuote";
import AboutUs from "./components/AboutUs";
import HoursAndLocation from "./components/HoursAndLocation";
import Footer from "./components/Footer";

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFAF5] text-[#16202C] font-sans antialiased selection:bg-[#1B6CA8] selection:text-[#FDFAF5]">
      {/* Sticky, responsive header bar */}
      <Navigation onScrollTo={scrollToSection} />

      {/* Main sections block */}
      <main>
        {/* 1. Hero Section */}
        <Hero onScrollToMenu={() => scrollToSection("ryby-menu")} />

        {/* 3. Fish & Menu Section */}
        <FishMenu />

        {/* 4. Dania Domowe Section */}
        <DaniaDomowe />

        {/* 5. Drinki & Desery Section */}
        <DrinksMenu />

        {/* 6. Full Bleed Quote */}
        <FullBleedQuote />

        {/* 7. About Us Profile */}
        <AboutUs />

        {/* 8. Hours and Location */}
        <HoursAndLocation />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
