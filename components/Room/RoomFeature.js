import React from "react";

import Image from "next/image";

export const RoomFeature = ({ details }) => {
  return (
    <div className="py-4">
      {/* TITLE */}
      <h3 className="text-indigo-600 text-lg py-4 mb-5 font-semibold px-2">
        Property Features:
      </h3>

      <main className="grid grid-cols-2 md:grid-cols-4 gap-5 px-2">
        <div className="flex flex-col space-y-2 justify-center">
          <div className="relative h-10 w-12 transform -translate-x-1">
            <Image
              alt={`${details.name} feature`}
              layout="fill"
              src="/images/feature/icon-livingroom.svg"
              className=""
            />
          </div>
          <p className="text-gray-400">
            <span className="text-blue-600 font-semibold">
              {details.livingRoom.slice(0, 1)}
            </span>{" "}
            main room
          </p>
        </div>

        <div className="flex flex-col items-start space-y-2 justify-start">
          <div className="relative h-10 w-12 transform -translate-x-1">
            <Image
              alt={`${details.name} feature`}
              layout="fill"
              src="/images/feature/icon-bedroom.svg"
            />
          </div>
          <p className="text-gray-400">
            <span className="text-blue-600 font-semibold">
              {details.numOfBeds.slice(0, 1)}
            </span>{" "}
            bedroom
          </p>
        </div>

        <div className="flex flex-col items-start space-y-2 justify-start">
          <div className="relative h-10 w-12 transform -translate-x-1">
            <Image
              alt={`${details.name} feature`}
              layout="fill"
              src="/images/feature/icon-airconditioner.svg"
            />
          </div>
          <p className="text-gray-400">
            <span className="text-blue-600 font-semibold">
              {details.airConditioning.slice(0, 1)}
            </span>{" "}
            unit AC
          </p>
        </div>

        <div className="flex flex-col items-start space-y-2 justify-start">
          <div className="relative h-10 w-12 transform translate-x-2">
            <Image
              alt={`${details.name} feature`}
              layout="fill"
              src="/images/feature/icon-wifi.svg"
            />
          </div>
          <p className="text-gray-400">
            <span className="text-blue-600 font-semibold">
              {details.internet.slice(0, 1)}
            </span>{" "}
            mbp/s
          </p>
        </div>

        <div className="flex flex-col items-start space-y-2 justify-start">
          <div className="relative h-10 w-12 transform -translate-x-1">
            <Image
              alt={`${details.name} feature`}
              layout="fill"
              src="/images/feature/icon-bathroom.svg"
            />
          </div>
          <p className="text-gray-400">
            <span className="text-blue-600 font-semibold">
              {details.bathroom.slice(0, 1)}
            </span>{" "}
            bathroom
          </p>
        </div>

        <div className="flex flex-col items-start space-y-2 justify-start">
          <div className="relative h-10 w-12 transform -translate-x-1">
            <Image
              alt={`${details.name} feature`}
              layout="fill"
              src="/images/feature/icon-tv.svg"
            />
          </div>
          <p className="text-gray-400">
            <span className="text-blue-600 font-semibold">
              {details.television.slice(0, 1)}
            </span>{" "}
            television
          </p>
        </div>

        <div className="flex flex-col items-start space-y-2 justify-start">
          <div className="relative h-10 w-12 transform -translate-x-2">
            <Image
              alt={`${details.name} feature`}
              layout="fill"
              src="/images/feature/icon-refrigerator.svg"
            />
          </div>
          <p className="text-gray-400">
            <span className="text-blue-600 font-semibold">
              {details.refrigerator.slice(0, 1)}
            </span>{" "}
            main room
          </p>
        </div>

        <div className="flex flex-col items-start space-y-2 justify-start">
          <div className="relative h-10 w-12 transform translate-x-3">
            <Image
              alt={`${details.name} feature`}
              layout="fill"
              src="/images/feature/icon-diningroom.svg"
            />
          </div>
          <p className="text-gray-400">
            <span className="text-blue-600 font-semibold">
              {details.furnished && "furnished"}
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};
