import React from "react";
import Image from "next/image";
import { utilsData } from "../../public/mockData";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center space-y-44 justify-center md:space-x-3 max-w-6xl mx-auto h-[700px] my-28 md:my-12 px-5 md:space-y-16 md:transform md:-translate-y-28">
      <div className="flex flex-col space-y-5 h-96 flex-1">
        <h1 className="text-4xl leading-snug md:text-[38px] mr-[60px] font-bold text-indigo-900 md:leading-snug pt-10">
          Forget Busy Work, Start Next Vacation
        </h1>
        <p className="text-gray-400 mr-[40px] md:mr-[100px]">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>

        <button className="flex p-4 w-72 text-white rounded-md items-center justify-center bg-indigo-600 hover:bg-indigo-800 shadow-sm transform active:scale-105 transition ease-in duration-100">
          Show Me Now
        </button>

        {/* FEATURED */}
        <div className="flex space-x-10 items-center justify-center md:justify-start py-10">
          {utilsData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col px-2 py-3 space-y-3 items-start justify-start"
              >
                <div className="relative h-9  w-9 md:h-10 md:w-10">
                  <Image src={item.image} layout="fill" alt="icon" />
                </div>

                <p className="text-indigo-900 text-sm flex items-center gap-1 md:text-base">
                  {item.count}{" "}
                  <span className="text-gray-400">{item.name}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative h-96 w-[80%] md:pl-[100px] flex-1 pt-28 pb-32 md:p-10">
        <Image
          src="/images/hero.jpg"
          layout="fill"
          objectFit="cover"
          alt="hero asset of staycation"
          className="rounded-xl rounded-tl-[40px] md:rounded-tl-[70px]"
        />
      </div>
    </div>
  );
};
