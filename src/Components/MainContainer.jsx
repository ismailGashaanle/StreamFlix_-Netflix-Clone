

import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
 

const MainContainer = () => {

//    const movie=useSelector(store=>store?.Movie?.Movies?.NowPlayingFilms)
   // console.log("movies",movie)
   const movies = useSelector(store => store?.Movie?.Movies)

if (!movies || movies.length === 0) return null;
 

if (!movies || movies.length === 0) return null;

   const mainMovie=movies[0];
    const {original_title,overview,id,poster_path}=mainMovie
    //console.log("mainMovie",mainMovie)
    console.log("poster_path",poster_path)
  
  return (
    <div>

      <VideoBackground moviId={id} title={original_title}/>
      <VideoTitle overview={overview} title={original_title} poster_path={poster_path} MovieId={id}   />
    </div>
  )
}

export default MainContainer
