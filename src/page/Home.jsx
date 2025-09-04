
import Hero from "../components/utils/Hero";
import { motion } from "framer-motion"
import TextEffect from "../components/utils/TextEffect";
import ScrollHorizental from "../components/gsapcomponent/ScrollHorizental";
import ComplexScale from "../components/gsapcomponent/ComplexScale";
import Complex2 from "../components/gsapcomponent/Complex2";
import Complex3 from "../components/gsapcomponent/Complex3";
import Complex4 from "../components/gsapcomponent/Complex4";
import Complex5 from "../components/gsapcomponent/Complex5";
import Slider from "../components/utils/Slider";
import InfiniteCarousel from "../components/utils/InfiniteCarousel";
import Navbar from "../components/utils/Navbar";
import Footer from "../components/utils/Footer";
import FAQ from "../components/utils/FAQ";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="flex flex-col sm:flex-row my-9">
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full sm:w-[50%] h-[80vh] pl-4 flex justify-center items-center relative"
                >
                    <motion.img
                        src="./svg/skateboarding.svg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 0.6, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute sm:-left-20"
                    />
                    <motion.img
                        src="./image/bg/cristeal.webp"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 0.6, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute -top-5 sm:-top-32 sm:-right-20 -z-[1]"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full sm:w-[50%] h-auto flex flex-col justify-center items-center relative"
                >
                    <TextEffect text={"Hey there"} type="h1" />
                    <p className="px-4 my-4 text-center">
                        <TextEffect text={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis neque saepe accusamus minima laboriosam rem temporibus, sint in? Ea fugiat magnam temporibus delectus veritatis quae quibusdam incidunt sequi. Minus!"} type="p" />
                    </p>
                </motion.div>
            </div>
            <ScrollHorizental text={"welcome"} type="-scrollX" />
            <ComplexScale />
            <Complex2 />
            <Complex3 />
            <Complex4 />
            <Complex5 />
            <Slider />
            <FAQ />
            <InfiniteCarousel />
            <Footer />
        </div>
    )
}

export default Home