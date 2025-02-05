import React from "react";
import { Checkbox } from "@material-tailwind/react";

export const CheckboxFilter = ({
  title,
  categories,
  selectedCategories,
  onChange,
}: {
  title: string;
  categories: string[];
  selectedCategories: string[];
  onChange: (selected: string[]) => void;
}) => {
  // Handle checkbox toggle
  const handleCheckboxChange = (category: string) => {
    const updatedSelection = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    onChange(updatedSelection);
  };

  return (
    <div className="flex flex-col justify-start items-start gap-3">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex flex-col space-y-2">
        {categories.map((el) => (
          <div
            key={el}
            className="flex justify-start items-center gap-3 text-[#767676] font-semibold text-xl"
          >
            <Checkbox
              name={el}
              title={el}
              checked={selectedCategories.includes(el)}
              onChange={() => handleCheckboxChange(el)}
              className="w-5 h-5"
            />
            <span>{el}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
