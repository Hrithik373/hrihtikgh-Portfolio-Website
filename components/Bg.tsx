
/* eslint-disable @next/next/no-img-element */
//2 issues faced skipping for now though 
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { pageinfo } from "../typings";
import BackgroundCircles from "./BackgroundCircle";
import { useRouter } from 'next/router';
import sf from "../pages/sf";
//import styles from './Button.module.css';
type Props = {
  pageinfo: pageinfo;
};
function Bg({ pageinfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My name's ${pageinfo?.name}`,
      "Welp I dunno what to write here",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });


  const buttonStyles = {
    background: 'transparent',
    color: '#00FFFF',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    marginRight: '20px',
    boxShadow: '0 0 10px rgba(0,255,255,0.6)',
    transition: 'all 0.3s ease',
    outline: 'none',
    cursor: 'pointer',
  };
  
  const hoverStyles = {
    background: '#00bcd4',
    backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
    color: '#FFFFFF',
    transform: 'scale(0.9)',
    boxShadow: '0 0 20px rgba(0,255,255,0.8)',
  };
  
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">

    
      
    
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageinfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20 relative">
        <h2 className="tracking-[15px] text-sm uppercase text-gray-500 pb-2">
          {pageinfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 ">
      <Link href="#about">
        <button className="buttonStyles hover-effect px-10 py-4 my-3 font-bold shadow-md rounded-full text-black hover:scale-90 transition duration-150 transform hover:shadow-xl">
          About
        </button>
      </Link>

      <Link href="#experience">
        <button className="buttonStyles hover-effect px-10 py-4 my-3 font-bold shadow-md rounded-full text-black hover:scale-90 transition duration-150 transform hover:shadow-xl">
          Experience
        </button>
      </Link>

      <Link href="#skills">
        <button className="buttonStyles hover-effect px-10 py-4 my-3 font-bold shadow-md rounded-full text-black hover:scale-90 transition duration-150 transform hover:shadow-xl">
          Skills
        </button>
      </Link>

      <Link href="#projects">
        <button className="buttonStyles hover-effect px-10 py-4 my-3 font-bold shadow-md rounded-full text-black hover:scale-90 transition duration-150 transform hover:shadow-xl">
          Projects
        </button>
      </Link>

  <style jsx>{`
    .buttonStyles {
    background: transparent;
    color: #00FFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    margin-right: 20px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
    outline: none;
    transition: all 0.3s ease;
  }
  
  .hover-effect {
    position: relative;
    overflow: hidden;
    background-color: transparent;
    color: #00FFFF;
    border: 2px solid #00FFFF;
    transition: all 0.3s ease;
  }
  
  .hover-effect:before {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 100%;
    background-color: #00FFFF;
    z-index: -1;
    transition: all 0.3s ease;
  }
  
  .hover-effect:hover {
    color: #FFFFFF;
  }
  
  .hover-effect:hover:before {
    top: 0;
  }
`}</style>
        </div>
      </div>
    </div>
  );
}
export default Bg;

