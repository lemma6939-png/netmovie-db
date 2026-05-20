import React from "react";
import Styles from "./Slideshow.module.css";
import MovieCard from "./../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Slideshow({ title, movies }) {
  return (
    <div className={Styles.slideshow}>
      <h2 className={Styles.title}>{title}</h2> {/* FIXED */}
      <div className={Styles.Row}>
        {" "}
        {/* matches .Row */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={5.6}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slideshow;
