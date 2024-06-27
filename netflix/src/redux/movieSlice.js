import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovie:null,
        topRatedMovies:null,
        upcomingMovie:null,
        toggle : false,
        trailerMovie :null,
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
        },
        setToggle:(state)=>{
            state.toggle= !state.toggle
        }
    }
})

export const {getNowPlayingMovies, getPopularMovie,getUpcomingMovie , setToggle,getTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer