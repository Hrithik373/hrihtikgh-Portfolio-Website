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
  const router = useRouter();


  const DownloadResumeButton = () => {
    const handleDownload = () => {
      const url = 'https://example.com/your-resume.pdf'; // replace with the actual URL of your resume file
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'hrithikgh-resume.pdf'); // replace with the actual name of your resume file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
   <div className="flex flex-col absolute"
     style={{
      top: '88%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
    <div className="flex-shrink-0">
    <button
            className="px-10 py-4 my-3 font-bold shadow-md rounded-full text-black hover:scale-90 transition duration-150 transform hover:shadow-xl"
            style={{ backgroundColor: '#00bcd4', backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)' }}
           >
              <a className="text-white">Don't click</a>
           
          </button>
    </div>
  </div>

    
      
    
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

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bg;