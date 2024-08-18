"use client";

import styles from "@lib/textGlow.module.css";
import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiClock } from "react-icons/fi";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="w-full" >
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          syncTouch: true,
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};


const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div className="sticky top-0 h-screen w-full"> 
      {/* <Image
        src={Banner}
        alt="venture banner"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        className="sm:h-full h-2/4 rounded-md"
        /> */}
        <div className="flex items-center justify-center min-h-screen">
          <h1 className={`${styles['text-glow']} text-9xl font-bold text-white text-center`}>
            VENTURE
          </h1>
        </div>
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://cdn.discordapp.com/attachments/523584714762747904/1272556135655805012/onlineRespect.webp?ex=66bb67c1&is=66ba1641&hm=6e9736dc7254251aa5e0c481f0f64a6267ec1a5dd3952b6aaba8ced78dcb779b&"
        alt="Stop Cyberbullying"
        start={-200}
        end={200}
        className="w-1/3 rounded-md border-2 border-themeBlue"
      />
      <ParallaxImg
        src="https://cdn.discordapp.com/attachments/523584714762747904/1272558258867142666/bannerNews.webp?ex=66bb69bb&is=66ba183b&hm=57ea90c0754541e88eb6a95c938ec11cc867932552a8381eda052cb310a9a376&"
        alt="Venture News"
        start={100}
        end={-250}
        className="mx-auto w-2/3 rounded-md border-2 border-themeBlue"
      />
      <ParallaxImg
        src="https://cdn.discordapp.com/attachments/523584714762747904/1272557161289093152/stopbly.webp?ex=66bb68b6&is=66ba1736&hm=191168f17347e9b76a2013176bd2e63f177e79710ec1e19592c26e1eb1e9a935&"
        alt="Stop Cyberbullying"
        start={-200}
        end={200}
        className="ml-auto w-1/3 rounded-md border-2 border-themeBlue"
      />
      <ParallaxImg
        src="https://cdn.discordapp.com/attachments/523584714762747904/1272561900357681162/tech-detox.webp?ex=66bb6d20&is=66ba1ba0&hm=e669a9b71f60a62c268e813efc81343042f93db4813b1d565c899c57b184fe6b&"
        alt="Technology Detox"
        start={-50}
        end={-300}
        className="ml-24 w-5/12 rounded-md border-2 border-themeBlue"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="news-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Campaigns Schedule
      </motion.h1>
      <ScheduleItem title="CyberSecurity Online" date="August 12th" location="Instagram" />
      <ScheduleItem title="Understanding Phishing" date="August 13th" location="Tiktok & Instagram & Ytb Shorts" />
      <ScheduleItem title="Identifying Cyberbullying" date="August 14th" location="Instagram" />
      <ScheduleItem title="Venture group on Youtube!" date="August 15th" location="Youtube" />
      <ScheduleItem title="Taking Action" date="August 16th" location="Instagram" />
      <ScheduleItem title="The Impact of a Single Click" date="August 17th" location="Tiktok & Instagram & Ytb Shorts" />
      <ScheduleItem title="Cyberbully from a teenager!" date="August 18th" location="Youtube" />
      <ScheduleItem title="Technology Detox" date="August 19th" location="Instagram" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiClock />
      </div>
    </motion.div>
  );
};

export default SmoothScrollHero;