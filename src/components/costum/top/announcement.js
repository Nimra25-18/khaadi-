import Link from "next/link";

function Announcement() {
  return (
    <div className="w-full h-8 bg-[#aeaef3] text-black text-sm relative flex items-center px-4">
      
     
      <p className="absolute left-1/2 -translate-x-1/2 ">
        Explore what&apos;s new this season with our latest styles
        <Link href="#" className="underline px-1 font-bold">
          right here
        </Link>
      </p>

     
      <Link href="/track" className="ml-auto text-xs font-medium">
        TRACK
      </Link>
    </div>
  );
}

export default Announcement;
