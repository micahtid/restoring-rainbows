"use client";

import { useEffect, useRef, useState } from 'react';

const CurveUnderline = () => {
  const [isInView, setIsInView] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold: 0.5 });

    const svgElement = svgRef.current;
    if (svgElement) observer.observe(svgElement);

    return () => {
      if (svgElement) observer.unobserve(svgElement);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`h-[20px] wave ${isInView ? 'animate' : ''}`}
      viewBox="0.375 -0.4 12 0.8"
    >
      <path
        fill="none"
        stroke="#73a0e1"
        strokeWidth="0.1"
        d="M0,0q0.375,-0.4 0.75,-0.2q0.375,0.4 0.75,0.2q0.375,-0.4 0.75,-0.2q0.375,0.4 0.75,0.2q0.375,-0.4 0.75,-0.2q0.375,0.4 0.75,0.2q0.375,-0.4 0.75,-0.2q0.375,0.4 0.75,0.2q0.375,-0.4 0.75,-0.2q0.375,0.4 0.75,0.2q0.375,-0.4 0.75,-0.2q0.375,0.4 0.75,0.2q0.375,-0.4 0.75,-0.2q0.375,0.4 0.75,0.2"
      />
    </svg>
  );
};

export default CurveUnderline;
