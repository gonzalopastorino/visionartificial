import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedPaths() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    const animations = [];

    const createPaths = (positionFactor) => {
      for (let i = 0; i < 36; i++) {
        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );

        const d = `M-${380 - i * 5 * positionFactor} ${875 - i * 6}
          C-${380 - i * 5 * positionFactor} ${875 - i * 6}
          -${312 - i * 5 * positionFactor} ${470 - i * 6}
          ${152 - i * 5 * positionFactor} ${343 - i * 6}
          C${616 - i * 5 * positionFactor} ${216 - i * 6}
          ${684 - i * 5 * positionFactor} -${189 + i * 6}
          ${684 - i * 5 * positionFactor} -${189 + i * 6}`;

        path.setAttribute("d", d);
        path.setAttribute("stroke", "currentColor");
        path.setAttribute("stroke-width", 0.5 + i * 0.03);
        path.setAttribute("stroke-opacity", 0.10 + i * 0.04);
        path.setAttribute("fill", "none");

        svg.appendChild(path);

        const length = path.getTotalLength();

        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        const tween = gsap.to(path, {
          strokeDashoffset: -length,
          opacity: 0.5,
          duration: 15 + Math.random() * 8,
          repeat: -1,
          ease: "none",
          delay: Math.random() * -20,
        });

        animations.push(tween);
      }
    };

    createPaths(1);
    createPaths(-1);

    return () => {
      animations.forEach((a) => a.kill());
      svg.innerHTML = "";
    };
  }, []);

  return (
    <div className="paths-container absolute inset-0 opacity-50 pointer-events-none overflow-hidden">
      <svg
        ref={svgRef}
        className="w-full h-full text-slate-950"
        viewBox="0 0 696 316"
        preserveAspectRatio="xMidYMid slice"
      />
    </div>
  );
}