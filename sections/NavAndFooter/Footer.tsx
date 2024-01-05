import Image from "next/image";
import React, { ReactNode } from "react";

interface FooterInterface{
}

export default function Footer({}:FooterInterface){
    const footerList = [
        {src: "/icons/icons8-facebook.svg", link: ""},
        {src: "/icons/icons8-twitter.svg", link: ""},
        {src: "/icons/icons8-linkedin.svg", link: ""},
    ]
    return(
        <main className="w-full bg-brown pt-10 z-10 flex flex-col items-center justify-center" id="contact">
            <h1 className="lg:text-xl md:text-lg mobile:text-base text-sm text-white font-bold font-brandon_bold uppercase mb-5">CONTACT ME</h1>
            <div className="flex flex-row items-end justify-center">
                <a href="mailto:eiminnkhet@gmail.com" className=" lg:text-5xl md:text-3xl mobile:text-xl text-lg text-black font-bold font-brandon_bold hover:underline">eiminnkhet@gmail.com</a>
                <div className="text-black mobile:ml-5 ml-2  mobile:mr-5 mr-2">|</div>
                <a href="tel:+959791359042" className=" lg:text-3xl md:text-xl mobile:text-base text-sm text-black font-bold font-brandon_bold hover:underline">09791359042</a>
            </div>
            <div className="w-full flex flex-row items-center justify-center mt-10">
                <div className="lg:mr-20 mr-10 lg:w-60 md:w-40 mobile:w-32 w-24 h-[1px] bg-black"/>
                {
                    footerList.map((each,index) =>
                        <a className="md:mx-10 mobile:mx-5 mx-3" href={each.link}  key={index}>
                            <Image src={each.src} alt="icon" width={100} height={100} className="md:w-10 w-8"/>
                        </a>
                    )
                }
                 <div className="lg:ml-20 ml-10 lg:w-60 md:w-40 mobile:w-32 w-24 h-[1px] bg-black"/>
            </div>
            <div className="bg-dark_brown py-3 lg:text-base mobile:text-sm text-xs flex flex-row items-center justify-center w-full mt-10 text-black font-bold">Copyright © {new Date().getFullYear()} Ei Minn Khet, Graphic Designer</div>
        </main>
    )
}