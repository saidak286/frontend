import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constant/endpoints";

function NowPlaying() {
    // Buat dispatch: untuk trigger action redux
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
       getNowPlaying();
    }, []);

    async function getNowPlaying() {
        // Fect data dari axios
        const response = await axios(ENDPOINTS.NOWPLAYING);
        const movies = response.data.results;

        dispatch(updateMovies(movies)); 
    };

    return (
        <div>
            <Hero />
            <Movies title="Now Playing" />
        </div>
    )
}

export default NowPlaying;