"use client";
import React, { useState } from "react";
import { CheckboxFilter } from "../checkboxFilter/checkboxFilter";
import UiInput from "../../atom/input";
import NextImage from "../../atom/image";

const EventFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  return (
    <div className="flex justify-start items-start flex-col gap-3 py-16 px-11">
      <CheckboxFilter
        title="Popular filters"
        categories={["Wedding", "Dinner Parties", "Meeting", "Networking"]}
        selectedCategories={selectedCategories}
        onChange={setSelectedCategories}
      />
      <div className="flex flex-col justify-start items-start gap-3">
        <h1 className="text-xl font-bold">Price Range</h1>
        <NextImage src="/icons/chartbar_range.svg" className="w-full" />
        <div className="flex justify-start gap-10 items-center">
          <div className="flex gap-3 flex-col justify-start items-start">
            <label
              htmlFor="min_price"
              className="font-semibold text-base text-[#767676]"
            >
              Min Price
            </label>
            <UiInput
              rightIcon="/images/nairaIcon.png"
              placeholder="123"
              id="min_price"
              type="number"
            />
          </div>
          <div className="flex gap-3 flex-col justify-start items-start">
            <label
              htmlFor="max_price"
              className="font-semibold text-base text-[#767676]"
            >
              Max Price
            </label>
            <UiInput
              type="number"
              rightIcon="/images/nairaIcon.png"
              placeholder="123"
              id="max_price"
            />
          </div>
        </div>
      </div>
      <CheckboxFilter
        title="Guest Ratings"
        categories={["any", "Excellent", "Very good", "Good"]}
        selectedCategories={selectedCategories}
        onChange={setSelectedCategories}
      />
    </div>
  );
};

export default EventFilter;
