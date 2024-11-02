import React from "react";
import ReadMoreText from "./ReadMore";

const Card = ({ data, bordercolor }) => {
  // Construct the Tailwind class dynamically
  const borderColorClass = ``; // You can remove this if not used
  console.log(data);
  const cardData = data;

  return (
    <div
      className={`bg-light-bg cursor-pointer dark:text-light-text shadow-md p-2 m-3 rounded-md border-t-4 transition-all delay-150 ease-in-out ${bordercolor}`}
    >
      <div key={cardData.projectid} className="p-5 relative">
        {/* projectid: 1, projectType: "ONE_HAND", projectcode: 'DEV2024001', name:
        'HR Portal System', description: 'This Project help to HR their day to
        day life easier with fresh UI Interface.', image:
        "../hrportalthumbnail.png", */}
        <div className="py-2">
          <img
            src={require(`../assets/${cardData.image}`)} // Ensure the image path is correct
            loading="lazy" // Enable lazy loading
            className="h-auto max-w-full rounded-lg"
            alt="cardImage"
          />
        </div>
        <p className="font-bold text-base tracking-wider">{cardData.name}</p>
        <p className="text-xs">{cardData.status}</p>
        <div className="py-3 flex">
          <div>
            <ReadMoreText text={cardData.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
