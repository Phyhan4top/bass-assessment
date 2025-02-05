"use client";
import { useState } from "react";
import EventCard from "../../molecule/eventCard/eventCard";

const itemsPerPage = 6; // Change this to control items per page

const EventList = ({ events }: { events: any[] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(events.length / itemsPerPage);

  // Get the current items for this page
  const currentItems = events.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 4; // Maximum number of pages to display before ellipsis
    if (totalPages <= maxPagesToShow) {
      // If total pages are less than or equal to 4, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show the first page
      pageNumbers.push(1);

      // Show 2nd, 3rd, and 4th pages if not close to the last page
      if (currentPage < totalPages - 1) {
        for (
          let i = currentPage;
          i < currentPage + 3 && i < totalPages - 1;
          i++
        ) {
          pageNumbers.push(i);
        }
        pageNumbers.push("..."); // Add ellipsis for more pages
      }

      // Always show the last page
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <div className="w-full ">
      {/* Event Items */}
      <div>
        {currentItems.map((event, index) => (
          <EventCard key={index} details={event} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 mb-4 gap-2">
        {/* Previous Page Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          ←
        </button>

        {/* Page Numbers */}
        {generatePageNumbers().map((page, index) => {
          return page === "..." ? (
            <span key={index}>...</span>
          ) : (
            <button
              key={index}
              onClick={() => setCurrentPage(Number(page))}
              className={`px-4 py-2 rounded-full ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next Page Button */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default EventList;
