"use client";
import UiInput from "@/app/_components/atom/input";
import React from "react";
import { useSearchContext } from "../_searchContext/searchContext";

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
        <UiInput
          as="button"
          rightIcon={false}
          type="submit"
          value="Search"
          loading={form?.formik.isSubmitting}
          className="bg-[#0166ff] text-white rounded-[18px]"
        />
      </div>
    </div>
  );
};
export default YourSearch;
