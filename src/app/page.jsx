"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import ButtonEncrypt from '../Components/EncryptButton.jsx'
import Head from 'next/head';

export default function LandingPage(){
  return(
    <div className="w-full">
      <Head>
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Venture Group Agency",
            "url": "https://venturegroup.cc",
            "logo": "https://i.ibb.co/TrSXdcC/logo-Dark-Transp.png",
            "contactPoint": {
              "@type": "Petre Circeag",
              "telephone": "+40 753989970",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "http://www.instagram.com/venturegroup.ag",
            ],
          }
        `}
      </script>
    </Head>
    <TextParallaxContent
      imgUrl='https://images.unsplash.com/photo-1608752027817-eaa02f60bf6d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      subheading="Limitless"
      heading="Think Unlimited, We Build It."
    >
      <ExampleContent heading='Unleash Your Vision. Build Without Limits.' paragraph= "Feeling stifled by cookie-cutter website templates? Venture breaks free from the mold. We don't just develop websites; we collaborate closely with you to code a digital presence that truly embodies your unique brand. Our approach pushes beyond the ordinary, exploring new frontiers of creativity and technical expertise to craft fast websites that deliver exceptional user experiences. There are no bounds to what we can achieve together. Let's embark on a journey to create a website that not only fuels your growth but also captivates and inspires your audience's imagination." />
    </TextParallaxContent>
    <TextParallaxContent
      imgUrl="https://images.unsplash.com/photo-1564296787288-965670228331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      subheading="Agile"
      heading="Launch faster, achieve more."
    >
      <ExampleContent heading="Launch Faster. Achieve More." paragraph="In today's rapidly evolving digital landscape, speed is paramount. At Venture agency, our agile development process guarantees your website moves swiftly from concept to launch, ensuring efficiency every step of the way. We thrive on embracing change and tailoring solutions to your evolving needs, ensuring your website is continually optimized for success. Don't waste time waiting around – partner with us at Venture agency to swiftly bring your website to life and start achieving your goals sooner than you thought possible." />
    </TextParallaxContent>  
    <TextParallaxContent
      imgUrl="https://images.unsplash.com/photo-1573804613658-6e8bc17661c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  "
      subheading="Creative"
      heading="Code that Captivates."
    >
      <ExampleContent heading="Websites that Captivate.  Code that Inspires." paragraph="our website is an extension of your brand, and it deserves to be as unique and inspiring as your vision. At Venture, we don't just build websites, we create digital experiences that capture attention and spark emotions. We combine creative vision with technical mastery to craft websites that stand out from the crowd and leave a lasting impression. Let's partner with Venture to turn your website into a masterpiece that reflects your brand's true potential. " />
    </TextParallaxContent>
  </div>
  )
}

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <h2 className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </h2>
      <h1 className="text-center text-4xl font-bold md:text-7xl">{heading}</h1>
    </motion.div>
  );
};

const ExampleContent = (props) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      {props.heading}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        {props.paragraph}
      </p>
      <ButtonEncrypt />
    </div>
  </div>
);
