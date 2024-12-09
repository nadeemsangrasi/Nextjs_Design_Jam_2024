import { SlidersHorizontal } from "lucide-react";
export default function FilterBar() {
  return (
    <div className=" px-4 py-6 bg-pink-50 flex flex-wrap items-center justify-between gap-4 ">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Filter button */}
        <button className="flex items-center gap-2 text-gray-700 hover:text-black">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          <span>Filter</span>
        </button>

        {/* View icons */}
        <div className="flex items-center gap-2">
          <button className="text-gray-700 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 5h6v6H4V5zm0 8h6v6H4v-6zm8-8h6v6h-6V5zm0 8h6v6h-6v-6z" />
            </svg>
          </button>
          <button className="text-gray-700 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
            </svg>
          </button>
        </div>

        {/* Results count */}
        <span className="text-gray-700 text-sm">
          Showing 1–16 of 32 results
        </span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Show input */}
        <div className="flex items-center gap-2">
          <label htmlFor="show" className="text-gray-700 text-sm">
            Show
          </label>
          <input
            id="show"
            type="number"
            className="w-16 border border-gray-300 rounded-md text-center py-1 text-sm"
            defaultValue={16}
          />
        </div>

        {/* Sort by dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-gray-700 text-sm">
            Short by
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded-md py-1 px-2 text-sm bg-white"
          >
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
