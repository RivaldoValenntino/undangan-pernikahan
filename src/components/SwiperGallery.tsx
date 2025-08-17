import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SwiperGallery = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // ✅ JSON array isi gambar
  const galleryImages = [
    "src/assets/images/bg-gallery-1.jpg",
    "src/assets/images/bg-gallery-2.jpg",
    "src/assets/images/bg-gallery-3.jpg",
    "src/assets/images/bg-gallery-4.jpg",
    "src/assets/images/bg-gallery-5.jpg",
  ];

  return (
    <div>
      {/* Main Gallery */}
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {galleryImages.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`gallery-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {galleryImages.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`thumb-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperGallery;
