export default function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-3 mt-6">
      <button className="px-3 py-1 rounded-md text-sm font-medium bg-yellow-200 text-black">
        1
      </button>
      <button className="px-3 py-1 rounded-md text-sm font-medium bg-yellow-50 text-gray-700">
        2
      </button>
      <button className="px-3 py-1 rounded-md text-sm font-medium bg-yellow-50 text-gray-700">
        3
      </button>

      <button className="px-4 py-1 rounded-md text-sm font-medium bg-yellow-50 text-gray-700 hover:bg-yellow-100">
        Next
      </button>
    </div>
  );
}
