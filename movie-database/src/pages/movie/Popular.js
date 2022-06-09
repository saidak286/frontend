import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constant/endpoints";

function Popular() {
    // Membuat state movie
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        // Fect data dari axios
        const response = await axios(ENDPOINTS.POPULAR);

        // Simpan data ke state movie
        setMovies(response.data.results)
    }, []);

    console.log(movies);

    return (
        <div>
            <Hero />
            <Movies title="Popular Movies" movies={movies} />
        </div>
    )
}

export default Popular;