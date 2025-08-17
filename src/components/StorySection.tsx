import React from "react";
import flowerDecoration from "../assets/images/bunga-2.png";
interface StorySectionProps {
  title: string;
  year: string;
  topImage: string;
  bottomImage: string;
  description: string;
}

const StorySection: React.FC<StorySectionProps> = ({
  title,
  year,
  topImage,
  bottomImage,
  description,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg` overflow-hidden font-montaga">
      {/* Gambar Atas */}
      <img src={topImage} alt="top" className="w-full h-72 object-cover" />

      {/* Konten */}
      <div className="p-6 text-center">
        {/* Judul */}
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-pink-400 text-sm mt-1">{year}</p>

        {/* Ornamen Bunga */}
        <div className="flex justify-center my-4">
          <img src={flowerDecoration} alt="flower" className="w-32" />
        </div>

        {/* Deskripsi */}
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Gambar Bawah */}
      <img
        src={bottomImage}
        alt="bottom"
        className="w-full h-56 object-cover"
      />
    </div>
  );
};

export default StorySection;
