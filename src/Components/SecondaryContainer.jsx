
import React from 'react'
import MovieList from './MovieList'
import usePopularMovies from '../hooks/usePopularMovies'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies=useSelector(store=>store?.Movie?.Movies)
        const moviesVideo=useSelector(store=>store?.Movie?.NowPlayingFilms)
  //console.log("films",movies)
     const VideoMovieKey=moviesVideo.map(VideoKey=>VideoKey.key)
  console.log("VideoMovieKey",VideoMovieKey)

 usePopularMovies()
     
  return (
    <div className='bg-opacity-85 z-30 bg-black bg-transparent-t  py-6 mt-16'>

        <MovieList title={"now playing Movie"} movies={movies} VideoMovieKey={VideoMovieKey} />
        <MovieList title={"now playing Movie"} movies={movies} VideoMovieKey={VideoMovieKey} />
        <MovieList title={"now playing Movie"} movies={movies} VideoMovieKey={VideoMovieKey} />
        <MovieList title={"now playing Movie"} movies={movies} VideoMovieKey={VideoMovieKey} />

       
    </div>
  )
}

export default SecondaryContainer

 