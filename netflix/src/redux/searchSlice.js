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
        },
        setMovieName:(state,action)=>{
            state.movieName= action.payload;
        },
        setSearchedMovies:(state, action)=>{
        state.searchMovie= action.payload

        }
    }
})


export const {setMovieName,setSearchMovieDetails, setSearchedMovies} = searchSlice.actions
export default searchSlice.reducer;