import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollHorizental from './ScrollHorizental';
import { motion } from "framer-motion";
import { Shape5, Shape3 } from "../utils/Shape";
import { TextPlugin } from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin);


gsap.registerPlugin(ScrollTrigger);

const ComplexScale = () => {
    const mainBoxRef = useRef();
    const childBoxRefOne = useRef();
    const childBoxRefTow = useRef();

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        const ctx = gsap.context(() => {
            tl.fromTo(
                childBoxRefOne.current,
                {
                    opacity: 0,
                    rotate: -400
                },
                {
                    opacity: 1,
                    rotate: 0,
                    scrollTrigger: {
                        trigger: mainBoxRef.current,
                        start: "top top",
                        scrub: true,
                        pin: true,
                        pinSpacing: true,
                        pinnedContainer: mainBoxRef.current
                    }
                }
            )

            tl.fromTo(
                childBoxRefTow.current,
                {
                    opacity: 0,
                    rotate: 700
                },
                {
                    opacity: 1,
                    rotate: 0,
                    scrollTrigger: {
                        trigger: mainBoxRef.current,
                        start: "top top",
                        scrub: true,
                        pin: true,
                        pinSpacing: true,
                        pinnedContainer: mainBoxRef.current
                    }
                }
            )

            tl.fromTo("#focusd",
                { scale: 0, opacity: 0, y: 50, duration: 1.4 },
                {
                    scale: 1, opacity: 1, y: 0,
                    scrollTrigger: {
                        trigger: mainBoxRef.current,
                        scrub: true,
                        pin: true,
                        pinSpacing: true,
                        pinnedContainer: mainBoxRef.current
                    }
                }
            )

            tl.fromTo("#focudp",
                { scale: 0, opacity: 0, y: 50, duration: 1.4 },
                {
                    scale: 1, opacity: 1, y: 0,
                    scrollTrigger: {
                        trigger: mainBoxRef.current,
                        scrub: true,
                        pin: true,
                        pinSpacing: true,
                        pinnedContainer: mainBoxRef.current
                    }
                }
            )

        })

        return () => ctx.revert();
    }, [])
    return (
        <div
            className='w-full h-screen overflow-hidden flex flex-col md:flex-row relative'
            ref={mainBoxRef}
        >
            <div
                ref={childBoxRefOne}
                className='w-full h-screen absolute sm:static flex 
                justify-center items-center order-1'
            >
                <motion.img
                    src='./svg/focused.svg'
                    className='w-[50%]'
                />
            </div>
            <div
                className='w-full h-screen absolute sm:static flex justify-center items-center order-2 sm:p-10'
                ref={childBoxRefTow}
            >
                <Shape3>
                    <h1
                        id='focusd'
                        className='text-2xl sm:text-3xl md:text-5xl'
                    >
                        Focusd
                    </h1>
                    <p
                        id='focudp'
                        className='text-xl text-white p-2 my-5'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita adipisci aliquam cum qui aliquid tempore a amet unde officiis consequuntur, praesentium alias maiores mollitia autem placeat sint, earum debitis."
                    </p>
                </Shape3>
            </div>

            <ScrollHorizental
                text={"Comming..."}
                position='absolute'
                fontSize={5}
                type='zoomIn'
            />
        </div>
    )
}

export default ComplexScale