import { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion"

const Complex3 = () => {

  const mainBoxRef = useRef(null);

  useLayoutEffect(() => {

    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.fromTo(".box_1", {
        scale: 0.1,
        rotate: 360,
        x: 1000,
        duration: 3
      }, {
        scale: 1,
        x: 0,
        borderRadius: 0,
        scrollTrigger: {
          trigger: mainBoxRef.current,
          pin: true,
          scrub: true,
          pinSpacing: true,
          pinnedContainer: mainBoxRef.current
        }
      })

      tl.fromTo(".box_2",
        {
          translateY: "-100%",
          translateX: "-200%",
          rotate: 90,
          duration: 2,
          scale: 0.3
        },
        {
          translateY: 0,
          translateX: 0,
          rotate: 0,
          scale: 1,
          width: "100%",
          scrollTrigger: {
            trigger: mainBoxRef.current,
            pin: true,
            scrub: true,
            pinSpacing: true,
            pinnedContainer: mainBoxRef.current
          }
        })

      tl.fromTo(".box_3",
        {
          translateY: "100%",
          translateX: "200%",
          rotate: -90,
          duration: 2,
          scale: 0.3
        },
        {
          translateY: 0,
          translateX: 0,
          rotate: 0,
          scale: 1,
          scrollTrigger: {
            trigger: mainBoxRef.current,
            pin: true,
            scrub: true,
            pinSpacing: true,
            pinnedContainer: mainBoxRef.current
          }
        })

      tl.fromTo(".box_4",
        {
          translateY: "-100%",
          duration: 2,
          scale: 0,
          borderRadius: "200%"
        },
        {
          translateY: 0,
          scale: 1,
          borderRadius: 0,
          scrollTrigger: {
            trigger: mainBoxRef.current,
            pin: true,
            scrub: true,
            pinSpacing: true,
            pinnedContainer: mainBoxRef.current
          }
        })
    })

    return () => ctx.revert();

  }, [])
  return (
    <div
      className='w-full h-screen relative'
      ref={mainBoxRef}
    >


      <div className="box_1 w-full h-full bg-zinc-800/20 flex justify-center items-center rounded-full overflow-hidden relative text-white">

        <div className='w-full h-full fixed flex flex-col md:flex-row items-center sm:gap-6 p-4 '>
          <motion.img
            src="./svg/ideas.svg"
            className='w-full mt-10 h-[35vh] sm:w-5/12 sm:h-[75vh] p-5'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300, delay: 0.3 }}
          />
          <div className='w-full'>
            <motion.h1
              className='text-center text-xl sm:text-2xl my-3 sm:my-11'
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >Our Comunity</motion.h1>
            <motion.p
              className='sm:px-10 sm:text-xl'
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt voluptatum voluptatibus totam reprehenderit, odio repudiandae. Delectus quisquam, assumenda quam non itaque suscipit repellat magnam recusandae dolor eaque illum harum.</motion.p>
          </div>
        </div>

        <div
          className='box_2 w-full h-full p-4 bg-gradient-to-bl from-cyan-500 from- via-blue-500 via- to-teal-600 fixed'
        >
          <div className='w-full h-full fixed flex flex-col md:flex-row items-center sm:gap-6 p-4 left-0'>

            <div className='w-full order-2 md:order-1'>
              <motion.h1
                className='text-center text-xl sm:text-2xl my-3 sm:my-11'
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >Our Work</motion.h1>
              <motion.p
                className='sm:px-10 sm:text-xl'
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt voluptatum voluptatibus totam reprehenderit, odio repudiandae. Delectus quisquam, assumenda quam non itaque suscipit repellat magnam recusandae dolor eaque illum harum.</motion.p>
            </div>
            <motion.img
              src="./svg/work.svg"
              className='w-full mt-10 h-[35vh] sm:w-5/12 sm:h-[75vh] p-5 order-1 md:order-2'
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300, delay: 0.3 }}
            />
          </div>
        </div>

        <div
          className='box_3 w-full h-full p-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 to-100%'
        >

          <div className='w-full h-full fixed flex flex-col md:flex-row items-center sm:gap-6 p-4 left-0'>
            <motion.img
              src="./svg/solution.svg"
              className='w-full mt-10 h-[35vh] sm:w-5/12 sm:h-[75vh] p-5 order-2 md:order-1'
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300, delay: 0.3 }}
            />
            <div className='w-full order-2 md:order-1'>
              <motion.h1
                className='text-center text-xl sm:text-2xl my-3 sm:my-11'
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >Our Slution</motion.h1>
              <motion.p
                className='sm:px-10 sm:text-xl'
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt voluptatum voluptatibus totam reprehenderit, odio repudiandae. Delectus quisquam, assumenda quam non itaque suscipit repellat magnam recusandae dolor eaque illum harum.</motion.p>
            </div>
          </div>
          <div
            className='box_4 w-full h-full p-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 to-100% fixed top-0 left-0'
          >
            <div className='w-full h-full fixed flex flex-col md:flex-row items-center sm:gap-6 p-4 left-0'>
              <motion.img
                src="./svg/account.svg"
                className='w-full mt-10 h-[35vh] sm:w-5/12 sm:h-[75vh] p-5 order-2 md:order-1'
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 300, delay: 0.3 }}
              />
              <div className='w-full order-2 md:order-1'>
                <motion.h1
                  className='text-center text-xl sm:text-2xl my-3 sm:my-11'
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >Access Account</motion.h1>
                <motion.p
                  className='sm:px-10 sm:text-xl'
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt voluptatum voluptatibus totam reprehenderit, odio repudiandae. Delectus quisquam, assumenda quam non itaque suscipit repellat magnam recusandae dolor eaque illum harum.</motion.p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Complex3