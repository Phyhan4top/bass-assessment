"use client";
import UiInput from "@/app/_components/atom/input";
import React from "react";
import { useSearchContext } from "../_searchContext/searchContext";
import UiButton from "@/app/_components/atom/button";

const YourSearch = () => {
  const form = useSearchContext();
  return (
    <div className="w-full flex justify-center items-center h-full bg-[#f8f8f8]  gap-1 p-12">
      <div className="w-[80%] flex flex-col gap-5 justify-center">
        <h1>Your Search</h1>
        <div>
          <label htmlFor="type">Event Type</label>
          <UiInput
            type="text"
            placeholder="Wedding"
            {...form?.formProps("eventType")}
            className="bg-[#fff] text-[
#767676] rounded-[18px"
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <UiInput
            type="text"
            placeholder="Lagos"
            id="location"
            {...form?.formProps("location")}
            className="bg-[#fff] text-[
#767676] rounded-[18px"
          />
        </div>
        <div>
          <label htmlFor="price">Pice Range</label>
          <UiInput
            type="text"
            placeholder="#20k -     #40k"
            id="price"
            {...form?.formProps("priceRange")}
            className="bg-[#fff] text-[
#767676] rounded-[18px"
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <UiInput
            type="text"
            placeholder="Excellent"
            id="rating"
            {...form?.formProps("rating")}
            className="bg-[#fff] text-[
#767676] rounded-[18px"
          />
        </div>
        <UiButton
          as="button"
          variant="filled"
          type="submit"
          className="w-full"
          loading={form?.formik.isSubmitting}
        >
          Search
        </UiButton>
      </div>
    </div>
  );
};
export default YourSearch;
