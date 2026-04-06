import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {

   const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-white text-black">

      {/* Simple Dot Background */}
      <div
        className="fixed inset-0 opacity-80"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-2">

        {/* Badge */}
        <span className="inline-block px-4 py-2 mb-8 text-xs font-medium tracking-widest uppercase bg-black text-white rounded-full">
          Welcome to the Future
        </span>

        {/* Title */}
        <h1 className="fantasy leading-[1.1] mb-6 text-[clamp(2.5rem,6vw,5rem)]">
          WE BUILD{" "}
          <span 
            className="text-transparent stroke-text" 
            style={{ WebkitTextStroke: "2px black", color: "transparent" }}
          >
            {splitText("DIGITAL EXCELLENCE")}
          </span>{" "}
          THAT INSPIRES
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto mb-10 text-xl text-gray-600 leading-relaxed">
          Transforming ideas into powerful digital experiences with cutting-edge technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-13 py-4 text-sm font-bold bg-black text-white rounded-lg hover:bg-gray-800 transition">
            EXPLORE OUR WORK  →
          </button>

          <button className="px-8 py-3 text-sm font-bold border border-black rounded-lg hover:bg-black hover:text-white transition flex items-center gap-2">
            START YOUR PROJECT
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;