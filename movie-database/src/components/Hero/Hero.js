/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import ENDPOINTS from "../../utils/constant/endpoints";
import styles from "./Hero.module.css";
import StyledHero from "./Hero.Styled";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  // async function fetchMovie() {
  //   // Melakukan side effect: fecth data movie (api)
  //   const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
  //   const data = await response.json();
  //   // set movie dengan data movie hasil fetch
  //   setMovie(data);
  // }
  
  useEffect(getDetailMovie, []);

  // Mendapatkan 1 data dari trending movies
  async function getTrendingMovie() {
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[0];
  }

  async function getDetailMovie() {
    // Ambil id dari trending movie
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;

    // fetch detail movie by id 
    const response = await axios(ENDPOINTS.DETAIL(id));
    console.log(response.data);

    setMovie(response.data);
  }

  // console.log(movie);

  return (
    <StyledHero>
      <section>
        <div className={styles.hero__left}>
          <h2>{movie.title}</h2> 
          <h3>Genre: {genres}</h3>
          <p>{movie.overview}</p>
          <Button varriant="primary" as="a" href={trailer}>Watch Movie</Button>
        </div>
        <div className="hero__right">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.Title}
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
