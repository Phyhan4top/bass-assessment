"use client";
import { useEffect, useState } from "react";
import UiButton from "../../atom/button";
import NextImage from "../../atom/image";

const getReviewDetails = (ratings: number) => {
  if (ratings >= 9.5) return { color: "text-green-500", comment: "Excellence" };
  if (ratings >= 8.5) return { color: "text-blue-500", comment: "Very good" };
  if (ratings >= 7.5) return { color: "text-yellow-500", comment: "Average" };
  return { color: "text-red-500", comment: "Poor" };
};

const EventCard = ({
  details,
}: {
  details: {
    src: string;
    name: string;
    facilities: string[];
    distance: string;
    reviews: number;
    ratings: number;
    price: number;
  };
}) => {
  const [clientData, setClientData] = useState(details);

  useEffect(() => {
    if (details) {
      setClientData(details);
    }
  }, [details]);

  if (!clientData) return <p>Loading...</p>;

  const { color: reviewColor, comment: reviewComment } = getReviewDetails(
    clientData.ratings
  );

  return (
    <div className="event-card w-full flex flex-col md:flex-row gap-4 p-4">
      {/* Image Section */}
      <img
        src={clientData.src}
        alt={clientData.name}
        className="w-full md:w-[370.8px] h-[171px] rounded-2xl object-cover"
      />

      {/* Event Details Section */}
      <section className="event-details flex  justify-between w-full">
        <div className="flex flex-col gap-2 justify-between">
          <div>
            <h2 className="text-xl font-[600] text-[#000]">
              {clientData.name}
            </h2>
            <p className="text-base text-[#a2a2a2] font-medium">
              {clientData.distance}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-[600] text-[#000]">Facilities</h3>
            <ul>
              {clientData.facilities.map((facility) => (
                <li
                  key={facility}
                  className="text-base text-[#a2a2a2] font-medium"
                >
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Review and Price Section */}
        <div className="event-info flex flex-col gap-5 items-end justify-between">
          <div className="event-review flex gap-3">
            <div>
              <h3 className={reviewColor}>{reviewComment}</h3>
              <p>{clientData.reviews} reviews</p>
            </div>
            <span className="py-[8.5px] px-[16.2px] rounded-2xl bg-blue-200 text-center">
              {clientData.ratings}
            </span>
          </div>

          {/* Price and Button Section */}
          <div className="event-price flex flex-col items-end">
            <div className="font-[600] text-lg text-black gap-2 flex items-center">
              <NextImage
                src="/images/nairaIcon.png"
                alt="Price icon"
                className="h-[15px]"
              />
              {clientData.price}
            </div>
            <UiButton
              as="button"
              className="text-white px-[33.2px] py-[11.1px] rounded-2xl bg-[#0166ff]"
            >
              See booking options
            </UiButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventCard;
