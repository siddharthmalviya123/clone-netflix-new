import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
const MovieContainer = () => {

    const movie = useSelector(store=>store.movie);
     console.log(movie);

  return (
    <div className=' bg-black'>
    <div className='mt-52 relative 2-10'>
    <MovieList title ={"Popular Movie"} movies={movie.popularMovie}/>
    <MovieList title ={"Top rated Movie"} movies={movie.topRatedMovies}/>
    <MovieList title ={"Now Playing Movie"} movies={movie.nowPlayingMovies}/>
    <MovieList title ={"Upcoming Movie"} movies={movie.upcomingMovie}/>
    </div>
    </div>
  )
}

export default MovieContainer
