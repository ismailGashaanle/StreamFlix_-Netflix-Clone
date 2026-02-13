// import React, { useEffect, useState } from 'react'
// import {background_Image} from '../utils/constant'
// import MainContainer from './MainContainer'
// import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
// import SecondaryContainer from './SecondaryContainer'
// import GptSearch from './GptSearch'
// import { useSelector } from 'react-redux'
 
 
// const Browser = () => {
// // const [movie,setMovie]=useState([]);
   
//    const gptsearch=useSelector(store=>store.GptSlice.Gptsearch);

   
//   //  console.log("gptsearch",gptsearch)
 

//       useNowPlayingMovie();

//   return (

//         <div className="">
//     <img src={background_Image}
//     w-screen h-screen bg-cover bg-center
//       />

//   <div className=" absolute top-20 w-full h-[400px] ">

  
//    {gptsearch? (  
//       <GptSearch/>
//     ):

//    (<>
   
//         <MainContainer/>
//     <SecondaryContainer/></>
//    )
//    }
  


//   </div>

//     </div>
//   )
// }

// export default Browser




//responsive

import React from 'react'
import { useSelector } from 'react-redux'
import { background_Image } from '../utils/constant'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'

const Browser = () => {
  const gptsearch = useSelector(store => store.GptSlice.Gptsearch)

  useNowPlayingMovie()

  return (
    <div className="relative w-full h-screen">
      <img
        src={background_Image}
        alt="background"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 w-full h-full">
        {gptsearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </div>
  )
}

export default Browser
