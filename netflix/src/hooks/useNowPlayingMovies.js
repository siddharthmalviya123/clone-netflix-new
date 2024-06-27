import axios from "axios";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { now_playing_movies, options  } from "../utils/constant";
import { useDispatch } from 'react-redux'
const useNowPlayingMovies = async()=>{

    const dispatch= useDispatch();
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

export default useNowPlayingMovies;