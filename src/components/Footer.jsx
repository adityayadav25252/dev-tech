import React, { useEffect, useRef } from "react";
import "./Footer.css";

export default function Footer() {
  const text = "DEV CUBE TECH";
  const lettersRef = useRef([]);
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

  const handleMouseMove = (e) => {
  let closestIndex = -1;
  let minDist = Infinity;

  lettersRef.current.forEach((el, i) => {
    if (!el) return;

    const r = el.getBoundingClientRect();
    const lx = r.left + r.width / 2;
    const ly = r.top + r.height / 2;

    const dx = e.clientX - lx;
    const dy = e.clientY - ly;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < minDist) {
      minDist = dist;
      closestIndex = i;
    }

    el.classList.remove("near", "hovered");
    el.style.transform = "";
  });

  // 👇 Apply effect to 3 letters (center + neighbors)
  [closestIndex - 1, closestIndex, closestIndex + 1].forEach((i) => {
    const el = lettersRef.current[i];
    if (!el) return;

    el.classList.add("near");

    if (i === closestIndex) {
      el.classList.add("hovered");
      el.style.transform = "translateY(-8px) scale(1.1)";
    } else {
      el.style.transform = "translateY(-4px) scale(1.05)";
    }
  });
};

    const ripple = (e) => {
      const circle = document.createElement("span");
      circle.className = "ripple-effect";
      const rect = footer.getBoundingClientRect();

      circle.style.left = `${e.clientX - rect.left}px`;
      circle.style.top = `${e.clientY - rect.top}px`;

      footer.appendChild(circle);

      setTimeout(() => circle.remove(), 1200);
    };

    const glitch = () => {
      footer.classList.add("glitch-active");
      setTimeout(() => footer.classList.remove("glitch-active"), 800);
    };

    footer.addEventListener("mousemove", handleMouseMove);
    footer.addEventListener("click", ripple);
    footer.addEventListener("dblclick", glitch);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footer.classList.add("show");

            lettersRef.current.forEach((l, i) => {
              setTimeout(() => {
                if (l) l.classList.add("enter");
              }, i * 60);
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(footer);

    return () => {
      footer.removeEventListener("mousemove", handleMouseMove);
      footer.removeEventListener("click", ripple);
      footer.removeEventListener("dblclick", glitch);
      observer.disconnect();
    };
  }, []);

  return (
    <footer ref={footerRef} className="dc-footer-container">

      {/* Particles */}
      <div className="particles-wrapper">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
       <div className="meta-bar">
        <span>EST. 2024</span>
        <div className="dot-line"></div>
        <span>BHOPAL, MP — INDIA</span>
        <div className="dot-line"></div>
        <span>DIGITAL EXCELLENCE</span>
      </div>

      {/* Logo */}
      <div className="logo-container">
        {text.split("").map((letter, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="letter"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>

     

      <div className="copyright-text">
        <div>LinkedIn , Github , YouTube , Intragram </div>
        <div>
        © 2026 — ALL RIGHTS RESERVED
        </div>
      </div>

      <div className="scanlines-effect" />

    </footer>
  );
}