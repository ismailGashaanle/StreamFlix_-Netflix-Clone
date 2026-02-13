import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies,VideoMovieKey}) => {

   
  return (

    <>
     <div className='py-6   '>
        <h1 className=' text-lg sm:text-3xl text-white'>{title}</h1>

        <div className='flex mt-10  overflow-x-scroll   w-screen gap-4' >
            
            {
                movies.map((movie,index)=>(

                     <div className='flex-shrink-0' key={movie.id}>
                         <MovieCard  poster_path={movie.poster_path} VideoMovieKey={VideoMovieKey[index]}   />
                     </div>
                ))
            }
            
        </div>
      
    </div>


    
    </>
   
    
  )
}

export default MovieList 
 