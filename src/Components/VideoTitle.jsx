import React from 'react'
import { useSelector } from 'react-redux'
import { background_Image, Image_CDN, Logo_Header } from '../utils/constant';

const VideoTitle = ({overview,title,MovieId,poster_path}) => {
    const movie=useSelector(store=>store?.Movie?.Movies);

if (!movie || movie.length === 0) return null;
 

  return (
    <div className='aspect-video w-screen z-10  absolute  top-0  bg-gradient-to-r from-black/70 via-black/70 to-transparent  text-white opacity-90  '>

      <div className='flex px-30 w-full py-16   flex-col gap-3 p-4'>
      <div className=' px-2  w-4/12  sm:w-2/12  '>  <img src={Image_CDN+poster_path} className=' w-8/12 border-gray-400 border shadow-2xl ' /></div>
          <h2 className=' text-lg sm:text-4xl capitalize'>{title}</h2>
        <p className=' text-sm sm:text-lg flex flex-col w-3/12 leading-[29px]  w-[300px]'>
          {overview}
        </p>

        <div className='flex flex-row gap-2 items-center'>
            <button className='py-2 sm:py-4 cursor-pointer  px-4 text-sm sm:text-lg sm:px-7 bg-gray-600 text-white rounded-lg'>play now</button>
            <button className='py-2 sm:py-4 cursor-pointer px-4 text-sm sm:text-lg sm:px-7 bg-gray-600 text-white rounded-lg'>More info</button>
            
        </div>
 
      </div>

        
    </div>
  )
}

export default VideoTitle
