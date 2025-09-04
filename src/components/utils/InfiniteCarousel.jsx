import { useRef, useEffect } from "react";
import gsap from "gsap";

const InfiniteCarousel = () => {
    const carouselRef = useRef(null);
    const tlRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const totalWidth = Array.from(carousel.children).reduce(
            (acc, child) => acc + child.offsetWidth,
            0
        );

        // Duplicate items for seamless looping
        carousel.innerHTML += carousel.innerHTML;

        tlRef.current = gsap.to(carousel.children, {
            x: `-=${totalWidth}px`,
            ease: "none",
            duration: 20, // adjust speed
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
            }
        });

        // Pause/resume on hover
        const handleMouseEnter = () => tlRef.current.timeScale(2); // speed up
        const handleMouseLeave = () => tlRef.current.timeScale(1); // normal speed

        carousel.addEventListener("mouseenter", handleMouseEnter);
        carousel.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            carousel.removeEventListener("mouseenter", handleMouseEnter);
            carousel.removeEventListener("mouseleave", handleMouseLeave);
            tlRef.current.kill();
        };
    }, []);

    const items = new Array(9).fill("./image/company/")

    return (
        <div className="overflow-hidden w-full relative my-10">
            <div
                ref={carouselRef}
                className="flex gap-4 whitespace-nowrap cursor-pointer w-[700vw] h-[30vh] my-14"
            >
                {items.map((item, index) => (
                    <img
                        key={index}
                        src={item + index + ".png"}
                        className="w-52 h-52 object-fill scale-50"
                    />
                ))}

            </div>
        </div>
    );
};


export default InfiniteCarousel;
