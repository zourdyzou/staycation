import React from "react";

import Link from "next/link";

export const BreadCrumbs = ({ link }) => {
  return (
    <div className="bg-indigo-100">
      <main className="max-w-6xl mx-auto pt-24 pb-0 md:py-24 px-6">
        <div className="flex items-center justify-start transform translate-y-8">
          <div className="flex items-center space-x-5">
            <Link passHref href="/">
              <span className="text-gray-400 hover:underline cursor-pointer">
                Home
              </span>
            </Link>
            <span className="text-gray-400">/</span>
            <span>{link}</span>
          </div>
        </div>
      </main>
    </div>
  );
};
