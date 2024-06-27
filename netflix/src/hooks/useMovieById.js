import React from 'react'
import axios from 'axios'
import { options } from '../utils/constant';
const useMovieById =  async (movieId) => {
 

    try{
        const res= await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
    
        console.log(res.data.results);
        const trailer= res?.data?.result?.filter((item)=>{
            return item.type === "Trailer"
        })
    }

    catch(error){
console.log(error);
    }
}

export default useMovieById
