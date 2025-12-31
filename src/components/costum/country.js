import React from "react";
import Image from "next/image";
import Link from "next/link";

const countries = [
  { name: "Pakistan", 
    flag: "/images/pakistan.png", 
     code:"pk"
  },
  { name: "United Kingdom", 
    flag: "/images/united kingdom.webp",
   code:"uk"
  },
  { name: "United States", 
    flag: "/images/united states.png",
    code:"us"
   },
  { name: "United Arab Emirates", 
    flag: "/images/uae.webp",
    code:"uae"
   },
  { name: "Global", flag: 
    "/images/other.jpg",
    code:"global" 
  },
];

function Country() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

     
      <img
        src="https://www.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwb7ff3008/images/splash/splash-img-desktop.jpg"
        alt="pic"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute top-10 right-5 md:top-[120px] md:right-[165px]">

       
        <Image
  src="/images/bannerpics/KHAADI-Logo.png"
  alt="khaadi logo"
  width={220}
  height={80}
  className="w-40 md:w-[220px]"
  priority
/>

      
        <div className="mt-4 bg-white/50  backdrop-blur-lg p-3 md:p-6 rounded-xl w-72 md:w-[340px] shadow-xl h-[320px]">
          <h2 className="font-semibold text-gray-700 mb-3 text-center text-lg">
            Select Your Country
          </h2>
          <div className="border border-b-gray-700 bg-white/30  "></div>

          <ul className="space-y-3">
            {countries.map((c) => (
              <li key={c.name}>
                <Link
                  href={`/country/${c.code}`}
                  className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer"
                >
                  <Image
                    src={c.flag}
                    width={26}
                    height={26}
                    alt="flag"
                    className="rounded"
                  />
                  <span className="text-black">{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Country;
