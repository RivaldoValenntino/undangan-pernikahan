import React from "react";
import { CalendarDays, Clock } from "lucide-react";

interface WeddingInfoCardProps {
  date: string;
  time: string;
  location: string;
  address: string;
}

const WeddingInfoCard: React.FC<WeddingInfoCardProps> = ({
  date,
  time,
  location,
  address,
}) => {
  return (
    <div className="bg-white rounded-md w-full max-w-lg mx-auto p-6 sm:p-8 text-center relative overflow-hidden font-poppins shadow-md">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-pink-600"></div>

      <h2 className="text-pink-600 text-2xl md:text-3xl font-bold mb-4">
        Wedding Ceremony
      </h2>

      <div className="flex flex-col gap-6 text-gray-700">
        {/* Date */}
        <div className="flex items-center justify-center gap-3">
          <CalendarDays className="text-pink-500" size={24} />
          <span className="text-lg md:text-xl font-medium">{date}</span>
        </div>

        {/* Time */}
        <div className="flex items-center justify-center gap-3">
          <Clock className="text-pink-500" size={24} />
          <span className="text-lg md:text-xl font-medium">{time}</span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-1 text-center px-4">
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-semibold">{location}</span>
            <span className="text-sm md:text-base text-gray-500">
              {address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInfoCard;
