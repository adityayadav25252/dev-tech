import { useEffect, useRef, useState } from "react";

const PrototypeCard = ({ delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`border border-gray-200 rounded-2xl p-6 hover:border-black transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isHovered ? "shadow-xl bg-white" : "shadow-sm"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
            isVisible
              ? isHovered
                ? "bg-black text-white border-black scale-110 rotate-6"
                : "bg-white text-black border-black scale-100"
              : "bg-gray-100 text-gray-400 scale-75"
          }`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>

        <div>
          <h4 className="font-bold text-lg flex items-center gap-2">
            Prototype / Try It
            <span className="text-xs px-2 py-0.5 bg-black text-white rounded-full font-normal">
              Final
            </span>
          </h4>
        </div>
      </div>

      {/* Description */}
      <p
        className={`text-gray-600 leading-relaxed mb-4 text-sm transform transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: `${delay + 100}ms` }}
      >
        Interactive prototype: Before full build, we created a clickable Figma mockup
        and an MVP with 10 core articles. Students validated the navigation and design.
      </p>

      {/* Stats */}
      <div
        className={`flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 mb-4 transform transition-all duration-500 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        } ${isHovered ? "border-black" : ""}`}
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
          200+
        </div>

        <div>
          <p className="text-sm font-semibold text-black">Active Learners</p>
          <p className="text-xs text-gray-500">Using roadmap weekly</p>
        </div>
      </div>

      {/* CTA */}
      <a
        href="https://apnaideal.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-between p-4 border-2 rounded-xl transition-all duration-300 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } ${
          isHovered ? "border-black bg-black text-white" : "border-gray-200 hover:border-black"
        }`}
        style={{ transitionDelay: `${delay + 300}ms` }}
      >
        <div className="flex items-center gap-3">
          <span className={`text-sm font-semibold ${isHovered ? "text-white" : "text-black"}`}>
            Visit live platform
          </span>

          <span className={`text-xs px-2 py-0.5 rounded ${
            isHovered ? "bg-white text-black" : "bg-gray-100 text-gray-600"
          }`}>
            production
          </span>
        </div>

        <svg className={`w-5 h-5 transition-all duration-300 ${
          isHovered ? "text-white translate-x-1" : "text-gray-400"
        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      </a>
    </div>
  );
};

export default PrototypeCard;