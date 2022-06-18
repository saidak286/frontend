import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";
import { updateMovies } from "../../features/movieSlice";

function Popular() {
    // Buat dispatch: untuk trigger action redux
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies();
        // // Simpan data ke state movie
        // setMovies(response.data.results)
    }, []);

    async function getPopularMovies() {
        // Fect data dari axios
        const response = await axios(ENDPOINTS.POPULAR);
        const movies = response.data.results;

        dispatch(updateMovies(movies))
    }

    return (
        <div>
            <Hero />
            <Movies title="Popular Movies" />
        </div>
    )
}

export default Popular;