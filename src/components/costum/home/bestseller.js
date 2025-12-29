import Image from "next/image";
import Link from "next/link";
import React from "react";

function Bestseller() {
  return (
    <div className="mt-20 relative">
      
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-bold text-4xl">Bestsellers</h1>
        <h3 className="text-[20px] my-7">
          Discover this season&apos;s favorites and refresh your style with looks you&apos;ll wear on repeat.
        </h3>
      </div>

      <Link href="#">
        <div className="relative w-full h-[520px]">
          <Image
            src="/images/toppicks/one.webp"
            alt="pic"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Link>

    </div>
  );
}

export default Bestseller;
