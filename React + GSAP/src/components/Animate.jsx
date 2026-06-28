import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";
const Animate = ({ children }) => {
  const contref = useRef();
  useGSAP(() => {
    gsap.to(contref.current, {
      x: 600,
      y: 100,
      ease: "power2.in",
      delay: 1,
    });
  });
  return <div ref={contref}>{children}</div>;
};

export default Animate;
