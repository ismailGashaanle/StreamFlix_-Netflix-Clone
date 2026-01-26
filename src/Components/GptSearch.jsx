import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggetionMovies from './GptSuggetionMovies'
import Lang from '../utils/Lang'
import { useSelector } from 'react-redux'

const GptSearch = () => {
    // const langKey=useSelector(store=>store?.languages?.lang)
    const langKey=useSelector(store=>store?.languages?.lang)  ;
    console.log("langKey",langKey)

  return (
    <div className='py-4'>
    

      <div>
 
 <div className='flex items-center justify-center px-2 rounded-lg py-5'>
    <form onSubmit={(e)=>e.preventDefault()} className='bg-black p-6 grid grid-cols-9 items-center w-6/12  '>
     
        <input  className='py-4 p-2 col-span-7 rounded-lg border-2 bg-white text-black' placeholder={Lang[langKey].GptSearchPlaceHolder} />
        <button className='p-4 mx-2 cursor-pointer px-6 text-center col-span-2 rounded-lg bg-red-500 text-white'>{Lang[langKey].search}</button>
    </form>
 </div>


   {/* <GptSearchBar/>
   <GptSuggetionMovies/> */}
      </div>
    </div>
  )
}

export default GptSearch
