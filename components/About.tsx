import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from '../typings';


type Props = {
  pageinfo: PageInfo;
};

export default function About({pageinfo}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
      About
    </h3>

    <motion.img
      initial={{
        x: -200,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      src="./AboutB1.PNG" 
      className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 relative rounded-full  md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
    ></motion.img>

    <div className="space-y-10 px-0 md:px-10">
      <h4 className="text-4xl font-semibold">
        Here is a{" "}
        <span className="decoration-[#F7AB0A]/50 underline">little</span>{" "}
        background
      </h4>
      <p className='text-base'>Hi , I'm Hrithik , I have graduated from West Bengal University of Technology in Computer Science of Engineering with a overall GPA of 7.92. I have 1.3+ Years of professional experience as a Software Engineer in Telecommunication. With a undying passion for software and technologies trying to learn technologies and implement my knowledge and always tryna keep a smile :) , Thats all folks .</p>
    </div>
  </motion.div>
  )
}