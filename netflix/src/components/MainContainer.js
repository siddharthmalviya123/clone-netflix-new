import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackgroud from './VideoBackgroud'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movie= useSelector(store=>store.movie?.nowPlayingMovies);
    if(!movie)
        {
                //early retun 
                return;
        }

const {overview,id,title}= movie[4];


  return (
    <div>
      <VideoTitle  title={title} overview={overview}/>
    <VideoBackgroud movieId={id}/>
    </div>
  )
}

export default MainContainer
