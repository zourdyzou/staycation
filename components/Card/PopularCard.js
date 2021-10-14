import React from "react";
import Image from "next/image";
import Link from "next/link";

import { StarIcon } from "@heroicons/react/solid";

export const PopularCard = ({
  images,
  name,
  pricePerNight,
  address,
  rating,
  id,
}) => {
  return (
    <Link href={`/rooms/${id}`} passHref>
      <div className="relative rounded-xl group mt-5 md:mt-0 cursor-pointer transition duration-150 ease-in overflow-hidden">
        <div className="relative group-hover:rounded-xl h-[220px] w-72 brightness-75 overflow-hidden">
          <Image
            className="rounded-xl bg-cover bg-center transform group-hover:scale-125 transition ease-in-out duration-[400ms] overflow-hidden"
            src={images}
            alt={name}
            layout="fill"
          />
        </div>

        <span className="absolute top-0 right-0 px-3 py-2 bg-pink-600 text-white text-sm rounded-tr-xl rounded-bl-xl font-semibold transition ease-in-out duration-500">
          Popular Choice
          {/* ${pricePerNight} <span className="font-light">/ night</span> */}
        </span>

        <div className="absolute top-36 w-full p-2 group-hover:underline flex justify-between items-center text-white">
          <div>
            <h1 className="text-white">{name}</h1>
            <p className="text-sm text-gray-300">{address}</p>
          </div>

          <div className="flex flex-col p-1">
            <p className="text-white">
              ${pricePerNight} <span className="font-light">/ night</span>
            </p>
            <p className="flex items-center justify-end text-white">
              <StarIcon className="h-6 w-6 text-yellow-500 fill-current" />
              {rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
