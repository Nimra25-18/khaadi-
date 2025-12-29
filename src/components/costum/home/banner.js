"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import Link from 'next/link';

const banners = [
  { bannerpic: 
    "/images/bannerpics/first.webp",
    bid:"1",
  },
  { bannerpic: 
    "/images/bannerpics/second.webp",
    bid:"2",
  },
  { bannerpic: 
    "/images/bannerpics/third.webp",
    bid:"3",
   },
  { bannerpic: 
    "/images/bannerpics/four.webp",
    bid:"4",
   },
];

function Banner() {
  return (
    <div className='relative w-full h-screen'>
           <Swiper  modules={[Autoplay , Pagination]} autoplay={{delay:3500, disableOnInteraction:false,}} pagination={{clickable:true}} loop={true} className="mySwiper w-full h-full  ">
           {banners.map((b) => (
     <SwiperSlide  key={b.bid}>
     <Link href={"#"}> 
    <div className='relative w-full h-screen'>
    
       <Image
          src={b.bannerpic}
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

export default Banner;