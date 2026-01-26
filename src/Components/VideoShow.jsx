// import React, { useState } from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom'

// const VideoShow = ({VideoMovieKey}) => {
//     const navigate=useNavigate();
//     const [showVid,setshowVid]=useState(true)

//     // const [searchget]=useSearchParams();
//     //   const videoKey=searchget.get("videoKey")

//       if(!VideoMovieKey) return null

//       const handleBack=()=>{
//         setshowVid(!showVid)
//       }
//   return (
//     <div className='w-12/12 px-4 '>
//         {
//             showVid &&
//               <div className='bg-black z-40 mx-4 left-2 translate-x-1/2 rounded-lg border-2 w-6/12  opacity-100 p-4  fixed top-20 '>
//          <iframe 
//     className=' w-12/12 aspect-video'
//      src={`https://www.youtube.com/embed/${VideoMovieKey}?autoplay=1`}
//      title="title" frameBorder="0" allow="accelerometer;
//       autoplay; clipboard-write; encrypted-media; 
//       gyroscope; picture-in-picture; web-share"
//      referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen>

//       </iframe>
//          <button className='p-2 rounded-lg bg-red-600 cursor-pointer  text-white ' onClick={handleBack}>Back</button>
  
//       </div>
//         }
    
          
//     </div>
//   )
// }

// export default VideoShow



// responsive
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoShow = ({ VideoMovieKey }) => {
  const navigate = useNavigate();
  const [showVid, setShowVid] = useState(true);

  if (!VideoMovieKey) return null;

  const handleBack = () => {
    setShowVid(!showVid);
  };

  return (
    <div className="w-full px-4">
      {showVid && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-black rounded-lg border-2 p-2 md:p-4 w-full max-w-screen-md">
          <iframe
            className="w-full aspect-video rounded-md"
            src={`https://www.youtube.com/embed/${VideoMovieKey}?autoplay=1`}
            title="video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <button
            className="mt-2 w-full md:w-auto cursor-pointer px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoShow;



  