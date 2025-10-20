import React, {useEffect} from "react";
import Hero1 from "../assets/Hero-1.avif"
import Hero2 from "../assets/Hero-2.avif"
import Hero3 from "../assets/Hero-3.avif"
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Hero = ({loading}) => {

  
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        Aos.refreshHard();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loading]);
  
  useEffect(() => {
  Aos.init({ duration: 2000, once: true });
}, []);
  const Slides = [
  {
    image: Hero1,
    title: "The North Face 1996 Retro Nuptse Jacket",
    subtitle: "Iconic warmth and street-ready style for any adventure.",
  },
  {
    image: Hero2,
    title: "Winter Essentials, Unmatched Comfort",
    subtitle: "Discover insulated jackets built for performance and style.",
  },
  {
    image: Hero3,
    title: "Adventure Meets Fashion",
    subtitle: "Stay warm, look bold — redefine your outdoor look today.",
  },
];

  return (
    <section className="w-full  md:h-[90vh] md:py-0 py-10  relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="md:h-[90vh] max-h-screen"
      >
        {Slides.map((slide, index) => (
          <SwiperSlide key={index} >
            <>
            <div className="max-w-lg md:max-h-96 md:py-8  m-auto">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover"
                data-aos="fade-down"  
                
              />
            </div>
              <div className="flex flex-col text-center items-center  font-semibold mb-12 ">
                <h1 className="md:text-5xl text-4xl  pb-4 text-gray-800 drop-shadow-lg" data-aos="fade-right"  >
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl  mb-4 text-gray-500" data-aos="fade-left"  >
                  {slide.subtitle}
                </p>
                <a
                  href="#popular"
                  className="text-white font-semibold bg-gray-600 shadow-md py-3 px-8 rounded-full hover:bg-gray-800 transition"
               data-aos="fade-up"   >
                  Explore Now
                </a>
              </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default React.memo(Hero);
