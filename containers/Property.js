import React from "react";
import { Filter } from "../components/Misc/Filter";
import { Pagination } from "../components/Misc/Pagination";

export const Property = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <h2 className="text-indigo-600 text-2xl font-semibold py-16 px-4">
        All Listed Property.
      </h2>
      <div>
        {/* FILTER & PAGINATION */}
        <div className="flex justify-between items-center px-5">
          <Filter />
          <Pagination />
        </div>

        {/* CARDS */}
      </div>
    </main>
  );
};
