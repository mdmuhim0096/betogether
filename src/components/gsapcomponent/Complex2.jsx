import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion } from "framer-motion";
import { Shape6 } from "../utils/Shape"

gsap.registerPlugin(ScrollTrigger);

const Complex2 = () => {
    const mainBoxRef = useRef(null);
    const textRef = useRef(null);
    const pRef = useRef(null);

    useLayoutEffect(() => {
        if (!textRef.current || !pRef.current || !mainBoxRef.current) return;

        // Split text AFTER DOM is ready
        const splitText = new SplitType(textRef.current, { types: "chars" });
        const splitPara = new SplitType(pRef.current, { types: "chars" });

        const charsTitle = splitText.chars;
        const charsPara = splitPara.chars;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainBoxRef.current,
                    start: "top 20%",
                    end: "bottom 20%",
                    scrub: true,
                    pin: true,
                }
            });

            // Animate heading
            tl.from(charsTitle, {
                opacity: 0,
                x: 120,
                ease: "bounce.in",
                stagger: 0.05,
                color: "#000"
            });

            // Animate paragraph after heading
            tl.from(charsPara, {
                opacity: 0,
                y: 120,
                ease: "power3.out",
                stagger: 0.02,
                color: "#000"
            }, "+=0.5"); // slight delay

            tl.from("#chooseimg", {
                opacity: 0,
                scale: 3,
                x: 140,
                y: 120,
                rotate: 100,
                scrollTrigger: {
                    trigger: mainBoxRef.current,
                    scrub: true,
                    pin: true,
                    pinSpacing: true,
                    pinnedContainer: mainBoxRef.current
                }
            })
        }, mainBoxRef);

        return () => {
            ctx.revert();
            splitText.revert();
            splitPara.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={mainBoxRef}
            className='w-full md:h-screen gap-5 md:gap-0 flex flex-col md:flex-row  my-12'
        >
            <div className='h-full md:p-4 flex justify-center items-center'>

                <Shape6 >
                    <h1
                        ref={textRef}
                        className='text-2xl md:text-3xl font-bold text-white mb-4'
                    >
                        Lorem ipsum dolor sit amet consectetur
                    </h1>

                    <p
                        ref={pRef}
                        className='text-lg md:text-xl text-white leading-relaxed md:px-10'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum, debitis at vel, nostrum non blanditiis quae nam tempore facere adipisci, praesentium ratione sapiente quod eius nihil error! Excepturi, obcaecati.
                    </p>
                </Shape6>
            </div>
            <div
                id='chooseimg'
                className='w-full flex justify-center p-7'
            >
                <motion.img
                    src='./svg/choose.svg'
                    alt='Choose'
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className='max-w-md w-full scale-75'
                />
            </div>
        </div>
    );
};

export default Complex2;
