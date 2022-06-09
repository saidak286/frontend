import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../UI/Button";
import ENDPOINTS from "../utils/constant/endpoints";
import StyleDetailMovie from "./DetailMovie.styled";

function DetailMovie() {
    /**
     * TODO:
     * - Ambil ID dari parameter URL
     * - Fecth Detail Movie by ID
     */
    const { id } = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

    useEffect(() => {
        getDetailMovie();
    }, [id])

    async function getDetailMovie() {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(ENDPOINTS.DETAIL(id));

        setMovie(response.data);
    }
    
    console.log(movie);
    return(
        <StyleDetailMovie>
            <div className="poster">
                <img 
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                    alt={movie.title}
                />
            </div>
            <div className="info">
                <h2>{movie.title}</h2>
                <h3>Genre: {genres}</h3>
                <p>{movie.overview}</p>
                <Button varriant="primary" as="a" href={trailer}>Watch Movie</Button>
            </div>
        </StyleDetailMovie>
    )
}

export default DetailMovie;