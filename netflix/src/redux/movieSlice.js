import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovie:null,
        topRatedMovies:null,
        upcomingMovie:null
    },
    reducers:{
        //actions
        getNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload
        }, 
        getPopularMovie :(state,action)=>{
            state.popularMovie= action.payload
        },
        getTopRatedMovies :(state,action)=>{
            state.topRatedMovies =action.payload
        },
        getUpcomingMovie :(state, action)=>{
            state.upcomingMovie= action.payload
        }
    }
})

export const {getNowPlayingMovies, getPopularMovie,getUpcomingMovie , getTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer