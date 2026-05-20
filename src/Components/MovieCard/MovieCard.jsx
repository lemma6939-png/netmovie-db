import React from "react";
import Styles from "./MovieCard.module.css";

import { FaPlayCircle } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  // If no movie data, render nothing
  if (!movie) return null;

  // Fallback genres if the API does not provide movie.genres
  const genere = ["Action", "Adventure", "Trailer"];

  // Choose genres from API if available; otherwise use fallback
  const displayGenres = movie.genres || genere;

  return (
    <div className={Styles.MovieCard}>
      {/* Poster image */}
      <img
        className={Styles.MoviePoster}
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title || movie.name}
      />

      {/* Hover card */}
      <div className={Styles.HoverCard}>
        {/* Large image on hover */}
        <img
          className={Styles.HoverImage}
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title || movie.name}
        />

        {/* Badge */}
        <div className={Styles.Badge}>Recently Added</div>

        {/* Control buttons */}
        <div className={Styles.ButtonRow}>
          <FaPlayCircle
            className={Styles.CircleButton}
            color="white"
            size={30}
          />
          <BsPlusCircle
            className={Styles.CircleButton}
            color="white"
            size={30}
          />
          <GoCheckCircleFill
            className={Styles.CircleButton}
            color="white"
            size={30}
          />
          <IoIosArrowDropdownCircle
            className={Styles.CircleButton}
            color="white"
            size={30}
          />
        </div>

        {/* Metadata row */}
        <div className={Styles.MetaData}>
          <span className={Styles.MetaDataItem}>U/A 16+</span>
          <span className={Styles.MetaDataItem}>Movie</span>
          <span className={Styles.MetaDataItem}>HD</span>
        </div>

        {/* Genres */}
        <div className={Styles.Genre}>
          {displayGenres.map((g, index) => (
            <span key={index}>
              {typeof g === "string" ? g : g.name}
              {index < displayGenres.length - 1 && (
                <span className={Styles.Dot}> • </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
