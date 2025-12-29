import { BadgeIcon, Facebook, InstagramIcon, LocateIcon, NotebookIcon, Text, TruckIcon, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Orderdet() {
  return (
    <div>
    <div className='flex justify-around items-center bg-[#fdedef] mt-4 py-5'>
         <div className='hover:underline'><Link href={"#"}><h3 className='font-bold flex gap-2'> <TruckIcon className='text-[#aa2037]'/> SHIPPING CHARGES  <br/> </h3><h2 className='font-light'> Starting from Rs. 120 </h2></Link></div>
         <div className='hover:underline'><Link href={"#"}><h3 className='font-bold flex gap-2'> <BadgeIcon className='text-[#aa2037]'/> TRACK YOUR ORDER <br/> </h3><h2 className='font-light'>  Check status of your order</h2></Link></div>
         <div className='hover:underline'><Link href={"#"}><h3 className='font-bold flex gap-2'><LocateIcon className='text-[#aa2037]'/> FIND STORES <br/> </h3> <h2 className='font-light '>  stores coutry wide across Pakistan, UK, USA, UAE</h2></Link></div>
    </div>
    <div className='flex justify-around items-center border'>
         <div className='font-normal text-3xl py-6'>NEED HELP?</div>
        <Link href={"#"}> <div className='font-normal text-1xl flex hover:underline'> <NotebookIcon/>FAQS</div></Link>
    </div>
    <div className='flex justify-around items-center font-medium text-1xl py-7 boder'>
        <div>HELP
        <div className=' font-normal text-1xl py-5'>
    <div className='hover:underline'>
            <Link href={"#"}>Frequently Asked Questions</Link></div>
          <div className='hover:underline'>  <Link href={"#"}>Terms And Conditions</Link></div>
           <div className='hover:underline'>  <Link href={"#"}>Privacy Policy</Link></div>
          <div className='hover:underline'>   <Link href={"#"}>Disclaimer</Link></div>
            </div>
        </div> 
         <div>MORE FROM KHAADI
         <div className=' font-normal text-1xl py-5'>
          <div className='hover:underline'>  <Link href={"#"}>About Us</Link></div>
           <div className='hover:underline'>  <Link href={"#"}>Blogs</Link></div>
          <div className='hover:underline'>   <Link href={"#"}>Cloth Care</Link></div>
            </div>
         </div>
         <div>OUR SOCIALS
         <div className=' font-normal text-1xl py-5'>
             <div className='flex gap-4'><InstagramIcon /> <Youtube/> <Facebook/> </div>
             <div className='py-4'> Get The Latest News</div>
             <div><input type='text' placeholder='Email Adress' className='border'/> 
                  <button className='text-white bg-[#242323] rounded-2xl py-1 px-2 mx-2'>Confirm</button>
              </div>
            </div>
         </div>
    </div>
    
    
    </div>
  )
}

export default Orderdet