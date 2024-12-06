import React from "react";
import LargeCard from "./LargeCard";
import { cardsData } from "./data";

const LargeCards = () => {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-10 font-sans">
      {cardsData.map((card) => {
        return (
          <div
            className={`w-full border border-gray-800 p-4 xl:p-6 rounded-lg text-center space-y-3 ${card.className}`}
          >
            <card.icon className="w-8 h-8 2xl:w-10 2xl:h-10 mx-auto" />
            <h4 className="font-semibold text-lg lg:text-xl text-nowrap">
              {card.title}
            </h4>
            <h3 className="font-bold text-2xl">{card.value}</h3>
            <div className="flex justify-center gap-1 2xl:gap-5">
              {card.details.map((detail) => {
                return (
                  <div key={detail.id}>
                    <div className="text-xs 2xl:text-sm">
                      <p>{detail.label} :</p>
                      <p>{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LargeCards;
