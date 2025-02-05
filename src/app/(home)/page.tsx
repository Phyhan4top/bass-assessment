"use client";
import { useState } from "react";
import { CheckboxFilter } from "../_components/molecule/checkboxFilter/checkboxFilter";
import EventList from "../_components/organism/eventList/eventList";
import { mockEventDetailsList } from "../_components/organism/eventList/mockEvents";
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
