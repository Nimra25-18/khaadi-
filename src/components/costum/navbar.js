import Link from 'next/link'
import React from 'react'
import { Heart, Search, ShoppingBag, User } from 'lucide-react';
import Navbartext from './navbartext';


function Navbar() {
  return (
    <div className='bg-white text-black flex items-center justify-between border sticky top-0 z-0'>
         <div>
               <img
          src="https://crystalpng.com/wp-content/uploads/2025/08/KHAADI-Logo.png"
          className="w-18 ml-8"
        />
         </div>
         <div >
              <ul className='flex text-xs gap-7'>
                   <li className='text-orange-300'>
                   <Link href="#">
                          SALE
                          </Link>
                     </li>
                     <li className='font-bold'>
                   <Link href="#">
                          NOW HAPPENING
                          </Link>
                     </li>
                     <li >
                   <Link href="#">
                          NEW IN
                          </Link>
                     </li>
                 <li >
                   <Link href="#">
                          READY TO WEAR
                          </Link>
                     </li>
                     <li className='font-bold'>
                   <Link href="#">
                          #INSTAKHAADI
                          </Link>
                     </li>
                     <li >
                   <Link href="#">
                          FABRICS
                          </Link>
                     </li>
                     <li >
                   <Link href="#">
                         FRAGRANCES
                          </Link>
                     </li>
              </ul>
         </div>
       
         <div className='flex gap-4 mr-2 ho'>
              <Search className="hover:opacity-60 cursor-pointer"/>
              <Heart className="hover:opacity-60 cursor-pointer"/>
              <User className="hover:opacity-60 cursor-pointer"/>
              <ShoppingBag className="hover:opacity-60 cursor-pointer"/>
         </div>

    </div>
  )
}

export default Navbar