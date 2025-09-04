// src/components/AnimatedText.jsx
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimator({
  text,
  type = "chars", // 'chars', 'words', or 'lines'
  triggerStart = "top 80%",
  triggerEnd = "bottom 20%",
  scrub = false,
  duration = 1.2,
  stagger = 0.05,
  y = 80,
  ease = "power2.out",
  className = "",
  as = "h2", // element type
}) {
  const elRef = useRef(null);

  useLayoutEffect(() => {
    const el = elRef.current;

    // Split the text
    const split = new SplitType(el, { types: type });

    const ctx = gsap.context(() => {
      gsap.from(split[type], {
        y,
        opacity: 0,
        stagger,
        duration,
        ease,
        scrollTrigger: {
          trigger: el,
          start: triggerStart,
          end: triggerEnd,
          scrub,
        },
      });
    });

    return () => {
      ctx.revert();
      split.revert(); // Revert SplitType changes
    };
  }, [type, triggerStart, triggerEnd, scrub, duration, stagger, y, ease]);

  const Tag = as;

  return (
    <Tag ref={elRef} className={className}>
      {text}
    </Tag>
  );
}
