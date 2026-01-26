

import React, { useEffect } from 'react'
import { Api_Option, Api_PopularMovie } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addMovie } from '../redux/MovieSlice'

const usePopularMovies = () => {
const disptach=useDispatch()
     useEffect(()=>{
        getPopularMovie
    },[])
    const getPopularMovie=async()=>{
        try{
            const res=await fetch(Api_PopularMovie,Api_Option);
            const data=await res.json();
            disptach(addMovie(data.results))
             
        }catch{

        }
    }
  
}

export default usePopularMovies
