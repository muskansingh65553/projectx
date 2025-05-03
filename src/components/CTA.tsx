import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Terminal, Upload, X } from "lucide-react";

const CTA = () => {
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ctaSectionRef.current) return;
      
      const { left, top, width, height } = ctaSectionRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      ctaSectionRef.current.style.setProperty('--x', `${x * 100}%`);
      ctaSectionRef.current.style.setProperty('--y', `${y * 100}%`);
    };
    
    const section = ctaSectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    
    if (files.length > 0) {
      await processFiles(files);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      await processFiles(files);
    }
  };

  const processFiles = async (files: File[]) => {
    setIsProcessing(true);
    setUploadProgress(0);

    try {
      // Simulate file upload with progress
      for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      setUploadStatus('success');
    } catch (error) {
      setUploadStatus('error');
    } finally {
      setIsProcessing(false);
      setTimeout(() => {
        setUploadProgress(0);
        setUploadStatus('idle');
      }, 3000);
    }
  };
  
  return (
    <section className="py-24 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          ref={ctaSectionRef}
          className="relative rounded-3xl bg-dark-accent overflow-hidden border border-gray-800"
          style={{
            '--x': '50%',
            '--y': '50%',
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-orange-300/30 opacity-50"
               style={{
                 background: 'radial-gradient(circle at var(--x) var(--y), rgba(255, 95, 31, 0.5) 0%, rgba(255, 127, 80, 0.2) 25%, rgba(0, 0, 0, 0) 50%)',
               }}></div>
          
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 800 800">
              <defs>
                <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#small-grid)" />
            </svg>
          </div>
          
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bg-orange-500/30 rounded-full"
                style={{
                  width: `${Math.random() * 6 + 3}px`,
                  height: `${Math.random() * 6 + 3}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          
          <div className="relative px-6 py-16 sm:px-12 sm:py-20 md:py-28 lg:px-16 z-10">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to simplify your hosting workflow?
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                  Join thousands of developers who have already made the switch to StaticHost.
                  Get started for free, no credit card required.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:shrink-0">
                <Button size="lg" className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white shadow-lg shadow-orange-500/20 group">
                  <span className="absolute inset-0 w-full h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out"></span>
                  <span className="relative flex items-center">
                    Get started for free <ArrowRight size={16} className="ml-2" />
                  </span>
                </Button>
              </div>
            </div>
            
            {/* Feature badges */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              {['No credit card', 'Cancel anytime', '24/7 support', 'Global CDN'].map((item) => (
                <div key={item} className="flex items-center space-x-1 px-3 py-1 bg-dark/80 backdrop-blur-sm rounded-full border border-gray-800">
                  <Sparkles size={12} className="text-orange-500" />
                  <span className="text-xs text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* File Upload Zone */}
            <div className="mt-12">
              <div
                className={`relative rounded-xl border-2 border-dashed transition-all duration-300 ${
                  isDragging
                    ? "border-orange-400 bg-orange-500/10"
                    : "border-gray-700 hover:border-orange-500/50 bg-dark-accent/50"
                } p-8`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileSelect}
                />
                
                <div className="flex flex-col items-center justify-center text-center">
                  <Terminal 
                    size={40} 
                    className={`mb-4 ${isDragging ? 'text-orange-400' : 'text-gray-400'} animate-pulse`} 
                  />
                  
                  <div className="font-mono">
                    <span className="text-orange-400">{'>'}_</span>
                    <span className="text-gray-300 ml-2">
                      {isProcessing ? (
                        <span className="animate-pulse">Processing files...</span>
                      ) : (
                        "Drag and drop files here or click to upload"
                      )}
                    </span>
                  </div>
                  
                  <p className="mt-2 text-sm text-gray-500 font-mono">
                    Supported: .html, .css, .js, .json, .png, .jpg, .gif (max 10MB)
                  </p>

                  {/* Upload Progress */}
                  {uploadProgress > 0 && (
                    <div className="w-full mt-4 max-w-md">
                      <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-orange-500 transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                      <div className="mt-2 font-mono text-sm">
                        <span className="text-orange-400">{'>'} </span>
                        <span className="text-gray-400">
                          {uploadProgress}% complete
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Upload Status */}
                  {uploadStatus !== 'idle' && (
                    <div className={`mt-4 font-mono text-sm ${
                      uploadStatus === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      <span>{'>'} </span>
                      {uploadStatus === 'success' ? (
                        'Upload completed successfully!'
                      ) : (
                        'Error: Upload failed. Please try again.'
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;