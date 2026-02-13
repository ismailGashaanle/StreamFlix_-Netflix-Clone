// import React from 'react'
// import { useSelector } from 'react-redux'
// import { background_Image, Image_CDN, Logo_Header } from '../utils/constant';

// const VideoTitle = ({overview,title,MovieId,poster_path}) => {
//     const movie=useSelector(store=>store?.Movie?.Movies);

// if (!movie || movie.length === 0) return null;
 

//   return (
//     <div className='aspect-video w-screen z-10  absolute  top-0  bg-gradient-to-r from-black/70 via-black/70 to-transparent  text-white opacity-90  '>

//       <div className='flex px-30 w-full py-16   flex-col gap-3 p-4'>
//       <div className=' px-2  w-4/12  sm:w-2/12  '>  <img src={Image_CDN+poster_path} className=' w-8/12 border-gray-400 border shadow-2xl ' /></div>
//           <h2 className=' text-lg sm:text-4xl capitalize'>{title}</h2>
//         <p className=' text-sm sm:text-lg flex flex-col w-3/12 leading-[29px]  w-[300px]'>
//           {overview}
//         </p>

//         <div className='flex flex-row gap-2 items-center'>
//             <button className='py-2 sm:py-4 cursor-pointer  px-4 text-sm sm:text-lg sm:px-7 bg-gray-600 text-white rounded-lg'>play now</button>
//             <button className='py-2 sm:py-4 cursor-pointer px-4 text-sm sm:text-lg sm:px-7 bg-gray-600 text-white rounded-lg'>More info</button>
            
//         </div>
 
//       </div>

        
//     </div>
//   )
// }

// export default VideoTitle


//responsive 

import React from 'react'
import { useSelector } from 'react-redux'
import { Image_CDN } from '../utils/constant'

const VideoTitle = ({ overview, title, poster_path }) => {
  const movie = useSelector(store => store?.Movie?.Movies)
  if (!movie || movie.length === 0) return null

  return (
    <div className="absolute text-white top-0  bg-black opacity-60 w-full h-full flex flex-col justify-center p-4 sm:p-8 md:p-12">
      <div className="flex flex-col sm:flex-col items-start sm:items-start gap-4 sm:gap-8">
        <div className="w-1/2 sm:w-1/6">
          <img
            src={Image_CDN + poster_path}
            className=" w-6/12 sm:w-8/12 h-auto"
            alt={title}
          />
        </div>

        <div className="flex-1 flex flex-col gap-2 sm:gap-4">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">{title}</h2>
          <p className="text-sm sm:text-base w-8/12 sm:w-full md:text-lg leading-relaxed max-w-md">{overview}</p>

          <div className="flex flex-row gap-2 mt-2">
            <button className="px-4 py-2  bg-gray-300 text-black cursor-pointer rounded-lg sm:px-5 sm:py-3 text-sm sm:text-base rounded">
              Play
            </button>
            <button className="px-4 py-2  bg-gray-300 text-black cursor-pointer rounded-lgsm:px-5 sm:py-3 text-sm sm:text-base rounded">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle
