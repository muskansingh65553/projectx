
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-dark">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 bg-dark">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="opacity-10"
          >
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF5F1F" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FF7F50" stopOpacity="0" />
              </linearGradient>
            </defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="url(#grid-gradient)"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-orange-300/20 rounded-full blur-3xl transition-transform duration-500 ease-out animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-orange-300/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/15 to-orange-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
