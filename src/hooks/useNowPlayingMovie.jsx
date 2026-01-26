import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Api_Option, NowPlayingMovie } from '../utils/constant';
import { addMovie } from '../redux/MovieSlice';




const useNowPlayingMovie = () => {
 
    const movie=useSelector(store=>store?.Movie?.Movies)
const dispatch=useDispatch();
 
useEffect(()=>{

GetMovies();
 

},[])


const GetMovies= async()=>{
  try{
    const api=await fetch(NowPlayingMovie,Api_Option);
    const data=await api.json();
    // console.log(data.results);
    dispatch(addMovie(data.results));

  }catch{

  }

}



}

export default useNowPlayingMovie
