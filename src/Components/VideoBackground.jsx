

import React, { useEffect, useState } from 'react'
import { Api_Option,NowPlayingMovie } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie, AddNowPlayingMovie } from '../redux/MovieSlice';
import { addTrailerMove } from '../redux/TrailerSlice';

const VideoBackground = ({moviId,title}) => {
    const dispatch=useDispatch();
   // const TrailerMovie1=useSelector(store=>store.trailer);
    //console.log(TrailerMovie1.key);
    const [tarilerMoves,setTrailerMovies]=useState(null)
    //console.log(tarilerMoves)

    useEffect(()=>{
     if(moviId)    getNowPlayingMovei();

    },[moviId])

    const getNowPlayingMovei = async()=>{
        try{
       //   const VideoApi = await fetch(`https://api.themoviedb.org/3/tv/${moviId}/videos?language=en-US`, Api_Option);
           const VideoApi = await fetch(`https://api.themoviedb.org/3/movie/${moviId}/videos?language=en-US`, Api_Option);

       const res = await VideoApi.json();
            //console.log("res",res.results);
            const filtered=res.results.filter(r=>r.type==="Trailer");
           // console.log("filtered",filtered)
            dispatch(AddNowPlayingMovie(res.results));
            dispatch(addTrailerMove(filtered[0]?.key));
            setTrailerMovies(filtered[0]?.key)
            //const VideoApi = await fetch(`https://api.themoviedb.org/3/movie/${moviId}/videos?language=en-US`, Api_Option);

        

        }catch(error){
            
 
        }
    }



  return (
   <div className=" w-screen -mt-16 bg-gradient-to-r from-black/100 via-black/80 to-transparent  px-3 text-white">

    <iframe 
    className='w-screen   aspect-video'
     src={`https://www.youtube.com/embed/${tarilerMoves}?autoplay=1&mute=1`}
     title={title} frameBorder="0" allow="accelerometer;
      autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share"
     referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen>

      </iframe>
 
</div>

  )
}

export default VideoBackground
