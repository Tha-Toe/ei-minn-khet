'use client';
import Image from "next/image";
import React, { useState } from "react";

export default function ArtCard({each}:any){
    const [hover,setHover] = useState(false);
    return(
        <div className="w-[25%] flex flex-col items-start justify-start ml-10 mb-20 relative overflow-hidden cursor-pointer" 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className={`${"w-full flex flex-col items-center justify-center h-[300px] bg-black bg-opacity-80 absolute top-0  left-0 transform duration-300"} ${hover? "translate-y-0" : "-translate-y-full"}` }>
                <button className="bg-pink text-black py-2 px-4 rounded-sm cursor-pointer font-bold font-sentinel_book">See My Art</button>
            </div>
            <div className="w-full h-[300px] bg-pink">
                <Image src={each?.image} alt="grapic_card" width={500} height={500} className="w-full h-full"/>
            </div>
            <h1 className="text-black font-poynter_bold text-xl font-bold mt-3 italic">{each?.name}</h1>
            <p className="text-black font-sentinel_book text-base font-normal mt-3">{each?.description}</p>
        </div>
    )
}