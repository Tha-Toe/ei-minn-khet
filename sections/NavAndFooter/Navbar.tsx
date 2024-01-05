import React, { ReactNode } from "react";

interface NavBarInterface{
}

export default function NavBar({}:NavBarInterface){
    const navList = [
        {name: "HOME", link: "#home"},
        {name: "ABOUT", link: "#about"},
        {name: "CONTACT", link: "#contact"},
];
    return(
        <main className="w-full flex flex-row items-center justify-between  py-2 sm:px-10 mobile:px-5 px-3" id="home">
             <section className="flex flex-row items-center justify-start">
                <div className="w-12 flex flex-row items-center justify-center relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.78 85.15" className="">
                        <g data-name="Layer 2">
                            <path d="M51.3 84.79c32.53-4.54 41.24-49.65 29.5-69.59s-64.91-23-77.15 7.57C-11.48 60.59 23.54 88.66 51.3 84.79z" data-name="Layer 1" fill="#FEB5AA"></path>
                        </g>
                    </svg>                
                <div className="font-poynter_bold text-black sm:text-5xl text-4xl absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/3">
                    E</div>
                </div>
                <h1 className="font-brandon_bold text-black sm:text-base mobile:text-sm text-xs mobile:ml-5 ml-2 tracking-widest	">EI MINN KHET</h1>
             </section>
             <section className="flex flex-row items-center justify-end">
                {
                    navList.map((each,index) =>
                        <a key={index} href={each.link} className="sm:mr-10 mobile:mr-5 mr-0 mobile:ml-0 ml-3">
                            <span className="font-cervo_medium_neue text-black sm:text-base mobile:text-sm text-xs font-semibold tracking-widest">{each.name}</span>
                        </a>
                    )
                }
            </section>
        </main>
    )
}