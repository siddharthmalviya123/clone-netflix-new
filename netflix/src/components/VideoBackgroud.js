import React from 'react'
import useMovieById from '../hooks/useMovieById'

const VideoBackground = ({movieId}) => {

    useMovieById(movieId)
    return (
        <div className='w-[vw] overflow-hidden'>
            <iframe
                className= "w-screen aspect-video" 
                src="https://www.youtube.com/embed/?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground