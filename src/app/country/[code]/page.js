"use client";
import Announcement from '@/components/costum/top/announcement'
import Banner from '@/components/costum/home/banner'
import Navbar from '@/components/costum/navbar'
import React from 'react'
import Toppick from '@/components/costum/home/toppick';
import Categorycard from '@/components/costum/home/categorycard';
import Bestseller from '@/components/costum/home/bestseller';
import Categorytwo from '@/components/costum/home/categorytwo';
import Orderdet from '@/components/costum/home/footer/orderdet';

function Page() {
  return (
    <div>
       <Announcement/>
      <Navbar/>
      <Banner/>
      <Toppick/>
      <Categorycard/>
      <Bestseller/>
      <Categorytwo/>
      <Orderdet/>
    </div>
  )
}

export default Page