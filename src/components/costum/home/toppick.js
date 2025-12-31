import Image from "next/image";
import Link from "next/link";
import React from "react";

function Toppick() {
  return (
    <div className="mt-20 relative">
      <div>
        <h1 className="font-bold text-4xl mx-160">Top Picks For You</h1>
        <h3 className="text-[20px] mx-110 my-7">
          We&apos;ve handpicked the styles we know you&apos;ll love. Explore
          what&apos;s trending now.
        </h3>
      </div>
       
        <Link href={"#"}>
       <div className="relative w-full h-130" >
        <Image
            src={"/images/toppicks/left.webp"}
            alt="pic"
          fill
             className="object cover"
        />
        </div>
        </Link>
       
     
    </div>
  );
}

export default Toppick;
