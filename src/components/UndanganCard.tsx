import React from "react";
// import { Instagram, Twitter, Facebook, Heart } from "lucide-react";
import flowerDecoration from "../assets/images/bunga-2.png";
import { Heart } from "lucide-react";
interface Person {
  name: string;
  role: string;
  parents: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

interface UndanganCardProps {
  groom: Person;
  bride: Person;
  onAction: () => void;
}

const UndanganCard: React.FC<UndanganCardProps> = ({
  groom,
  bride,
  onAction,
}) => {
  return (
    <div className="bg-white rounded-md shadow-md max-w-xl mx-auto p-6 text-center h-fit w-full font-montaga">
      {/* Title */}
      <h2 className="text-pink-600 text-2xl font-bold mb-2">
        Lorem ipsum dolor sit amet.
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, soluta.
      </p>

      {/* Couple Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-8">
        {/* Groom */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 rounded-full border-4 border-pink-300 flex items-center justify-center mb-4">
            <img
              src={groom.image}
              alt={groom.name}
              className="w-36 h-36 rounded-full object-cover"
            />
            <img
              src={flowerDecoration}
              alt="flower decoration"
              className="absolute -bottom-3 w-40"
            />
          </div>
          <h3 className="text-pink-600 font-semibold text-xl">{groom.name}</h3>
          <p className="text-gray-500 text-sm">{groom.role}</p>
          <p className="text-gray-500 text-sm mb-3">{groom.parents}</p>
          <div className="flex space-x-4 text-pink-500">
            {/* {groom.socials.instagram && (
              <a href={groom.socials.instagram}>
                <Instagram size={18} />
              </a>
            )}
            {groom.socials.twitter && (
              <a href={groom.socials.twitter}>
                <Twitter size={18} />
              </a>
            )}
            {groom.socials.facebook && (
              <a href={groom.socials.facebook}>
                <Facebook size={18} />
              </a>
            )} */}
          </div>
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 rounded-full border-4 border-pink-300 flex items-center justify-center mb-4">
            <img
              src={bride.image}
              alt={bride.name}
              className="w-36 h-36 rounded-full object-cover"
            />
            <img
              src={flowerDecoration}
              alt="flower decoration"
              className="absolute -bottom-3 w-40"
            />
          </div>
          <h3 className="text-pink-600 font-semibold text-xl">{bride.name}</h3>
          <p className="text-gray-500 text-sm">{bride.role}</p>
          <p className="text-gray-500 text-sm mb-3">{bride.parents}</p>
          <div className="flex space-x-4 text-pink-500">
            {/* {bride.socials.instagram && (
              <a href={bride.socials.instagram}>
                <Instagram size={18} />
              </a>
            )}
            {bride.socials.twitter && (
              <a href={bride.socials.twitter}>
                <Twitter size={18} />
              </a>
            )}
            {bride.socials.facebook && (
              <a href={bride.socials.facebook}>
                <Facebook size={18} />
              </a>
            )} */}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="grid place-items-center">
        <button
          onClick={onAction}
          type="button"
          className="flex items-center justify-center gap-2 cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-lg transition"
        >
          <Heart size={18} />
          Our Story
        </button>
      </div>
    </div>
  );
};

export default UndanganCard;
