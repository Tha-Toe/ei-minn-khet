import HomeCard from "@/components/HomeCard/HomeCard";
import React from "react";
import apple2 from "@/components/apple-2.svg";
import Image from "next/image";
import undraw_bg_2 from "@/components/undraw_bg_2.svg";
export default function Home (){
    return(
        <main className="w-full flex flex-col lg:items-start items-center justify-start relative min-h-[70vh]">
            <section className="lg:w-[600px] md:w-2/3 w-[250px] md:mt-24 mt-12 lg:ml-48 ml-0 z-10">
                <h1 className="text-black font-poynter_bold font-normal lg:text-70 md:text-5xl text-4xl lg:leading-[80px] leading-[60px]">Designing Perspectives, Crafting Experiences.</h1>
            </section>
            <section className=" mt-24 ml-60 z-10 lg:flex hidden">
                <HomeCard />
            </section>
            {/* <div className="w-[700px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.8 350.2"><path d="M134.2 310c8.8 11 20.6 19.4 32.2 27.4 27.3 18.8 64.4 14.4 95.8 3.8 22.3-7.6 44.4-18.4 59.5-36.4 15.8-18.8 22.4-43.3 28.6-66.9 1.9-7.4 3.9-14.9 3.5-22.5-.4-8.8-1.3-25.2-15.5-37.3-35.4-30.3-3.2-88.5-42.7-115.9-20.1-13.9-39.8-18.4-64.4-18.7-42.6-.5-46.8-17.2-61.9-29.5C156 3.2 133.4.6 114.3 0 95.6-.5 37.6 26.7 31.6 79.4c-6.1 53-46 64.8-26 115.4 28.2 64.3 73.7 47.1 128.6 115.2z"></path></svg>
            </div> */}
            <section className="lg:w-1/2 w-full lg:absolute static right-0 top-0 lg:h-2/3 h-auto flex flex-col lg:items-end items-center bg-pink justify-center lg:rounded-tl-[30%] rounded-none lg:py-0 py-10 lg:mt-0 mt-10">
                <Image src={undraw_bg_2} alt="bg" width={1000} height={1000} className="lg:w-2/3 w-[500px]"/>
            </section>
            <section className="lg:w-[600px] md:w-[400px] mobile:w-[300px] w-[200px] absolute lg:bottom-0 bottom-auto lg:top-auto top-0 lg:translate-y-[30%] translate-y-[0%] left-0 transform -translate-x-[60%] z-0">
                <Image src={apple2} alt="apple" width={700} height={700} className="w-full"/>
            </section>
            <section className="z-10 lg:hidden flex">
                <HomeCard />
            </section>
        </main>
    )
}