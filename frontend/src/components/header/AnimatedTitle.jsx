import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./header.css";

const line1 = "Soluciones tecnológicas inteligentes para impulsar";
const line2 = " tu empresa.";

export default function AnimatedTitle() {
  const lettersRef = useRef([]);

  useEffect(() => {
    gsap.to(
      lettersRef.current,
      {
        opacity: 1,
        duration: 0.8,
        ease: "none",
        stagger: 0.04,
      }
    );
  }, []);

  return (
    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[1.3] flex flex-col items-center gap-x-4">
      <span className="flex flex-wrap justify-center gap-x-4">
        {line1.split(" ").map((word, wi) => (
          <span key={`l1-${wi}`} className="inline-block whitespace-nowrap">
            {word.split("").map((letter, li) => (
              <span
                key={li}
                ref={(el) => {
                  if (el) lettersRef.current.push(el);
                }}
                className="inline-block text-gradient opacity-0"
              >
                {letter}
              </span>
            ))}
            {"\u00A0"}
          </span>
        ))}
      </span>
      <span className="flex flex-wrap justify-center gap-x-4">
        {line2.split(" ").map((word, wi) => (
          <span key={`l2-${wi}`} className="inline-block whitespace-nowrap">
            {word.split("").map((letter, li) => (
              <span
                key={li}
                ref={(el) => {
                  if (el) lettersRef.current.push(el);
                }}
                className="inline-block text-gradient opacity-0"
              >
                {letter}
              </span>
            ))}
            {"\u00A0"}
          </span>
        ))}
      </span>
    </h1>
  );
}
