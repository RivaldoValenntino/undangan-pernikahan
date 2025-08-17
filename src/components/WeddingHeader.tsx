import React from "react";
import Countdown from "./Countdown";

interface WeddingHeaderCardProps {
  title?: string;
  arabicText?: string;
  description?: string;
  date: string;
}

const WeddingHeaderCard: React.FC<WeddingHeaderCardProps> = ({
  title = "We’re Getting Married",
  arabicText = "lorem ipsum dolor sit amet",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente excepturi tempore dicta quo aut, iste cumque architecto molestias quod cum.",
  date,
}) => {
  return (
    <div className=" text-center px-4 rounded-2xl max-w-3xl mx-auto">
      {/* Title */}
      <h2 className="text-pink-600 text-2xl font-bold mb-3">{title}</h2>

      {/* Arabic Greeting */}
      <p className="text-gray-700 italic font-cursive text-lg mb-2">
        {arabicText}
      </p>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">
        {description}
      </p>

      {/* Date */}
      <h3 className="text-gray-700 text-lg font-semibold mb-6">{date}</h3>

      {/* Countdown Boxes */}
      <Countdown />
    </div>
  );
};

export default WeddingHeaderCard;
