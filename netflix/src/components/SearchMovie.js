import React from 'react'
import { useState } from 'react';
import { SEARCH_MOVIE_URL,options } from '../utils/constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
const SearchMovie = () => {


    const [searchMovie, setSearchMovie]= useState("");
const dispatch= useDispatch();

const submitHandler= async (e)=>{
    e.preventDefault();
    

    try{
       const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
       console.log(res.data);    
       const movies = res?.data?.results;
            dispatch(setSearchMovieDetails({ searchMovie, movies }));
    }
    catch(error){
console.log(error);
    }
}
  return (

        <div className='flex justify-center pt-[10%] w-[100%]'>
            <form  onSubmit ={submitHandler} className='w-[50%]'>
                <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
                    <input  value ={searchMovie} onChange={(e)=>(setSearchMovie(e.target.value))}className='w-full outline-none rounded-md text-lg' type="text" placeholder='Search Movies...' />
                    <button className='bg-red-800 text-white rounded-md px-4 py-2'>search</button>
                </div>
            </form>
        </div>

     
  

)
}

export default SearchMovie
