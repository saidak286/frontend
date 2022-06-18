import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

function Movies(props) {
  // destructing props
  const { title, setMovies } = props;
  const movies = useSelector((state) => state.movies.movies);

  /**
   * Buat fungsi tambah film 
   * dijalankan ketika tombol diklik
   */
  function tambahFilm() {
    const movie = {
      id: nanoid(),
      title: "Sing 2: Come Sing Again!",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    /**
     * Menambahkan movie ke state movies
     * spread operator: copy dan merge array
     */
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {/* 
          * Looping data movies: map
          * Render Component Movie
          * Kirim props movie
          */}
          {movies.map(function(movie) {
            return <Movie key={movie.id} movie={movie} />
          })}
        </div>
        {/* // Menambahkan event on Click
        <button onClick={tambahFilm}>Add Movie</button> */}
      </section>
    </div>
  );
}

export default Movies;
