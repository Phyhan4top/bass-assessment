"use client";
import YourSearch from "./_search/search";
import SearchProvider from "./_searchContext/searchContext";
import EventFilter from "../_components/molecule/eventFilter/eventFilter";

export default function Home() {
  return (
    <div className="w-full">
      <SearchProvider>
        <YourSearch />
      </SearchProvider>
      <EventFilter />
    </div>
  );
}
