const images = [
  "https://dummyimage.com/400x500/fde2e4/333333&text=Bride",
  "https://dummyimage.com/400x600/fad2e1/333333&text=Groom",
  "https://dummyimage.com/400x550/facade/333333&text=Rings",
  "https://dummyimage.com/400x500/fbcfe8/333333&text=Flowers",
  "https://dummyimage.com/400x600/e9d5ff/333333&text=Decor",
  "https://dummyimage.com/400x500/ffe4e6/333333&text=Couple",
];

export default function Gallery() {
  return (
    <section className="bg-pink-50 py-10">
      <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
        Wedding Gallery
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="mb-4 overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
