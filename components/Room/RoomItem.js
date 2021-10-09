/* eslint-disable react/button-has-type */
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const RoomItem = ({ images, name, pricePerNight, address }) => {
  return (
    <Link href="/" passHref>
      <div className="relative hover:transform hover:-translate-y-3 rounded-xl group mt-5 md:mt-0 cursor-pointer transition duration-150 ease-in">
        <div className="relative group-hover:rounded-xl h-[220px] w-72 brightness-75">
          <Image
            className="rounded-xl transition-all duration-500 ease-in-out transform bg-center bg-cover object-cover"
            src={images}
            alt={name}
            layout="fill"
          />
        </div>

        <span className="absolute top-0 right-0 px-3 py-2 bg-pink-600 text-white text-sm rounded-tr-xl rounded-bl-xl font-semibold transition ease-in-out duration-500">
          ${pricePerNight} <span className="font-light">/ night</span>
        </span>

        <div className="p-2 group-hover:underline">
          <h1>{name}</h1>
          <p className="text-sm text-gray-400">{address}</p>
        </div>
      </div>
    </Link>
  );
};
