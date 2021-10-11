import React from "react";
import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="relative h-96 w-full">
        <Image src="/animations/airbnb-2.gif" alt="loader" />
      </div>
    </div>
  );
};
