import { useEffect, useState } from "react";

const TechTag = ({ tech, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm rounded-lg 
      transform transition-all duration-500 hover:border-black hover:bg-black hover:text-white
      ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-75 translate-y-4"
      }`}
    >
      <span className="text-lg">{tech.icon}</span>
      <span>{tech.name}</span>
    </div>
  );
};

export default TechTag;