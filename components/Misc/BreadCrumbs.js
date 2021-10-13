import React from "react";

import Link from "next/link";

export const BreadCrumbs = ({ link, secondLink }) => {
  return (
    <div className="bg-indigo-100 py-5 md:py-0">
      <main className="max-w-6xl mx-auto pt-24 pb-0 md:py-28 px-6">
        <div className="flex items-center justify-start transform -translate-y-3 md:translate-y-8">
          <div className="flex items-center space-x-6">
            <Link passHref href="/">
              <span className="text-gray-400 hover:underline cursor-pointer">
                Home
              </span>
            </Link>
            <span className="text-gray-400">/</span>
            <Link passHref href="/properties">
              <span
                className={`${
                  secondLink && "text-gray-400 hover:underline cursor-pointer"
                }`}
              >
                {link}
              </span>
            </Link>

            {secondLink && (
              <>
                <span className="text-gray-400">/</span>
                <span>{secondLink}</span>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
