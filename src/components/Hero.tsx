
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Globe, Zap, Code, Terminal, Lock } from "lucide-react";

const Hero = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate position relative to the center of the screen
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      
      // Apply the transform with some moderation
      orbRef.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Interactive orb that follows mouse movement */}
      <div
        ref={orbRef}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-orange-300/20 rounded-full blur-3xl transition-transform duration-500 ease-out"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6 px-6 py-2 border border-orange-500/30 rounded-full bg-dark-accent backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm text-gray-300">Just launched: New Edge Functions</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-white mb-2">Lightning-fast</span>
            <span className="block mt-2 gradient-text animate-gradient-shift">
              static site hosting
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Deploy and scale your static websites with ease. Our platform provides unmatched performance, 
            reliability, and developer experience for all your projects.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white shadow-lg shadow-orange-500/20 transform transition hover:scale-105">
              Start for free <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-dark-accent hover:border-orange-500">
              View demo
            </Button>
          </div>
        </div>

        {/* Stats with animated icons */}
        <div className="mt-20 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
          <div className="text-center backdrop-blur-sm bg-dark-accent/50 p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
            <div className="flex justify-center">
              <div className="rounded-full bg-orange-500/10 p-3 relative group">
                <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping opacity-75 group-hover:opacity-100"></div>
                <Server size={24} className="h-6 w-6 text-orange-500" />
              </div>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-orange-500 transition-colors">99.99% Uptime</h3>
            <p className="mt-1 text-gray-400">Enterprise-grade reliability for your projects</p>
          </div>
          <div className="text-center backdrop-blur-sm bg-dark-accent/50 p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
            <div className="flex justify-center">
              <div className="rounded-full bg-orange-500/10 p-3 relative group">
                <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping opacity-75 group-hover:opacity-100"></div>
                <Globe size={24} className="h-6 w-6 text-orange-500" />
              </div>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">Global Edge Network</h3>
            <p className="mt-1 text-gray-400">Serve content from 250+ locations worldwide</p>
          </div>
          <div className="text-center backdrop-blur-sm bg-dark-accent/50 p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
            <div className="flex justify-center">
              <div className="rounded-full bg-orange-500/10 p-3 relative group">
                <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping opacity-75 group-hover:opacity-100"></div>
                <Zap size={24} className="h-6 w-6 text-orange-500" />
              </div>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">Blazing Fast</h3>
            <p className="mt-1 text-gray-400">Sub-50ms response times for optimal performance</p>
          </div>
        </div>

        {/* Terminal mockup */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <div className="relative rounded-xl border border-gray-800 overflow-hidden shadow-xl shadow-orange-500/5 bg-dark-accent/80 backdrop-blur-sm w-full max-w-3xl">
            <div className="bg-black/50 h-10 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">Terminal</div>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex items-center">
                <span className="text-gray-500">$</span>
                <span className="text-white ml-2">npm install -g statichost-cli</span>
              </div>
              <div className="mt-2 text-gray-400">Installing StaticHost CLI...</div>
              <div className="mt-2 text-green-500">Successfully installed StaticHost CLI v2.4.0</div>
              <div className="mt-3 flex items-center">
                <span className="text-gray-500">$</span>
                <span className="text-white ml-2">statichost deploy</span>
              </div>
              <div className="mt-2 text-gray-400">Deploying your site to StaticHost...</div>
              <div className="flex items-center mt-2">
                <span className="text-orange-500">•</span>
                <span className="text-gray-300 ml-2">Analyzing project structure</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-orange-500">•</span>
                <span className="text-gray-300 ml-2">Building optimized assets</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-orange-500">•</span>
                <span className="text-gray-300 ml-2">Uploading to global CDN</span>
              </div>
              <div className="mt-2 text-green-500">✓ Deployment successful!</div>
              <div className="mt-2 flex items-center">
                <span className="text-gray-500">$</span>
                <span className="text-white ml-2 relative">
                  <span className="absolute left-0 animate-pulse">_</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
