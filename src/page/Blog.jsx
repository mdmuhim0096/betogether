import Navbar from "../components/utils/Navbar";
import Footer from "../components/utils/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react"
import TextEffect from "../components/utils/TextEffect";
import { goToTop } from "../components/utils/function";

const blogPosts = [
    {
        title: "How Technology is Transforming Businesses",
        description:
            "Explore how digital solutions like cloud, AI, and automation are reshaping industries and improving efficiency.",
        image: "./svg/",
        date: "August 15, 2025",
        author: "Admin"
    },
    {
        title: "Top 5 Trends in Web Development 2025",
        description:
            "From AI-driven development to edge computing, discover the latest trends shaping the future of the web.",
        image: "./svg/",
        date: "August 22, 2025",
        author: "John Doe"
    },
    {
        title: "Why User Experience is the Key to Success",
        description:
            "Learn why UX design is crucial for customer satisfaction and long-term brand loyalty.",
        image: "./svg/",
        date: "August 29, 2025",
        author: "Jane Smith"
    },
    {
        title: "The Rise of Remote Work in 2025",
        description:
            "Discover how hybrid models, digital collaboration tools, and flexible schedules are shaping the modern workplace.",
        image: "./svg/",
        date: "September 05, 2025",
        author: "Michael Carter"
    },
    {
        title: "AI in Everyday Life: Beyond the Hype",
        description:
            "Explore practical applications of artificial intelligence, from healthcare to personal assistants, that impact our daily routines.",
        image: "./svg/",
        date: "September 12, 2025",
        author: "Sophia Lee"
    },
    {
        title: "Sustainable Tech: The Future of Green Innovation",
        description:
            "Learn how renewable energy, eco-friendly devices, and smart cities are driving sustainability in the tech industry.",
        image: "./svg/",
        date: "September 19, 2025",
        author: "Daniel Kim"
    }
    , {
        title: "Cybersecurity Challenges in the Digital Age",
        description:
            "Uncover the latest threats and strategies businesses use to safeguard data in an increasingly connected world.",
        image: "./svg/",
        date: "September 26, 2025",
        author: "Emily Roberts"
    },
    {
        title: "Blockchain Beyond Cryptocurrency",
        description:
            "Learn how blockchain is revolutionizing industries like supply chain, healthcare, and digital identity verification.",
        image: "./svg/",
        date: "October 03, 2025",
        author: "David Miller"
    },
    {
        title: "The Future of 5G and Connectivity",
        description:
            "Explore how 5G networks are enabling faster communication, smart cities, and the Internet of Things.",
        image: "./svg/",
        date: "October 10, 2025",
        author: "Olivia Brown"
    }

];

const Blog = () => {

    useEffect(() => {
        goToTop();
    }, [])

    const [loadIndex, setLoadIindex] = useState(3);
    const data = blogPosts.slice(0, loadIndex)
    return (
        <>
            <Navbar />
            <section className="w-full h-auto pt-32">
                <div className="p-4 text-2xl flex flex-col md:flex-row gap-10 relative">
                    <div className="w-full sm:w-7/12 order-2 sm:order-1 flex justify-center sm:flex-col">
                        <motion.span
                            className="text-center mx-auto block mt-10 absolute -top-10 sm:static"
                            initial={{ y: -120, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <q className="text-4xl md:text-6xl text-green-400 inline-block"></q>
                            <h1 className={`bg-clip-text text-transparent font-extrabold sm:text-4xl inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-500 to-100%`}>Blog</h1>
                            <q className="text-4xl md:text-6xl text-green-400 inline-block"></q>
                        </motion.span>
                        <TextEffect text={"Discover insights on technology, innovation, and digital transformation. Our blog shares strategies, design trends, and engineering solutions to help businesses launch, grow, and succeed in the modern digital era. Stay updated with expert tips and industry best practices."} />

                    </div>
                    <motion.img
                        src="./svg/blog.svg"
                        className="w-full sm:w-5/12 order-1 sm:order-2 scale-90"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 0.9, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                    />
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-4 sm:gap-3 md:gap-4 my-20">
                    {data.map((post, index) => (
                        <motion.article
                            key={index}
                            className="w-ful h-[70vh] bg-zinc-900/30 rounded-md p-2"
                            initial={{ y: 120, opacity: 0, scale: 0.6 }}
                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            <div
                                className="w-full h-full flex flex-col justify-between items-center"
                            >
                                <img
                                    src={post.image + "b" + index + ".svg"}
                                    alt={post.title}
                                    className="w-full h-[45%] sm:h-[50%] object-fill my-2 bg-zinc-900/30 rounded-md"
                                />
                                <div className="h-[55%] sm:h-[50%] flex flex-col justify-around items-start bg-zinc-900/10 rounded-md p-1 px-2">
                                    <p className="text-sm text-slate-50">{post.date} • {post.author}</p>
                                    <h3 className="text-sm mt-2 text-emerald-500">{post.title}</h3>
                                    <p className="mt-2 text-sm text-slate-300">{post.description}</p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block text-green-500 font-medium hover:underline"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </div>

                        </motion.article>
                    ))}
                </div>

                <div className="w-full h-auto flex justify-center items-center my-10">
                    {loadIndex <= data.length && (<motion.button
                        whileTap={{ scale: 1.1 }}
                        transition={{ duration: 1.3, type: "spring", stiffness: 300 }}
                        className="px-2 py-1 border border-green-600 bg-zinc-900 text-green-700"
                        onClick={() => setLoadIindex(loadIndex * 2)}
                    >load more →</motion.button>)}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
