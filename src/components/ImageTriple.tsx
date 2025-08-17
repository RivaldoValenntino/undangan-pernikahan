import React from "react";

interface ImageTripleProps {
  images: string[];
}

const ImageTriple: React.FC<ImageTripleProps> = ({ images }) => {
  if (images.length < 3) {
    console.warn("Minimal harus 3 gambar!");
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      {/* Gambar kiri */}
      <img
        src={images[0]}
        alt="Left"
        className="w-20 h-20 rounded-full object-cover"
      />
      {/* Gambar tengah */}
      <img
        src={images[1]}
        alt="Center"
        className="w-28 h-28 rounded-full object-cover border-4 border-pink-300 shadow-lg"
      />
      {/* Gambar kanan */}
      <img
        src={images[2]}
        alt="Right"
        className="w-20 h-20 rounded-full object-cover"
      />
    </div>
  );
};

export default ImageTriple;
