
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import { scale } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const ScrollHorizental = ({ text, position = "static", fontSize = 10, zIndex = 999, type = "zoomIn" }) => {
    const TileRef = useRef();
    const TileBoxRef = useRef();

    const animation = type === "zoomIn" ?
        {
            scale: 6,
            opacity: 0,
        } : type === "zoomOut" ? {
            scale: 0,
            opacity: 0,
        } : type === "-scrollX" ? {
            xPercent: "-160",
            scale: 3,
            opacity: 0
        } : type === "scrollX" ? {
            xPercent: "-160",
            scale: 3,
            opacity: 0
        } : type === "scrollUp" ? {
            yPercent: "-160",
            scale: 0,
            opacity: 0
        } : type === "scrollDown" ? {
            yPercent: "160",
            scale: 0,
            opacity: 0
        } : null;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(TileRef.current, {
                ...animation,
                scrollTrigger: {
                    trigger: TileBoxRef.current,
                    scroller: "body",
                    scrub: true,
                    start: "top 10%",
                    pin: true,
                    pinSpacing: true,
                    pinnedContainer: TileBoxRef.current
                }
            })
        })
        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={TileBoxRef}
            className={`w-full h-screen flex justify-center
            items-center overflow-hidden ${position} z-[${zIndex}]`}

        >
            <h1 
            ref={TileRef}
             className={` text-white font-extrabold uppercase`}
             style={{fontSize: `${fontSize}vw`}}
             >{text}</h1>
        </div>
    )
}

export default ScrollHorizental