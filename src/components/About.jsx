import React, { useState, useEffect } from "react";

const AboutDevCube = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const expertise = [
    "Web Development",
    "App Development",
    "Cybersecurity",
    "AI/ML Solutions",
    "Tech Training",
    "Consulting",
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white overflow-hidden">
      {/* Animated Background Grid - Using softer black */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter relative">
              <span className="relative z-10 text-[#0f0f0f]">About Dev Cube Tech</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-[#4a4a4a] max-w-2xl mx-auto font-light tracking-wide">
            Transforming Ideas into Digital Reality
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-[#1a1a1a] rounded-full animate-pulse"></div>
          </div>
        </div>

   <section className="mb-32 md:mb-20 relative overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

  <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative z-10">
    {[{
      title: "Our Mission",
      text: "To empower businesses and individuals with innovative technology solutions while cultivating the next generation of tech leaders through education and mentorship programs.",
      delay: "150ms",
    }, {
      title: "Our Vision",
      text: "Creating a world where technology is accessible, understandable, and empowering for everyone, regardless of background or expertise.",
      delay: "300ms",
    }].map((item, idx) => (
      <div
        key={idx}
       className={`group relative p-10 md:p-12 rounded-3xl border border-black/5 bg-white/80 backdrop-blur-sm
shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] 
hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.15)] 
transition-all duration-700 ease-out
${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
`}
      >

        {/* 🔥 Animated Border */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none z-0">
          <span className="border-line top"></span>
          <span className="border-line right"></span>
          <span className="border-line bottom"></span>
          <span className="border-line left"></span>
        </div>

        <div className="relative z-10">

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-tight text-black group-hover:tracking-wide transition-all duration-700">
            {item.title}
          </h2>

          {/* Text */}
          <p className="text-black/60 leading-[2] text-lg font-light group-hover:text-black/80 transition-colors duration-500">
            {item.text}
          </p>

          {/* Progress line */}
          <div className="mt-8 relative h-[2px] w-full bg-black/5 overflow-hidden rounded-full">
            <div className="absolute inset-y-0 left-0 w-0 bg-black group-hover:w-full transition-all duration-1000 ease-out" />
            <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </div>

          {/* Bottom */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-black/30 group-hover:text-black/60 transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
              <span className="font-medium tracking-wide uppercase text-[10px]">Read more</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-black/60"></div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* 🔥 Inline CSS */}
  <style jsx>{`
    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 200%; }
    }

    /* ===== BORDER DRAW EFFECT ===== */

    .border-line {
      position: absolute;
      background: black;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .border-line.top {
      height: 2px;
      width: 0;
      top: 0;
      left: 0;
    }

    .border-line.right {
      width: 2px;
      height: 0;
      top: 0;
      right: 0;
      transition-delay: 0.15s;
    }

    .border-line.bottom {
      height: 2px;
      width: 0;
      bottom: 0;
      right: 0;
      transition-delay: 0.3s;
    }

    .border-line.left {
      width: 2px;
      height: 0;
      bottom: 0;
      left: 0;
      transition-delay: 0.45s;
    }

    /* Hover trigger */
    .group:hover .border-line.top {
      width: 100%;
    }

    .group:hover .border-line.right {
      height: 100%;
    }

    .group:hover .border-line.bottom {
      width: 100%;
    }

    .group:hover .border-line.left {
      height: 100%;
    }
  `}</style>
</section>

        {/* Expertise Section */}
        <div className={`relative border-2 border-[#1a1a1a] bg-white p-12 md:p-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          {/* Decorative Corner Elements - Deep Black */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#0f0f0f]"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#0f0f0f]"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#0f0f0f]"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#0f0f0f]"></div>

          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 tracking-tight text-[#0f0f0f]">
            Our Expertise
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white border-2 border-[#1a1a1a] p-6 text-center font-bold text-lg transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-1 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="relative z-10 text-[#1a1a1a] group-hover:text-white">{skill}</span>
                <div className="absolute inset-0 bg-[#1a1a1a] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a]/10">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-black italic tracking-tight text-[#0f0f0f]">
                "Building the future, one line of code at a time."
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="w-2 h-2 bg-[#1a1a1a] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-[#1a1a1a] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-[#1a1a1a] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </blockquote>
          </div>
        </div>

        {/* Floating Decorative Elements - Soft Black */}
        <div className="fixed top-20 left-10 w-32 h-32 border border-[#1a1a1a]/10 rounded-full pointer-events-none animate-pulse"></div>
        <div className="fixed bottom-20 right-10 w-48 h-48 border border-[#1a1a1a]/10 rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default AboutDevCube;