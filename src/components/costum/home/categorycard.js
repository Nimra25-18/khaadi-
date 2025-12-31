"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const catpicss = [
  { cpic: 
    "/images/catpics/1.webp",
    cid:"one",
  },
  { cpic: 
    "/images/catpics/2.jpg",
    cid:"two",
  },
  { cpic: 
    "/images/catpics/3.webp",
    cid:"three",
   },
  { cpic: 
    "/images/catpics/4.jpg",
    cid:"four",
   },
   { cpic: 
    "/images/catpics/5.jpg",
    cid:"five",
   },
   { cpic: 
    "/images/catpics/6.webp",
    cid:"six",
   },
   { cpic: 
    "/images/catpics/7.webp",
    cid:"seven",
   },
   { cpic: 
    "/images/catpics/8.webp",
    cid:"eight",
   },
   { cpic: 
    "/images/catpics/9.webp",
    cid:"nine",
   },
   { cpic: 
    "/images/catpics/10.webp",
    cid:"ten",
   },
];

function Categorycard() {
  return (
    <div className='relative my-10 '>
         <Swiper navigation={true} modules={[Autoplay , Pagination , Navigation]} autoplay={{delay:3500, disableOnInteraction:false,}} pagination={{clickable:true}} loop={true} spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }} className="mySwiper w-full h-full overflow-visible  ">
           {catpicss.map((c) => (
     <SwiperSlide  key={c.cid}>
     <Link href={"#"}> 
    <div className='relative w-full h-[360px] '>
    
       <Image
          src={c.cpic}
          alt="pic"
          fill
          className='object-cover '
        />
        
        </div>
   </Link>
        </SwiperSlide> 
         ))}
          </Swiper> 
    </div>
  )
}

export default Categorycard