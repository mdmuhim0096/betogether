import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  TextEffect from "./TextEffect";

const services = [
    {
        title: "24/7 Customer Support",
        description: "Round-the-clock assistance via chat, email, or phone for quick issue resolution.",
        icon: "./svg/support2.svg"
    },
    {
        title: "Consulting & Strategy",
        description: "Expert guidance to help businesses plan growth and optimize workflows.",
        icon: "./svg/presentatio.svg"
    },
    {
        title: "Technical Support",
        description: "Software setup, troubleshooting, and system maintenance services.",
        icon: "./svg/support3.svg"
    },
    {
        title: "Training & Workshops",
        description: "Interactive sessions to upskill teams with the latest tools and practices.",
        icon: "./svg/tracking.svg"
    },
    {
        title: "Project Management Assistance",
        description: "Support in planning, executing, and monitoring projects for timely delivery.",
        icon: "./svg/voice-interface.svg"
    }
];

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Slider = () => {
    return (
        <div className="w-full h-screen my-20">
            <TextEffect text={"Service"} type="h1" />
            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2500} showDots className="h-[85%]">
                {services.map((service, index) => (
                    <div key={index} className="h-[66vh] shadow-md rounded-2xl p-6 m-2 text-center bg-zinc-900/20">
                        <img
                            src={service.icon}
                            className="mx-auto w-40 h-40 rounded-full border"
                            id="serviceimage"
                        />
                        <h3 className="text-xl font-bold mb-2 text-white my-10">{service.title}</h3>
                        <p className="text-white">{service.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
