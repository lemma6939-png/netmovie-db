import React, { useState, useEffect } from "react";
import Styles from "./DisplayRow.module.css";
import Slideshow from "../Slideshow/Slideshow";
import movieinstance from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrl";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRatedMovies: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  });

  const fetchMovies = async () => {
    try {
      const [
        trendingResponse,
        netflixOriginalsResponse,
        topRatedResponse,
        actionResponse,
        comedyResponse,
        horrorResponse,
        romanceResponse,
        documentaryResponse,
      ] = await Promise.all([
        movieinstance.get(requests.fetchTrending),
        movieinstance.get(requests.fetchNetflixOriginals),
        movieinstance.get(requests.fetchTopRatedMovies),
        movieinstance.get(requests.fetchActionMovies),
        movieinstance.get(requests.fetchComedyMovies),
        movieinstance.get(requests.fetchHorrorMovies),
        movieinstance.get(requests.fetchRomanceMovies),
        movieinstance.get(requests.fetchDocumentaries),
      ]);

      setMovies({
        trending: trendingResponse.data.results,
        netflixOriginals: netflixOriginalsResponse.data.results,
        topRatedMovies: topRatedResponse.data.results,
        actionMovies: actionResponse.data.results,
        comedyMovies: comedyResponse.data.results,
        horrorMovies: horrorResponse.data.results,
        romanceMovies: romanceResponse.data.results,
        documentaries: documentaryResponse.data.results,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={Styles.MainWrapper}>
      <Slideshow title="Trending" movies={movies.trending} />
      <Slideshow title="Netflix Originals" movies={movies.netflixOriginals} />
      <Slideshow title="Top Rated Movies" movies={movies.topRatedMovies} />
      <Slideshow title="Action Movies" movies={movies.actionMovies} />
      <Slideshow title="Comedy Movies" movies={movies.comedyMovies} />
      <Slideshow title="Horror Movies" movies={movies.horrorMovies} />
      <Slideshow title="Romance Movies" movies={movies.romanceMovies} />
      <Slideshow title="Documentaries" movies={movies.documentaries} />
    </div>
    
  );
}

export default DisplayRow;