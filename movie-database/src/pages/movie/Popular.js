import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function Popular() {
    // Simpan API KEY dan URL ke dalam variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // Membuat state movie
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        // Fect data dari axios
        const response = await axios(URL);

        // Simpan data ke state movie
        setMovies(response.data.results)
    }, []);

    console.log(movies);

    return (
        <div>
            <Hero />
            <Movies movies={movies} />
        </div>
    )
}

export default Popular;