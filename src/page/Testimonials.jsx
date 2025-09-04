
import Navbar from "../components/utils/Navbar";
import Footer from "../components/utils/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TextEffect from "../components/utils/TextEffect";
import { motion } from "framer-motion"
import { goToTop } from "../components/utils/function";
import { useEffect } from "react";
import InfiniteCarousel from "../components/utils/InfiniteCarousel";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, BrightTech",
        feedback:
            "Working with this company has been a game-changer. Their team is professional, dedicated, and always delivers on time.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Michael Smith",
        role: "Founder, InnovateX",
        feedback:
            "They understand client needs deeply and provide excellent solutions. Highly recommend their services!",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Emma Williams",
        role: "Marketing Director, GrowthHub",
        feedback:
            "Amazing experience! The quality of work exceeded my expectations, and their communication is top-notch.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "David Lee",
        role: "CTO, TechSolutions",
        feedback:
            "Professional, efficient, and reliable. Their solutions helped our business scale rapidly.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1536 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1535, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1023, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
    },
};

const description = "Our clients’ success is our top priority. From startups to established enterprises, we deliver solutions that drive growth, improve efficiency, and create lasting value. Read what our satisfied clients have to say about working with our team and why they continue to trust us with their most important projects."

const Testimonials = () => {

    useEffect(() => {
        goToTop();
    }, []);

    return (
        <>
            <Navbar />
            <section className="py-16 mt-20 relative">

                <div className="p-4 text-2xl flex flex-col md:flex-row gap-10">
                    <div className="w-full sm:w-7/12 order-2 sm:order-1 flex justify-center sm:flex-col">
                        <motion.span
                            className="text-center mx-auto block mt-10 absolute top-0  sm:static"
                            initial={{ y: -120, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <q className="text-4xl md:text-6xl text-green-400 inline-block"></q>
                            <h1 className={`bg-clip-text text-transparent font-extrabold sm:text-4xl inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-500 to-100%`}>Testimonials</h1>
                            <q className="text-4xl md:text-6xl text-green-400 inline-block"></q>
                        </motion.span>
                        <TextEffect text={description} />
                    </div>
                    <motion.img
                        src="./svg/testimonials.svg"
                        className="w-full sm:w-5/12 order-1 sm:order-2 scale-90"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 0.9, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                    />
                </div>

                <div
                    className="w-full h-auto my-16"
                >
                    <h2 className="text-3xl font-bold px-20 text-center my-10 text-white">What Our Clients Say</h2>

                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        showDots
                        className="h-[80%] pb-9"
                    >
                        {testimonials.map((service, index) => (
                            <div key={index} className="h-[66vh] shadow-md rounded-2xl p-6 m-2 text-center bg-zinc-900/20">
                                <img
                                    src={service.image}
                                    className="mx-auto w-16 h-16 rounded-full border"
                                    id="serviceimage"
                                />
                                <h3 className="text-xl font-bold mb-2 text-white my-5">{service.name}</h3>
                                <h3 className="text-xl font-bold mb-2 text-white my-5">{service.role}</h3>
                                <p className="text-white md:my-5 md:text-xl">{service.feedback}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
            <InfiniteCarousel />
            <Footer />
        </>
    );
};

export default Testimonials;
