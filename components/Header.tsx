import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from "react-social-icons";
import { Social } from '../typings';


type Props = {
  socials: Social[]
};

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
    <motion.div
       initial={{
         x: -500,
         opacity: 0,
         scale: 0.5
       }}
       animate={{
        x:0,
        opacity: 1,
        scale: 1
       }} 
       transition={{
        duration:1.5
       }}
       className='flex flex-row items-center'>
       {/* social media icons*/} 
       {socials.map((social) =>(
      <SocialIcon 
      key={social._id}  
      url={social.url} 
      fgColor='grey'
      bgColor='transparent'/>
       
       ))}
    </motion.div>

    <a href="#contact "></a>
    <motion.div 
    initial ={{
      x: 500,
      opacity: 1,
      scale: 0.5,
    }}
    animate={{
      x:0,
      opacity:1,
      scale:1,
    }}
    transition={{
      duration:1.5
     }}
    className='flex flex-row items-center text-grey-500 cursor-pointer'>
    <SocialIcon
       className='cursor-pointer' 
       network='email'
       fgColor='grey'
       bgColor='transparent'/>
      <Link href="#contact"><p className='uppercase hidden md:inline-flex text-small text-gray-500'>Get In Touch </p></Link>
       
    </motion.div>
    
    </header>
  )
}