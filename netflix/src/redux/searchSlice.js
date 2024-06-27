import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name: "search",
    initialState: {
        movieName: null,
        searchMovie:null,

    },
    reducers:{
        //action
        setSearchMovieDetails :(state,action)=>{
            const {searchMovie, movies}= action.payload;
            state.movieName=searchMovie;
            state.searchMovie=movies;
        },
    }
})


export const {setMovieName,setSearchMovieDetails, setSearchedMovies} = searchSlice.actions
export default searchSlice.reducer;