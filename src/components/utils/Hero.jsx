import { motion, useMotionValue, useTransform } from "framer-motion";
import { Shape1 } from "./Shape";
import TextEffect from "./TextEffect";

const FloatingCircle = ({ top, size, duration, delay, color }) => {
    return (
        <motion.div
            className={`absolute rounded-full`}
            style={{
                width: size,
                height: size,
                top: top,
                backgroundColor: color,
            }}
            animate={{
                x: ["0%", "1500%", "0%"],
                y: ["0%", "20%", "-10%"], // subtle vertical movement
                rotate: [0, 180, 360],    // rotation for liveliness
                scale: [1, 1.2, 1],       // pulsating effect
                opacity: [0.7, 1, 0.7],   // fade in/out
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        />
    );
};

const Hero = () => {
    const mouseX = useMotionValue(window.innerWidth / 2);
    const mouseY = useMotionValue(window.innerHeight / 2);

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <div
            className="w-full h-screen relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
 
            <FloatingCircle top="10%" size="80px" duration={12} delay={0} color="#4ade80" />
            <FloatingCircle top="30%" size="60px" duration={15} delay={2} color="#3b82f6" />
            <FloatingCircle top="50%" size="100px" duration={18} delay={1} color="#facc15" />
            <FloatingCircle top="70%" size="50px" duration={20} delay={3} color="#f472b6" />
            <FloatingCircle top="40%" size="70px" duration={25} delay={2} color="#10b981" />

            <div className="absolute flex flex-col-reverse sm:flex-row w-full h-screen justify-evenly items-center">
                <div className="w-full sm:w-5/12 px-2 gap-4 flex relative">
                    <motion.button
                        whileTap={{ scale: 1.1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 500 }}
                        className="w-[50%] h-auto px-2 py-1 rounded-md bg-gradient-to-r from-[#4ade80] via-[#14b8a6] to-[#0891b2] text-white text-[16px] sm:text-xl rounded-tr-full rounded-bl-full"
                    >
                        Learn more
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 1.4 }}
                        transition={{ duration: 1, type: "spring", stiffness: 500 }}
                        className="w-[50%] h-auto px-2 py-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 md:absolute top-20 left-20 text-white text-[16px] sm:text-xl rounded-tr-full rounded-bl-full transition-all duration-150">
                        Get start
                    </motion.button>
                </div>
                <div className="w-full md:w-[70%] lg:w-6/12 h-[80%] flex justify-center items-center">
                    <Shape1>
                        <TextEffect text={"The Axis Group"} type="h1" />
                        <TextEffect text={"Financial Consulting. Let Us Do the Math."} type="p" />
                        <motion.button
                            whileTap={{ scale: 1.1 }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 500 }}
                            className="w-[50%] lg:w-[36%] h-auto py-1 rounded-md border-2 text-white text-[15px] sm:text-xl rounded-tr-full rounded-bl-full mt-6"
                        >
                            Join
                        </motion.button>

                    </Shape1>
                </div>

            </div>

        </div>
    );
};

export default Hero;


//  201761790 ENNI 353U56 
