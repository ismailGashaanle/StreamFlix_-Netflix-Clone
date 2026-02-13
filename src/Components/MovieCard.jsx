import React, { useState } from 'react'
import { Image_CDN } from '../utils/constant'
import { useParams, useSearchParams } from 'react-router-dom'
import VideoShow from './VideoShow';

const MovieCard = ({poster_path,VideoMovieKey}) => {

    const [showVideo,setShowVideo]=useState(false)
    const [searchParams,setSearchParams]=useSearchParams();
     

    // const handleMovieCard=((e))=>{
    //   console.log(VideoMovieKey)
    // }

    const handleMovieCard=()=>{
       setShowVideo(!showVideo)
        setSearchParams({videoKey:VideoMovieKey})


    }
   
  return (
    <>

    <div className='py-2'>
    <img onClick={handleMovieCard}  className=' cursor-pointer border-1 border-gray-500 shadow-lg w-[100px] sm:w-[150px] rounded-lg ' src={Image_CDN+poster_path} />
    </div>

{
    showVideo && <VideoShow VideoMovieKey={VideoMovieKey} />
}
    
    </>
   
  )
}

export default MovieCard
 

 
 