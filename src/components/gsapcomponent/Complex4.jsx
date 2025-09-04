import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

gsap.registerPlugin(ScrollTrigger);

const Complex4 = () => {
  const mainBoxRef = useRef(null);
  const textRef = useRef(null);
  const scrollerContainer = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current || !mainBoxRef.current) return;

    // Split text AFTER DOM is ready
    const splitText = new SplitType(textRef.current, { types: "chars" });
    const charsTitle = splitText.chars;
    
    charsTitle.forEach(char => char.classList.add("gradient-text"));
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainBoxRef.current,
          start: "top 6%",
          end: "bottom 0%",
          pin: true,
          scrub: true
        }
      });

      // Animate heading
      tl.from(charsTitle, {
        opacity: 0,
        y: 120,
        x: 120,
        ease: "none",
        stagger: 0.06,
      });

      tl.to(scrollerContainer.current,
        {
          x: "-80.3%",
          duration: 6,
          ease: "none",
          scrub: 5
        })
    }, mainBoxRef);

    return () => {
      ctx.revert();
      splitText.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const praiseData = [
    { title: "Popularity", percent: 75, img: "./svg/popularity.svg", bg: "bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1]" },
    { title: "Activities", percent: 65, img: "./svg/activities.svg", bg: "bg-gradient-to-l from-[#38bdf8] via-[#fb7185] to-[#84cc16]" },
    { title: "Demand", percent: 51, img: "./svg/marketing.svg", bg: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#7900ff] via-[#548cff] to-[#93ffd8]" },
    { title: "Praise", percent: 80, img: "./svg/support.svg", bg: "bg-gradient-to-l from-[#35155d] via-[#512b81] to-[#4477ce]" }
  ]

  return (
    <div
      ref={mainBoxRef}
      className='w-full h-screen flex overflow-hidden'
    >
      <div
        ref={scrollerContainer}
        className='h-full flex justify-between items-center'
      >
        <div className='w-[100vw] h-screen flex justify-center items-center'>
          <h1
            ref={textRef}
            className='text-[13vw] sm:text-[8vw] px-10 font-extrabold uppercase'
          >Our reputation percentage %</h1>
        </div>
        <div className='flex justify-between items-center gap-4'>
          {
            praiseData.map((data, index) => (
              <div
                key={index}
                className='w-[100vw] h-[80vh] border p-3 rounded-xl flex flex-col md:flex-row items-center gap-3 bg-emerald-900/20'
              >
                <img
                  src={data.img}
                  className='h-[30%] sm:h-[55%] sm:w-[45%] md:h-[90%]'
                />
                <div className='w-full rounded-xl p-10'>
                  <h3
                    className={`text-xl sm:text-5xl text-center ${data.bg} my-6 md:my-12 order-2 md:order-1 bg-clip-text text-transparent`}
                  >{data.title}</h3>
                  <CircularProgressbar
                    key={index}
                    value={data.percent}
                    text={`${data.percent}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      textSize: '16px',
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(62, 152, 199, ${data.percent / 100})`,
                      textColor: '#fff',
                      trailColor: '#00f895',
                      backgroundColor: '#3e98c7',
                    })}
                    className='w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 order-1 md:order-2' />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Complex4;
