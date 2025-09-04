import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ = () => {
  const FAQ = [
    {
      question: "What services/products do you offer?",
      ans: "We provide [brief description of your main offerings] to help you [benefit for customers].",
    },
    {
      question: "How can I get started?",
      ans: "Simply [sign up / contact us / place an order] through our website, and our team will guide you step-by-step.",
    },
    {
      question: "Do you offer customer support?",
      ans: "Yes, our support team is available [hours & days] via [email, phone, live chat].",
    },
    {
      question: "Accepted Payment Methods?",
      ans: "We accept all major payment methods, including [credit cards, PayPal, bank transfer, etc.].",
    },
    {
      question: "Is there a refund or return policy?",
      ans: "Yes, we offer a [number]-day refund/return policy. For details, please see our [link to policy].",
    },
    {
      question: "Where are you located?",
      ans: "Our headquarters are in [city/country], but we serve customers worldwide.",
    },
    {
      question: "How can I contact you?",
      ans: "You can reach us at [email/phone] or by filling out our contact form.",
    },
  ];

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: i * 0.15,
        type: "spring",
        stiffness: 120
      },
    }),
  };

  return (
    <div className="py-20">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-left text-white font-bold text-xl sm:text-3xl sm:ml-28 pl-3"
      >
        FAQ
      </motion.h1>

      <div className="px-1 md:px-32 my-10">
        {FAQ.map((data, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <div
              onClick={() => {
                const el = document.getElementById(`q-${index}`);
                el.classList.toggle("hidden");
                const sign = document.getElementById(`icon-${index}`);
                sign.classList.toggle("rotate-45");
              }}
              className="w-full p-2 text-white bg-gradient-to-r hover:bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 mt-2 flex justify-between cursor-pointer  transition-colors duration-300"
            >
              <span>{data.question}</span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                whileTap={{ rotate: 45 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Plus id={`icon-${index}`} />
              </motion.span>
            </div>

            <motion.div
              id={`q-${index}`}
              className="h-auto bg-zinc-900/20 py-5 px-2 text-white hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {data.ans}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;