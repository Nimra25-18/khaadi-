import Link from 'next/link'
import React from 'react'
import { Heart, Search, ShoppingBag, User } from 'lucide-react';
import Navbartext from './navbartext';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"


function Navbar() {
  return (
    <div className='bg-white text-black flex items-center justify-between border sticky top-0 z-50'>
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
             
             <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline"><User/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className={"text-3xl font-light px-[110px]"}>WELCOME</DialogTitle>
            <DialogDescription className={"px-[110px]"}>
              Sign in to your account
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Email</Label>
               <Input type="email" placeholder="Email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Password</Label>
               <Input type="password" />
            </div>
            <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className={"font-light"}>Remember me</Label> 
                    
      </div>
       <div className='px-19 flex gap-2'>Don&apos;t have account? <h3 className='underline'>Sign Up</h3></div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
            </DialogClose>
            <Button type="submit" className={"w-90 my-3 rounded-2xl h-10 font-bold"}>Login</Button>

          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
              
               
              <ShoppingBag className="hover:opacity-60 cursor-pointer"/>
         </div>
  
    </div>
  )
}

export default Navbar





