import ArtCard from "@/components/Art/ArtCard";
import React from "react";

export default function ArtCategory(){

    const arts = [
        {name: "Art 1", image: "/graphic_reference/graphic_refence_1.avif", description: "This is my art 1"},
        {name: "Art 2", image: "/graphic_reference/graphic_refence_2.jpeg", description: "This is my art 2"},
        {name: "Art 3", image: "/graphic_reference/graphic_refence_3.jpeg", description: "This is my art 3"},
        {name: "Art 4", image: "/graphic_reference/graphic_refence_1.avif", description: "This is my art 4"},
        {name: "Art 5", image: "/graphic_reference/graphic_refence_2.jpeg", description: "This is my art 5"},
        {name: "Art 6", image: "/graphic_reference/graphic_refence_3.jpeg", description: "This is my art 6"},
    ];
    return(
        <main className="w-full flex flex-col items-center justify-start relative bg-white min-h-screen relative">
            <div className="w-72 absolute top-[150px] left-0 transform -rotate-30 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.93 314.24" fill="#EF761D"><g data-name="Layer 2"><path d="M0 314.24c154.44-18.43 294.26-99.39 255.34-216.12-12.33-37-51.1-60-68.56-94.91L185.17 0H0z" data-name="Layer 1"></path></g></svg>
            </div>
            <div className="w-96 transform -rotate-12 absolute right-0 top-0 translate-x-2/3 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.9 494.4" fill="#6A9ABE"><path d="M140.1 19.4c129.5-71.5 315.5 71.5 252 162-43 70-15 122-33 185-19.9 69.7-90.5 129.3-193 128-152-2-202.3-179.5-140-235 100-89-20-166 114-240z"></path></svg>
            </div>
                <h1 className="text-70 text-black font-poynter_bold font-normal italic">Art Gallery</h1>
                <p className="text-black text-xl font-normal font-sentinel_book max-w-[500px] text-center mt-5">"Delighted to share my diverse and expressive artworks, each crafted with passion and creative vision."</p>
                <button className="bg-pink text-black border-none font-cervo_medium_neue font-normal text-xl p-4 tracking-widest flex flex-row items-center justify-center mt-10 mb-20">
                    <span>SEE MORE</span>
                    <div className="w-20 ml-5">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 39"><path d="M64.24 16h-2.52l2.47 2.47H17.81v1h46.38l-2.47 2.46h2.52l2.97-2.96L64.24 16z"></path></svg>
                    </div>
                </button>
                <section className="w-full flex flex-row items-start justify-center w-full flex-wrap">
                    {
                        arts.map((each,index) => <ArtCard key={index} each={each}/>)
                    }
                </section>
        </main>
    )
}