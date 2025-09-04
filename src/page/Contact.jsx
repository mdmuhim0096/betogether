import { useEffect } from 'react'
import Navbar from '../components/utils/Navbar';
import Footer from '../components/utils/Footer';
import TextEffect from "../components/utils/TextEffect";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import { MapPin, Facebook, Instagram, Linkedin, Twitch, Twitter } from "lucide-react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Form from "../components/utils/Form";
import { goToTop } from "../components/utils/function";

const Contact = () => {

    useEffect(() => {
        goToTop();
    }, [])
    const info = ["Office Address: 123 Tech Street, Dhaka, Bangladesh", "Phone: +880 1234 567 890", "Email: contact@yourcompany.com", "Working Hours: Mon–Fri, 9:00 AM – 6:00 PM"];

    const mapLink = [
        {
            link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.1219339657355!2d90.41412594712148!3d23.872531961930342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5003902d6c5%3A0x48b2e1d79985d7e3!2sMilestone%20College%20Dakshinkhan%20(EIIN%3A%20136844)!5e1!3m2!1sen!2sbd!4v1756548708296!5m2!1sen!2sbd",
            location: " 123 Tech Street, Dhaka, Bangladesh"
        },
        {
            link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.187864235746!2d90.3938300218504!3d23.731241218150657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b934fecec641%3A0xb98c1080b250d866!2sTSC%2C%20University%20of%20Dhaka!5e1!3m2!1sen!2sbd!4v1756548857475!5m2!1sen!2sbd",
            location: "123 Tech Street, Dhaka, Bangladesh"
        }];

    const socialLink = [
        { Icon: Facebook, name: "facebook" },
        { Icon: Instagram, name: "instagram" },
        { Icon: Linkedin, name: "linkedin" },
        { Icon: Twitch, name: "twitch" },
        { Icon: Twitter, name: "twitter" },

    ]

    const Width = window.innerWidth;


    return (
        <>
            <Navbar />
            <div className='mt-16 relative md:px-2 lg:px-0'>
                <div className="p-4 text-2xl flex flex-col md:flex-row gap-10">
                    <div className="w-full sm:w-7/12 order-2 sm:order-1 flex justify-center sm:flex-col">
                        <motion.span
                            className="text-center mx-auto block mt-10 absolute top-0  sm:static"
                            initial={{ y: -120, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <q className="text-4xl md:text-6xl text-green-400 inline-block"></q>
                            <h1 className={`bg-clip-text text-transparent font-extrabold sm:text-4xl inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-500 to-100%`}>Get in Touch</h1>
                            <q className="text-4xl md:text-6xl text-green-400 inline-block"></q>
                        </motion.span>
                        <TextEffect text={"We’d love to hear from you! Whether you have a question, need support, or want to discuss your next big project, our team is here to help. Reach out using the form below or through any of our contact details."} />
                    </div>
                    <motion.img
                        src="./svg/contact.svg"
                        className="w-full sm:w-5/12 order-1 sm:order-2 scale-90 mt-20 sm:mt-0"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 0.9, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                    />
                </div>

                <div className='w-full h-auto md:h-screen my-20 flex flex-col sm:flex-row px-2 sm:px-3'>
                    <div className='w-full md:w-[88%]'>
                        <img
                            src="./svg/info.svg"
                            className='w-full h-full object-fill p-4'
                        />
                    </div>
                    <div className='w-full flex flex-col justify-center gap-2 lg:gap-3 items-center'>
                        <motion.div
                            initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className='w-full h-auto bg-zinc-900/20 p-2 text-white rounded-md'>
                            <h3 className='pb-1'>Home - 1</h3>
                            {info.map((link, index) => (
                                <h3
                                    key={index}
                                    className='leading-6'
                                >{link}</h3>
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className='w-full h-auto bg-zinc-900/20 p-2 text-white rounded-md'>
                            <h3 className='pb-1'>Home - 2</h3>
                            {info.map((link, index) => (
                                <h3
                                    key={index}
                                    className='leading-6 text-[14px]'
                                >{link}</h3>
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className='w-full h-auto left-0 bg-zinc-900/20 p-2 rounded-md'>
                            <h1 className='capitalize text-white my-2'>socisl link </h1>
                            <div className='grid gap-3 grid-cols-3 sm:grid-cols-5 md:gap-2'>
                                {socialLink.map((social, index) => (
                                    <motion.a
                                        href="#"
                                        key={index}
                                        className='w-full h-20 md:h-16 flex justify-center items-center flex-col rounded-md text-white bg-zinc-900/35'
                                        initial={{ y: 70, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.3 * index }}
                                    >
                                        <social.Icon />
                                        <h5 className='md:text-sm'>{social.name}</h5>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className='my-20 mt-48'>
                    <div className='flex items-center justify-center my-6'>
                        <motion.h1
                            initial={{ y: 120, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className='text-3xl sm:text-5xl inline-block capitalize px-4 font-bold bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] bg-clip-text text-transparent'
                        >live location</motion.h1>

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 300, delay: 0.6 }}
                        >
                            <MapPin
                                size={Width < 321 ? 30 : 40}
                                color="#a21caf"
                                strokeWidth={2.5}
                            />
                        </motion.div>
                    </div>
                    <div className='w-full flex flex-col sm:flex-row gap-5 px-2'>
                        {
                            mapLink.map((info, index) => (
                                <motion.div
                                    className='w-full'
                                    key={index}
                                    initial={{ y: 120, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, type: "spring", stiffness: 300, delay: 0.3 * index }}
                                    viewport={{once: true}}
                                >
                                    <h1 className='py-2 flex gap-3 my-2 text-justify'>
                                        <span className='text-green-400 whitespace-nowrap'><MapPin className='inline' /> - {index + 1}</span>
                                        <span className='text-white mr-2'>Office Address: <span className='text-orange-500 mx-2 cursor-pointer'>{info.location}</span></span>
                                    </h1>
                                    <iframe
                                        key={index}
                                        src={info.link}
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                        className='w-full h-[60vh] rounded-md p-1 sm:p-4 bg-zinc-900/20'
                                        before="location - 1"
                                    ></iframe>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <Form />
                </motion.div>
            </div>

            <Footer />
        </>
    )
}

export default Contact;

