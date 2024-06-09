"use client";

import Image from 'next/image';
import CTA from '@/Components/CTA';
import '../app/globals.css';
import PricingCard from '../Components/CardPrice'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';;
import useScreenSize from './Hooks/screenDetect';

export default function Home() {
  const screenSize = useScreenSize();
  const screenWidth = screenSize.width; 
  const isMobile = screenWidth < 640;
  return (
    <div className='container px-1  m-9'>
      <div className="container bg-blue-500 rounded flex flex-row items-center justify-center mb-10 p-3">
        <div className="flex flex-col w-full pr-8 lg:w-1/4 w-2/3">
          <h1 className="text-4xl">Your partner for every marketing activity!</h1>
          <p className="text-xs pt-4">We support your project day to day!</p>
        </div>
        <div className="w-2/6 py-3">
          <Image
            src="https://placehold.jp/1000x1000.png"
            alt="Your marketing partner in action" // Descriptive alt text
            className='rounded'
            width={600}
            height={400}
            layout="responsive" // Use Next.js's responsive lay out for optimal image display
            priority // Optionally prioritize loading the image (adjust based on layout)
          />
        </div>
      </div>
      <div className="container bg-blue-500 rounded flex flex-row items-center justify-center mb-10 p-4 ">
        <div className='container flex flex-col'> 
            <h1>Some random text</h1>
          <CTA />
        </div>
      </div> 
        <div className='container flex items-center gap-4 items-center justify-center py-4' > 
          <Swiper
            spaceBetween={50}
            slidesPerView={isMobile ? 1 : 3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide> <PricingCard packageName="Normal" packagePrice="5" /> </SwiperSlide>
            <SwiperSlide> <PricingCard packageName="Silver" packagePrice="10"/> </SwiperSlide>
            <SwiperSlide> <PricingCard packageName="Gold" packagePrice="15"/> </SwiperSlide>
          </Swiper>
        </div>
    </div>

  );
}
