import React, { useState } from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";

export const Filter = () => {
  const [toggleFilter, setToggleFilter] = useState(false);

  /**
   * TODO:
   *   1. CREATE REDUCER IN REDUX FOR MANIPULATE THE DATA (FILTERING)
   *   2. CREATE HANDLE CLICK FOR DISPATCHING TYPE AND VALUE BY (NAME) ATTR.
   */

  return (
    <div className="relative">
      <button
        onClick={() => setToggleFilter((toggleFilter) => !toggleFilter)}
        className="px-5 py-2 bg-gradient-to-br from-green-300 to-indigo-500 text-gray-600 font-semibold tracking-wider rounded-md flex items-center border border-purple-300"
      >
        Filter <AdjustmentsIcon className="h-6 2-6 ml-4" />
      </button>

      {toggleFilter && (
        <>
          <div className="absolute top-12 rounded-[4px] px-2 py-3 bg-gradient-to-tl from-indigo-700 to-green-400 flex flex-col space-y-2 w-full z-50">
            <button
              onClick={() => setToggleFilter(false)}
              name="low"
              className="flex items-center text-xs text-white hover:bg-blue-300 hover:text-gray-700 cursor-pointer py-2 justify-center rounded-[4px]"
            >
              Price: High to Low
            </button>
            <button
              onClick={() => setToggleFilter(false)}
              name="high"
              className="flex items-center text-xs cursor-pointer py-2 justify-center rounded-md hover:bg-blue-300 hover:text-gray-700 text-white"
            >
              Price: Low to High
            </button>
          </div>
        </>
      )}
    </div>
  );
};
