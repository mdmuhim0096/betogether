
import { motion } from "framer-motion";
import {
    Mail, User, Phone, Key, Building, BookText
} from "lucide-react";


const Input = ({ Icon, type, name }) => (
    <div className="flex text-green-500 w-full ring-1 ring-green-400 px-2 py-1 rounded-md my-2 items-center">
        <Icon />
        <input
            className="focus:outline-none w-full bg-transparent px-2 text-white placeholder:text-green-400 placeholder:capitalize"
            placeholder={name}
            type={type}
            required
        />
    </div>
);

/* -------------------------
   Contact Page
   ------------------------- */
const Contact = () => {

    const form = [
        { name: "name", type: "text", icon: User },
        { name: "email", type: "email", icon: Mail },
        { name: "phone", type: "tel", icon: Phone },
        { name: "password", type: "password", icon: Key },
        { name: "company", type: "text", icon: Building }
    ];

    return (
        <>
            <motion.div
                className="w-full h-auto py-20"
            >

                <motion.div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-3">

                    <motion.form
                        action="#"
                        method="post"
                        className="w-full sm:w-[50%] h-auto rounded-md sm:px-5 mx-auto flex flex-col bg-zinc-900/20 pb-10 px-2"
                    >
                        <h1 className="text-center capitalize text-xl my-6 text-white">contact form <BookText className="inline-block mx-2" /></h1>
                        {form.map((data, index) => (
                            <motion.div
                                initial={{ y: 70, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 * index }}
                                key={index} >
                                <Input type={data.type} name={data.name} Icon={data.icon} />
                            </motion.div>
                        ))}

                        <motion.button
                            type="submit"
                            initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="mt-3 p-2 rounded-md bg-green-500 hover:bg-green-600 cursor-pointer text-center text-white hover:text-green-300 w-full capitalize"
                        >
                            Submit
                        </motion.button>
                    </motion.form>

                    {/* Map — wrapped so it follows stagger */}
                    <motion.div className="w-full sm:w-[50%] rounded-md overflow-hidden px-2">
                        <motion.h1
                            className="text-white capitalize mb-8"
                        >
                            developer info

                        </motion.h1>
                        <motion.p
                            className="my-2 text-slate-300"
                        >
                            Hey, I’m <span className="text-emerald-400">Muhim</span>, a passionate Full Stack Developer with 2+ years of experience in building modern, scalable, and user-friendly web applications. I specialize in JavaScript, HTML, CSS3, Tailwind CSS, Bootstrap, React, Node.js, MongoDB, REST APIs, and Socket.IO. I love working on real-time applications such as chat systems, and I enjoy turning ideas into clean, efficient, and production-ready solutions.
                        </motion.p>
                        <motion.h1
                            className="text-white capitalize my-4 mt-8"
                        >
                            information of this page
                        </motion.h1>
                        <motion.ul className="text-slate-300">
                            <motion.li>Made my:- Muhim islam</motion.li>
                            <motion.li>Technology used:- ReactJS, Tailwindcss, greensock animation platform (GSAP), Framer-motion, React-router-dom, Lucide-react as icon, Josefin-sans as font style</motion.li>
                        </motion.ul>
                        <motion.p>

                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Contact;