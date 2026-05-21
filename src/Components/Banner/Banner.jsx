
import React, { useState, useEffect } from "react";
import { Play, Info } from "lucide-react";
import Styles from "./Banner.module.css";
import movieinstance from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrl";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    async function fetchBannerImage() {
      try {
        const response = await movieinstance.get(
          requests.fetchNetflixOriginals,
        );
        const results = response.data.results;

        setBannerImage(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.error("Error fetching banner image:", error);
      }
    }

    fetchBannerImage();
  }, []);
 
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className={Styles.Banner}
      style={{
        backgroundImage: bannerImage
          ? `url(${BANNER_BASE}${bannerImage.backdrop_path})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={Styles.BannerContent}>
        <h1 className={Styles.BannerTitle}>
          {bannerImage?.original_name}
        </h1>

        <p className={Styles.BannerDescription}>
          {truncate(bannerImage?.overview, 50)}
        </p>

        <div className={Styles.BannerButtons}>
          <button>
            <Play size={20} /> Play
          </button>
          <button>
            <Info size={20} /> My List
          </button>
        </div>
      </div>

      <div className={Styles.FadeBottom}></div>
    </div>
  );
}

export default Banner;