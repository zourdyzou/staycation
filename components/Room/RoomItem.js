/* eslint-disable react/button-has-type */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/solid";

export const RoomItem = ({
  pricePerNight,
  images,
  address,
  rating,
  id,
  name,
}) => {
  return (
    <Link href={`/rooms/${id}`} passHref>
      <div className="relative hover:transform hover:-translate-y-3 rounded-xl group mt-5 md:mt-0 cursor-pointer transition duration-150 ease-in overflow-hidden">
        <div className="relative group-hover:rounded-xl h-[220px] w-72 brightness-75 overflow-hidden rounded-br-xl">
          <Image
            className="rounded-xl rounded-br-xl transition-all duration-500 ease-in-out transform bg-center bg-cover overflow-hidden"
            src={images}
            alt={name}
            layout="fill"
          />
        </div>

        <span className="absolute top-0 right-0 px-3 py-2 bg-pink-600 text-white text-sm rounded-tr-xl rounded-bl-xl font-semibold transition ease-in-out duration-500">
          ${pricePerNight} <span className="font-light">/ night</span>
        </span>

        <div className="w-full p-2 group-hover:underline flex justify-between items-center">
          <div>
            <h1 className="">{name}</h1>
            <p className="text-sm text-gray-400">{address}</p>
          </div>

          <div className="flex flex-col p-1">
            <p className="flex items-center justify-end ">
              <StarIcon className="h-6 w-6 text-yellow-500 fill-current" />
              {rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
