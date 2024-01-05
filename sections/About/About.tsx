import React from "react";
import Image from "next/image";
export default function About (){

    const iconList = [
        {name: "Adobe Illustrator", src: "/icons/icons8-adobe-illustrator.svg"},
        {name: "Adobe Photoshop", src: "/icons/icons8-adobe-photoshop.svg"},
        {name: "Microsoft Excel", src: "/icons/icons8-microsoft-excel.svg"},
        {name: "Microsoft Powerpoint", src: "/icons/icons8-microsoft-powerpoint.svg"},
        {name: "Microsoft Word", src: "/icons/icons8-microsoft-word.svg"},
    ]
    return(
        <main className="w-full flex flex-col items-start justify-start relative min-h-screen py-24" id="about">
            <section className="w-full flex lg:flex-row flex-col lg:items-start items-center justify-center lg:px-0 px-10">
                <div className="sm:w-[400px] w-[250px] sm:h-[600px] h-[400px] bg-orange mr-10 relative">
                    <div className="absolute bottom-0 transform translate-y-1/3 translate-x-1/3 right-0 sm:w-[200px] w-[150px] sm:h-[200px] h-[150px] sm:border-[20px] border-[10px] border-light_rose bg-pink "></div>
                </div>
                <div className="flex flex-col items-center justify-start md:w-[600px] mobile:w-[400px] w-[270px] lg:mt-0 mt-20">
                    <h3 className="text-black font-bon_viviant font-normal md:text-5xl text-3xl mt-10">hey there!</h3>
                    <h3 className="text-black font-poynter_bold font-normal md:text-5xl mobile:text-3xl text-xl">I'm <span className="tracking-widest">Ei Minn Khet,</span></h3>
                    <div className="w-52 h-[1px] bg-black mobile:mt-10 mt-5"/>
                    <p className="text-black font-sentinel_book font-normal md:text-xl mobile:text-lg text-base text-justify mt-10">A passionate graphic designer driven by the power of visual storytelling. With a keen eye for detail and a love for creativity, I specialize in transforming concepts into compelling visual narratives. My journey began with a fascination for colors, shapes, and their ability to evoke emotions</p>
                    <p className="text-black font-sentinel_book font-small md:text-xl mobile:text-lg text-base text-justify mt-3 lg:max-w-[500px] max-w-full">I believe that design goes beyond aesthetics—it's about forging connections and leaving lasting impressions. Whether it's crafting brand identities, designing captivating illustrations, or conceptualizing user-centric interfaces, I strive to create designs that resonate and inspire.</p>
                    <p className="text-black font-sentinel_book font-small md:text-xl mobile:text-lg text-base text-justify mt-3 lg:max-w-[300px] max-w-full">Drawing inspiration from the world around me, I'm constantly seeking fresh perspectives and innovative approaches to problem-solving. Collaborating with clients and understanding their visions fuels my drive to deliver not just designs, but experiences.</p>
                </div>
            </section>
            <section className="w-full flex md:flex-row flex-row items-center justify-center mt-20 lg:px-0 px-10 flex-wrap">
                <span className="text-cervo_medium_neue text-black lg:text-start text-center lg:w-auto w-full lg:text-lg text-base font-semibold tracking-widest lg:mr-10 mr-0 lg:mb-0 mb-10">I'M USING AND WORKING WITH...</span>
                {
                    iconList.map((each,index) =>
                        <div className="flex flex-col items-center justify-center mr-5 mobile:mb-0 mb-4" key={index}>
                            <Image alt="software_icon" src={each.src} width={100} height={100} className="mobile:w-16 w-8"/>
                            <div className="text-black mobile:text-xs text-mobile_md text-center">{each.name}</div>
                        </div>
                    )
                }
            </section>
        </main>
    )
}