// import createSlice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/constant/data";

/**
 * Buat Slice: untuk generate action and reduer.
 * menerima param object: name, initialState,  reducers
 */
const movieSlice = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) { 
            state.movies.push(action.payload)
        },
        deleteMovie() {}
    },
});

// generate action and reducers
const movieReducer = movieSlice.reducer;
const { addMovie } = movieSlice.actions;

// export action and reducers
export default movieReducer;
export { addMovie };