// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AMF from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../components/utils/constant/data";
// import Counter from "../components/Counter/Counter";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AMF movies={movies} setMovies={setMovies} />
    </>
  );
  // return (
  //   <Counter />
  // );
}

export default Home;
