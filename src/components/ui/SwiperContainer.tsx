import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export function SwiperContainer({ children }: { children: React.ReactNode }) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={2.5}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="w-full"
    >
      {children}
    </Swiper>
  );
}
