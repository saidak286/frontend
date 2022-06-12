// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
// import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
// import { useState } from "react";
// import data from "../components/utils/constant/data";
// import Counter from "../components/Counter/Counter";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home({movies}) {

  return (
    <>
      <Hero />
      <Movies title="Latest Movie" movies={movies} />
    </>
  );
  // return (
  //   <Counter />
  // );
}

export default Home;
