
import { Upcoming_Movie, options } from "../utils/constant";
import { getUpcomingMovie } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const useUpcomingMovies = async ()=>{
  const dispatch=useDispatch();
  try{
    const res= await axios.get(Upcoming_Movie,options);
    dispatch(getUpcomingMovie(res.data.results))
  }
  catch(error)
  {
    console.log(error);
  }
}

export default useUpcomingMovies;
