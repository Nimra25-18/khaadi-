"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const cattwopicss = [
  { ctpic: 
    "/images/cattwo/onef.webp",
    hooverpic:"/images/cattwo/twofb.jpg",
    ctid:"one",
  },
  { ctpic: 
    "/images/cattwo/twof.webp",
    ctid:"two",
    hooverpic:"/images/cattwo/twofb.jpg",
  },
  { ctpic: 
    "/images/cattwo/threef.webp",
    hooverpic:"/images/cattwo/threefb.webp",
    ctid:"three",
   },
  { ctpic: 
    "/images/cattwo/fourf.webp",
    hooverpic:"/images/cattwo/twofb.jpg",
    ctid:"four",
   },
   { ctpic: 
    "/images/cattwo/fivef.webp",
    hooverpic:"/images/cattwo/fivefb.webp",
    ctid:"five",
   },
   { ctpic: 
    "/images/cattwo/sixf.webp",
    hooverpic:"/images/cattwo/twofb.jpg",
    ctid:"six",
   },
   { ctpic: 
    "/images/cattwo/sevenf.jpg",
    hooverpic:"/images/cattwo/sevenfb.jpg",
    ctid:"seven",
   },
   { ctpic: 
    "/images/cattwo/eightf.jpg",
    hooverpic:"/images/cattwo/eightfb.jpg",
    ctid:"eight",
   },
  
];

function Categorytwo() {
  return (
    <div className='relative my-10 '>
         <Swiper navigation={true} modules={[Autoplay , Pagination , Navigation]} autoplay={{delay:3500, disableOnInteraction:false,}} pagination={{clickable:true}} loop={true} spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }} className="mySwiper w-full h-full overflow-visible  ">
           {cattwopicss.map((ct) => (
     <SwiperSlide  key={ct.ctid}>
     <Link href={"#"}> 
    <div className='group relative w-full h-[360px] '>
    
       <Image
          src={ct.ctpic}
          alt="pic"
          fill
          className='object-cover transition-opacity duration-500 group-hover:opacity-0 '
        />
        <Image
          src={ct.hooverpic}
          alt="pic"
          fill
          className='object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100'
        />
        
        </div>
   </Link>
        </SwiperSlide> 
         ))}
          </Swiper> 
    </div>
  )
}

export default Categorytwo