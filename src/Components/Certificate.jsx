import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const certifications = [
  { id: 1, image: `${import.meta.env.BASE_URL}assets/bg18.svg` },
  { id: 2, image: `${import.meta.env.BASE_URL}assets/mara-card.png` },
  { id: 3, image: `${import.meta.env.BASE_URL}assets/icef.png` },
  { id: 4, image: `${import.meta.env.BASE_URL}assets/qeac.svg` },
  { id: 5, image: `${import.meta.env.BASE_URL}assets/isana.svg` },
];

export default function CertificationSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12">
      {/* Heading */}
       <h2 className="text-3xl md:text-5xl font-medium text-[#163c3d] mb-14">
          Certification <span className="text-[#8fd07c] font-semibold">And</span>{" "}
          <span className="font-semibold">Accreditation</span>
        </h2>

      {/* Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {certifications.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[280px] flex items-center justify-center">
              <img
                src={item.image}
                alt="certification"
                className="max-h-[200px] object-contain transition duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
