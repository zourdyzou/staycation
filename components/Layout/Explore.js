import React from "react";

import { ExploreCard } from "../Card/ExploreCard";
import { exploreData } from "../../public/exploreData";

export const Explore = () => {
  return (
    <section className="pt-6 md:transform md:-translate-y-14">
      <h2 className="text-3xl font-semibold p-3 text-indigo-800">
        Explore nearby.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        {exploreData.map((item, index) => {
          const { distance, img, location } = item;

          return (
            <ExploreCard
              key={index}
              distance={distance}
              location={location}
              image={img}
            />
          );
        })}
      </div>
    </section>
  );
};
