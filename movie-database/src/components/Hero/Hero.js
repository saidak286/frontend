/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import styles from "./Hero.module.css";
import StyledHero from "./Hero.Styled";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    // Melakukan side effect: fecth data movie (api)
    const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
    const data = await response.json();
    // set movie dengan data movie hasil fetch
    setMovie(data);
  }
  
  useEffect(fetchMovie, []);

  console.log(movie);

  return (
    <StyledHero>
      <section>
        <div className={styles.hero__left}>
          <h2>{movie.Title}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button varriant="primary">Watch Movie</Button>
        </div>
        <div className="hero__right">
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
