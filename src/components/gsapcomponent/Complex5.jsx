
import { useLayoutEffect, useEffect, useRef, Suspense, lazy, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { SwatchBook } from "lucide-react";
const MatrixRain = lazy(() => import("../utils/Matrixrain"));
import { motion } from "framer-motion";

const Complex5 = () => {
    const sectionTitleRef = useRef(null);
    const titleBoxRef = useRef(null);
    const magicBoxRef = useRef(null);
    const [isRain, setStartRain] = useState(false);
    const peicingContainer = useRef(null);
    const Width = window.innerWidth;
    console.log(Width, " px")
    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#rain-section",
            start: "top center",
            onEnter: () => setStartRain(true),
            onLeaveBack: () => setStartRain(false),
        });
    }, []);

    const pricingPlans = [
        {
            id: 1,
            name: "Free",
            price: 0,
            currency: "$",
            features: [
                "Basic feature access",
                "Limited support",
                "Single user",
            ],
            popular: false,
            bg: "bg-gradient-to-l from-[#d46bc1] via-[#ad2ee8] to-[#1b65e4]"
        },
        {
            id: 2,
            name: "Starter",
            price: 9,
            currency: "$",
            features: [
                "Access to core features",
                "Email support",
                "Up to 3 users",
            ],
            popular: false,
            bg: "bg-gradient-to-l from-[#e98f34] via-[#d406d1] to-[#04ba5c]"
        },
        {
            id: 3,
            name: "Standard",
            price: 19,
            currency: "$",
            features: [
                "All Starter features",
                "Priority support",
                "Up to 10 users",
                "Basic analytics",
            ],
            popular: true, // highlight standard plan
            bg: "bg-gradient-to-r from-emerald-400 to-cyan-500"
        },
        {
            id: 4,
            name: "Medium",
            price: 39,
            currency: "$",
            features: [
                "All Standard features",
                "Team collaboration",
                "Advanced analytics",
                "Custom reports",
            ],
            popular: false,
            bg: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#7900ff] via-[#548cff] to-[#93ffd8]"
        },
        {
            id: 5,
            name: "Premium",
            price: 69,
            currency: "$",
            features: [
                "All Medium features",
                "Dedicated account manager",
                "Priority support",
                "Unlimited users",
                "Advanced integrations",
            ],
            popular: false,
            bg: "bg-gradient-to-l from-[#38bdf8] via-[#fb7185] to-[#84cc16]"
        },
        {
            id: 6,
            name: "Pro",
            price: 129,
            currency: "$",
            features: [
                "All Premium features",
                "Custom solutions",
                "Enterprise-level security",
                "24/7 support",
                "Onboarding assistance",
            ],
            popular: false,
            bg: "bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1]"
        },
    ];


    useLayoutEffect(() => {
        const tl = gsap.timeline();
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionTitleRef.current,
                { opacity: 0, scale: 6 },
                {
                    opacity: 1,
                    scale: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleBoxRef.current,
                        scrub: true,
                        pin: true,
                        pinSpacing: true
                    }
                }
            );

            tl.fromTo(".block_1", {
                scale: 0,
                rotate: 360,
                duration: 3
            }, {
                scale: 1,
                borderRadius: 0,
                scrollTrigger: {
                    trigger: magicBoxRef.current,
                    pin: true,
                    scrub: true,
                    pinSpacing: true,
                    pinnedContainer: magicBoxRef.current
                }
            })

            tl.fromTo(".block_2",
                {
                    duration: 2,
                    scale: 3,
                    opacity: 0
                },
                {
                    scale: 1,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: magicBoxRef.current,
                        pin: true,
                        scrub: true,
                        pinSpacing: true,
                        pinnedContainer: magicBoxRef.current
                    }
                })

            tl.fromTo(".block_4",
                {
                    translateY: "100%",
                    translateX: "100%",
                    duration: 2,
                    scale: 0,
                    opacity: 0,
                    rotate: 56,
                    borderTopLeftRadius: "80%",
                    borderBottomLeftRadius: "80%",
                },
                {
                    translateY: 0,
                    translateX: 0,
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    scrollTrigger: {
                        trigger: magicBoxRef.current,
                        pin: true,
                        scrub: true,
                        pinSpacing: true,
                        pinnedContainer: magicBoxRef.current
                    }
                })

            tl.fromTo(peicingContainer.current,
                {
                    x: `-${Width < 326 ? "67.5" : Width < 376 ? "78.1" : Width < 426 ? "83.5" : Width < 769 ? "71" : Width < 1025 ? "61.6" : "58"}%`,
                },
                {
                    x: 0,
                    scrollTrigger: {
                        trigger: magicBoxRef.current,
                        pin: true,
                        scrub: true,
                        pinSpacing: true,
                        pinnedContainer: magicBoxRef.current
                    }
                })
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full overflow-hidden">

            <div
                ref={titleBoxRef}
                className="w-full h-screen flex justify-center items-center"
            >
                <div
                    ref={sectionTitleRef}
                    className="flex justify-center items-center text-white gap-4 text-3xl sm:text-6xl "
                >
                    <h1>Price</h1>
                    <SwatchBook className='scale-150' />
                </div>
            </div>

            <div
                className='w-full h-screen relative'
                ref={magicBoxRef}
            >

                <div className="block_1 w-full h-full bg-zinc-800/40 flex justify-center items-center rounded-full overflow-hidden relative text-white">

                    <div
                        id='rain-section'
                        className='w-full h-full fixed flex justify-center items-center'>
                        <h1 className='text-center text-[10vw] absolute rounded-full rainbow-bar font-extrabold'>Calculating....</h1>
                        {isRain && (<Suspense>
                            <MatrixRain density={1} fontSize={30} speed={3} columnGap={1} lineHeight={20} />
                        </Suspense>)}
                    </div>

                    <div
                        className='block_2 w-full h-full p-4 bg-gradient-to-r from-green-400 to-blue-500 fixed'
                    >
                        <div className='w-full h-full fixed flex flex-col md:flex-row items-center sm:gap-6 p-4 left-0'>

                        </div>
                    </div>

                    <div
                        className='block_3 w-full h-full '
                    >
                        <div className='w-full h-full fixed flex flex-col md:flex-row items-center sm:gap-6 p-4 left-0'>

                        </div>
                        <div
                            className='block_4 w-full h-full sm:p-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 to-100% fixed top-0 left-0 overflow-hidden'
                        >
                            <div
                                ref={peicingContainer}
                                className='w-[500vh] h-full flex items-center gap-5'>
                                {
                                    pricingPlans.map((data, index) => (
                                        <div
                                            key={index}
                                            className='w-[100vw] h-[77vh] rounded-xl relative bg-zinc-900/40 flex flex-col justify-center items-center p-3'
                                        >
                                            <span className={`px-5 py-1 rounded-md bg-emerald-600 absolute top-3 right-3 hover:bg-green-500 cursor-pointer ${data.popular === true ? "" : "hidden"}`}>populer</span>
                                            <h1 className={`mx-auto my-12 ${data.bg} bg-clip-text text-transparent font-extrabold text-4xl inline-block`}>{data.name}</h1>
                                            <h2 className='text-center text-2xl my-2'>
                                                <q>{data.currency + " " + data.price}</q>
                                            </h2>
                                            {data.features.map((item, index) => (
                                                <h3
                                                    key={index}
                                                    className='glow-text pb-2 mt-1'
                                                >{item}</h3>
                                            ))}

                                            <motion.button
                                                className='w-40 sm:w-5/12 h-auto px-10 py-1 my-10 rounded-md btn-grad'
                                                whileTap={{ scale: 1.4 }}
                                                transition={{ duration: 1, type: "spring", stiffness: 300 }}
                                            >
                                                get access
                                            </motion.button>

                                        </div>))
                                }
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Complex5;
