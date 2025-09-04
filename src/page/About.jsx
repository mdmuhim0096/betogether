import Navbar from "../components/utils/Navbar";
import Footer from "../components/utils/Footer";
import TextEffect from "../components/utils/TextEffect";
import { motion } from "framer-motion"
import { useEffect } from "react";
import { goToTop } from "../components/utils/function";

const content = {
  about: {
    title: "About Us",
    text:
      "We are a trusted technology partner dedicated to delivering high-quality digital solutions that drive real impact. By combining strategy, design, and engineering, we help organizations turn ideas into reality, launch with confidence, and scale effectively. Our focus is on building long-term partnerships, ensuring every solution is innovative, reliable, and tailored to achieve sustainable growth and success in today’s digital world.",
  },
  whoWeAre: {
    title: "Who We Are",
    bullets: [
      "Cross-functional team of strategists, designers, and engineers",
      "Focused on measurable outcomes and long-term partnerships",
      "Obsessed with performance, accessibility, and security",
      "Transparent communication and iterative delivery",
    ],
  },
  values: {
    title: "Core Values",
    items: [
      { name: "Trust & Transparency", desc: "We communicate clearly and keep our promises." },
      { name: "Customer First", desc: "Decisions start with user and business impact." },
      { name: "Craft & Quality", desc: "We sweat the details and ship reliable software." },
      { name: "Continuous Learning", desc: "We improve processes, skills, and outcomes." },
      { name: "Ownership", desc: "We take responsibility end-to-end." },
      { name: "Integrity", desc: "We do the right thing—always." },
    ],
  },
  mission: {
    title: "Mission Statement",
    text:
      "Empower businesses with modern, scalable software that drives growth, efficiency, and exceptional user experiences.",
  },
  vision: {
    title: "Vision Statement",
    text:
      "Be the most trusted partner for digital transformation—where innovation, ethics, and craftsmanship set the standard.",
  },
};

export default function About() {

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12 mt-20 relative text-white">
        {/* About Us */}
        <section aria-labelledby="about" className="w-full">
          <div className="p-2 text-2xl flex flex-col md:flex-row gap-10">
            <div className="w-full sm:w-7/12 order-2 sm:order-1 flex justify-center sm:flex-col">
              <motion.span
                className="text-center mx-auto block mt-10 absolute top-0  sm:static"
                initial={{ y: -120, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <q className="text-4xl md:text-6xl text-green-400 inline-block"></q>
                <h1 className={`bg-clip-text text-transparent font-extrabold sm:text-4xl inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-500 to-100%`}>About Us</h1>
                <q className="text-4xl md:text-6xl text-green-400 inline-block"></q>
              </motion.span>
              <TextEffect text={content.about.text} />
            </div>
            <motion.img
              src="./svg/about.svg"
              className="w-full sm:w-5/12 order-1 sm:order-2 scale-90"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 0.9, opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
            />
          </div>
        </section>

        {/* Who We Are */}
        <motion.section
          aria-labelledby="whoweare"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-md bg-zinc-900/30 p-3 sm:p-4 shadow-sm text-white mt-32">
          <h2 id="whoweare" className="text-xl sm:text-3xl font-semibold">
            {content.whoWeAre.title}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ul className="space-y-3">
              {content.whoWeAre.bullets.slice(0, Math.ceil(content.whoWeAre.bullets.length / 2)).map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {content.whoWeAre.bullets.slice(Math.ceil(content.whoWeAre.bullets.length / 2)).map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Core Values */}
        <section aria-labelledby="values" className="">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            id="values"
            className="text-2xl sm:text-3xl font-semibold mt-10 mb-3"
          >
            {content.values.title}
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.values.items.map((v, i) => (
              <motion.div
                key={i}
                className="rounded-md  bg-zinc-900/30 p-3 sm:p-8 shadow-sm"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 * i }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <h3 className="font-semibold">{v.name}</h3>
                </div>
                <p className="text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          aria-labelledby="mission"
          className="relative overflow-hidden rounded-md  mt-10 bg-zinc-900/30">
          <div className="pointer-events-none absolute inset-0 opacity-70 " />
          <div className="relative p-4 sm:p-8">
            <h2 id="mission" className="text-2xl sm:text-3xl font-semibold"> {content.mission.title} </h2>
            <p className="mt-4 max-w-3xl">{content.mission.text}</p>
          </div>
        </motion.section>

        {/* Vision Statement */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          aria-labelledby="vision"
          className="relative overflow-hidden rounded-md my-10 bg-zinc-900/30">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <div className="relative p-4 sm:p-8">
            <h2 id="vision" className="text-2xl sm:text-3xl font-semibold text-white">
              {content.vision.title}
            </h2>
            <p className="mt-4 max-w-3xl text-gray-200">
              {content.vision.text}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {
                ["Innovation", "Ethics", "Craftsmanship"].map((item, index) => (
                  <motion.span
                    initial={{ x: 120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 * index, type: "spring", stiffness: 300 }}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-100 ring-1 ring-white/20 cursor-pointer">
                    {item}
                  </motion.span>
                ))
              }

            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
