import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl sm:mx-auto md:px-4 p-1 pb-10 md:p-10 pt-72">
        <div className="flex flex-col space-y-4 transform translate-y-[-28px]">
          <div className="relative h-7 w-36 mt-0">
            <Image
              src="/images/logo/Staycation.png"
              layout="fill"
              alt="Logo Staycation.com best places for spending your travel time!"
            />
          </div>
          <p className="text-gray-600 ">
            We kaboom your beauty holiday <br /> instantly and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:space-x-3 pr-10">
          <div className="flex flex-col">
            <h4 className="text-lg text-indigo-800 pb-2 font-semibold">
              For Beginners
            </h4>
            <div className="flex flex-col space-y-3">
              <p className="text-gray-400 hover:underline cursor-pointer">
                New Account
              </p>
              <p className="text-gray-400 hover:underline cursor-pointer">
                Start Booking a Room
              </p>
              <p className="text-gray-400 hover:underline cursor-pointer">
                Use Payments
              </p>
              <p className="text-gray-400 hover:underline cursor-pointer">
                Become a partner
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg text-indigo-800 pb-2 font-semibold">
              Explore Us
            </h4>
            <div className="flex flex-col space-y-3">
              <p className="text-gray-400 hover:underline cursor-pointer">
                Our Careers
              </p>
              <p className="text-gray-400 hover:underline cursor-pointer">
                Work Lifestyle
              </p>
              <p className="text-gray-400 hover:underline cursor-pointer">
                Privacy
              </p>
              <p className="text-gray-400 hover:underline cursor-pointer">
                Terms & Conditions
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg text-indigo-800 pb-2 font-semibold">
              Connect Us
            </h4>

            <div className="flex flex-col space-y-3">
              <p className="text-gray-400 hover:underline cursor-pointer">
                support@staycation.com
              </p>
              <p className="text-gray-400 hover:underline cursor-pointer">
                +48 - 47 - 881759
              </p>
              <p className="text-gray-400 hover:underline cursor-pointer">
                Staycation, Krakow, Poland.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="flex items-center justify-center p-10">
        <h4 className="text-gray-400 text-center">
          Copyright &copy; 2021 · All rights reserved · Staycation
        </h4>
      </div>
    </>
  );
};
