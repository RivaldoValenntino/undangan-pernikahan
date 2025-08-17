import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image1 from "../assets/images/bg-gallery-1.jpg";
import Image2 from "../assets/images/bg-gallery-2.jpg";
import Image3 from "../assets/images/bg-gallery-3.jpg";
import Image4 from "../assets/images/bg-gallery-4.jpg";
import Image5 from "../assets/images/bg-gallery-5.jpg";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SwiperGallery = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // ✅ JSON array isi gambar
  const galleryImages = [Image1, Image2, Image3, Image4, Image5];

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
