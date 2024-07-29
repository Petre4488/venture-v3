"use client";

import React, { createContext } from 'react';
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiInstagram } from "react-icons/si";
import Image from "next/image";
import myself from "../../public/myself.png";

const RevealBento = () => {
  return (
    <div className="container bg-bgBlue rounded h-1/5 flex flex-col items-center justify-center mb-10 p-4 border-2 border-themeBlue">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-bgBlue p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <Image
      src={myself}
      alt="Peter"
      style={{ width: "3.5rem" , height: "3.5rem"}}
      className="mb-4 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hey! Im Peter!{" "}
      <span className="text-zinc-400">
        Founder of Venture!
      </span>
    </h1>
    <a
      href="mailto:petrecirceag@venturegroup.cc?subject=Business Inquiry"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="https://github.com/Petre4488"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="https://www.tiktok.com/@venturegroup.ag#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-pink-600 md:col-span-3"
    >
      <a
        href="https://www.instagram.com/venturegroup.ag/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiInstagram />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
    Always up for a challenge and a good learning opportunity!{" "}
      <span className="text-zinc-400">
      At Venture Group, we are passionate about crafting exceptional websites and graphics. Our mission is to empower businesses
       with visually striking and high-performing digital experiences. Utilizing cutting-edge technologies, we ensure your online
        presence is not only beautiful but also fast, secure, and user-friendly. We believe in continuous learning, innovation,
         and delivering top-notch solutions tailored to your needs. Join us to make a lasting impact online and drive your 
         business growth. Lets think unlimited and achieve extraordinary results together.
      </span>
    </p>
  </Block>
);

const Logo = () => {
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made by{" "}
        <a href="https://www.youtube.com/@tomisloading" className="text-red-300 hover:underline">
          @tomisloading
        </a>
      </p>
    </footer>
  );
};

export default RevealBento;