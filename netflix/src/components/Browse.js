import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import { now_playing_movies ,options} from '../utils/constant';
import axios from 'axios';
import { getNowPlayingMovies } from '../redux/movieSlice';

const Browse = () => {
const user = useSelector(store=>store.app.user);
const navigate = useNavigate();
const dispatch= useDispatch();

const nowplayingmovies = async()=>{
  try{
    const res = await axios.get(now_playing_movies , options)
    console.log(res.data.results);
    dispatch(getNowPlayingMovies(res.data.results))
  }
  catch(error)
  {
    console.log(error)
  }
}
useEffect(()=>{
  if(!user)
    {
      navigate("/");
    }
  nowplayingmovies();
},[])

  return (
    <div>
     <Header/>
     <div>
      <MainContainer/>
      <MovieContainer/>
     </div>
    </div>
  )
}

export default Browse
