
import { motion } from "framer-motion";

 const TextEffect = ({ text, type = "p" }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center items-center">
      <motion.h1
        className={`${type === "h1"
            ? "text-3xl sm:text-4xl md:text-5xl font-bold text-white flex"
            : "text-[14pt] py-2 text-white md:px-4 md:text-center lg:text-2xl"
          }`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        animate="visible"

      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            className={type === "h1" ? "mx-0.5" : "mx-0"}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};


export default TextEffect