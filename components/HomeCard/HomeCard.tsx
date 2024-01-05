import React from "react";

export default function HomeCard(){
    return(
        <section className="lg:w-[650px] w-full bg-brown flex flex-col items-center justify-center mobile:px-12 px-6 mobile:py-16 py-10">
            <p className="font-poynter_bold lg:text-4xl mobile:text-3xl text-xl w-full text-start md:leading-[50px] leading-[30px]">
                <span className="text-white">See My Arts!</span>
                <span className="text-black ml-3">Discover Your Favourite Architecture.</span>
            </p>
            <div className="w-full h-[1px] bg-black mt-2 mb-2"/>
            <p className="font-sentinel_book lg:text-lg mobile:text-sm text-xs text-black font-normal">My toolbox includes a blend of artistic skills, technical know-how, and a passion for staying at the forefront of design trends. Let's collaborate and bring your ideas to life through impactful and meaningful design.</p>
            <div className="flex flex-row items-start justify-start w-full  mt-5">
                <button className="bg-white text-black border-none font-cervo_medium_neue font-normal lg:text-xl mobile:text-lg text-sm lg:p-4 mobile:p-3 p-2 tracking-widest flex flex-row items-center justify-center">
                    <span>CLICK HERE TO SEE MY ARTS!</span>
                    <div className="mobile;w-20 w-10">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 39"><path d="M64.24 16h-2.52l2.47 2.47H17.81v1h46.38l-2.47 2.46h2.52l2.97-2.96L64.24 16z"></path></svg>
                    </div>
                </button>
            </div>
        </section>  
    )
}