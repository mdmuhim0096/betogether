import { Children, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({
  text,
  animationType = "slide-up", // fade-in | slide-up | rotate
  duration = 1,
  stagger = 0.05,
  size = 7,
  tag = "h1",
  Children
}) => {
  const containerRef = useRef(null);


  useLayoutEffect(() => {
    if (!textRef.current || !containerRef.current) return;


    // GSAP animation with scrub and pin
    
  }, []);

  const Tag = tag;

  return (
    <div
      ref={containerRef}
      className="w-full h-auto flex justify-between items-center"
    >
      <div>
        <Tag
          ref={textRef}
          style={{
            fontSize: `${size}vw`,
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff"
          }}
        >
          {text}
        </Tag>
      </div>
      <div className="">
        {Children}
      </div>
    </div>
  );
};

export default AnimatedText;
