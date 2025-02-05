"use client";
import NextImage from "@/app/_components/atom/image";
import EventList from "@/app/_components/organism/eventList/eventList";
import { mockEventDetailsList } from "@/app/_components/organism/eventList/mockEvents";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function SearchFilters() {
  const params = useSearchParams();

  // Extract filter values
  const eventType = params.get("eventType")?.toLowerCase() || "";
  const location = params.get("location")?.toLowerCase() || "";
  const priceRange = params.get("priceRange") || "";
  const rating = params.get("rating")?.toLowerCase() || "";

  // Function to map numeric ratings to labels
  const getReviewDetails = (ratings: number) => {
    if (ratings >= 9.5) return { comment: "excellence" };
    if (ratings >= 8.5) return { comment: "average" };
    return { comment: "poor" };
  };

  // Convert priceRange to numeric values
  const parsePriceRange = (priceRange: string | undefined) => {
    if (!priceRange) return { min: 0, max: Infinity };
    const [min, max] = priceRange.split("-").map(Number);
    return {
      min: isNaN(min) ? 0 : min,
      max: isNaN(max) ? Infinity : max,
    };
  };
  const priceFilter = parsePriceRange(priceRange);

  // Apply filters to the mock event list
  const filteredEvents = useMemo(() => {
    return mockEventDetailsList.filter((event) => {
      const eventPrice = Number(event.price) || 0; // Ensure price is a number
      const eventRatingLabel = getReviewDetails(
        parseFloat(event.ratings)
      ).comment.toLowerCase();

      return (
        ((!eventType || event.type.toLowerCase().includes(eventType)) &&
          (!location || event.location.toLowerCase().includes(location)) &&
          (!rating || eventRatingLabel === rating)) ||
        !priceRange ||
        (eventPrice >= priceFilter.min && eventPrice <= priceFilter.max)
      );
    });
  }, [
    eventType,
    location,
    priceRange,
    rating,
    priceFilter.min,
    priceFilter.max,
  ]);

  return (
    <div className="flex flex-col p-4 w-full">
      <div className="flex justify-between items-center px-3">
        <div className="result flex flex-col gap-3 justify-start  w-[90%]">
          <p className="text-[#767676] text-base font-semibold">
            140 search results for
          </p>
          <h3 className="text-[#000] text-xl font-semibold">
            Wedding, Lagos 20k - 40k, Excellent
          </h3>
        </div>
        <NextImage src="/icons/vuesax-bold-category.svg" />
        <NextImage src="/icons/vuesax-linear-task-square.svg" />
      </div>
      <EventList events={filteredEvents} />
    </div>
  );
}
