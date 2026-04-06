import { useEffect, useRef, useState } from "react";

const ProcessStep = ({ number, title, description, delay, isLast }) => {
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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${isLast ? "" : "pb-12"} transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-200 overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-full bg-gradient-to-b from-black via-gray-800 to-black transition-all duration-1000 ease-out ${
              isVisible ? "h-full" : "h-0"
            }`}
            style={{ transitionDelay: `${delay + 400}ms` }}
          />

          <div
            className={`absolute w-2 h-2 bg-black rounded-full left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
              isVisible ? "top-full opacity-100" : "top-0 opacity-0"
            }`}
            style={{
              transitionDelay: `${delay + 800}ms`,
              animation: isVisible ? "dotMove 2s ease-in-out infinite" : "none",
            }}
          />
        </div>
      )}

      <div className="relative flex gap-6 group cursor-pointer">
        <div className="relative flex-shrink-0">
          <div
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-500 relative z-10 ${
              isVisible
                ? isHovered
                  ? "border-black bg-black text-white scale-110 shadow-lg shadow-black/20"
                  : "border-black bg-black text-white scale-100"
                : "border-gray-300 bg-white text-gray-300 scale-75"
            }`}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {number}

            {isVisible && (
              <span
                className={`absolute inset-0 rounded-full border-2 border-black animate-ping ${
                  isHovered ? "opacity-30" : "opacity-0"
                }`}
                style={{ animationDuration: "1.5s" }}
              />
            )}
          </div>

          <div
            className={`absolute inset-0 rounded-full bg-black blur-xl transition-opacity duration-500 ${
              isHovered ? "opacity-20" : "opacity-0"
            }`}
          />
        </div>

        <div
          className={`flex-1 transform transition-all duration-500 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          } ${isHovered ? "translate-x-2" : ""}`}
          style={{ transitionDelay: `${delay + 150}ms` }}
        >
          <div
            className={`bg-gray-50 rounded-xl p-5 border transition-all duration-300 ${
              isHovered ? "border-black shadow-lg bg-white" : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <h4
                className={`font-bold text-lg transition-colors duration-300 ${
                  isHovered ? "text-black" : "text-gray-800"
                }`}
              >
                {title}
              </h4>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;