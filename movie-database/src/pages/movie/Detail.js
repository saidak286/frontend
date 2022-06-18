import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";

function Detail() {
    const { id } = useParams();
    const [movies, setmovies] = useState([]);

    useEffect(() => {
        getRecommendationMovies();
    }, [id]);

    async function getRecommendationMovies() {
        // const API_KEY = process.env.REACT_APP_API_KEY;
        // const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
        const response = await axios(ENDPOINTS.RECOMMENDATION(id));
        setmovies(response.data.results);
    }

    return(
        <>
            <DetailMovie />
            <Movies title="Recommendation Movie" movies={movies} />
        </>
    )
}

export default Detail;