import React from 'react'
import { Logo_Header, SUPPPORT_LANGAUGES } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import {auth} from '../utils/firebase'
  import {signOut } from "firebase/auth";
import { RemoveUser } from '../redux/userSlice';
import { addGptsearch } from '../redux/GptSearchSlice';
import { changeLanguages } from '../redux/LangSlice';
import GptSearch from './GptSearch';
const Header = () => {
const user=useSelector(store=>store.user?.userData)
const ShowGptSearch=useSelector(store=>store?.GptSlice?.Gptsearch)
  const dispatch=useDispatch();
  

   
  const handleChangeLang=((e)=>{
   //   console.log("values",e.target.value)

    dispatch(changeLanguages(e.target.value))
  })
 
 
    const handleGptBtn=()=>{
      dispatch(addGptsearch())
           
    }

  const handleLogout=()=>{
  
signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(RemoveUser());

}).catch((error) => {
  // An error happened.
});
  }
  
  return (
   
 
 <div className='flex justify-between items-center gap-2 w-screen bg-black opacity-95 rounded-sm  sticky top-0 z-50  '>
      <img
   className='w-20 h-20 '
   src={Logo_Header}
   
   /> 
  


  <div className='flex items-center gap-2 px-2'>

    {
  user?.photoURL &&
  <img  className='w-16 rounded-full p-2' src={user?.photoURL} />
 }

 
   {user?.displayName && (
  <span className="text-lg text-white bg-red-600 p-4 rounded-full">
    {user.displayName}
  </span>
)}
 
 {user!=null?(
<div className='flex gap-2 items-center'>
    <button className='cursor-pointer bg-purple-600 text-white p-2 rounded-lg'
    onClick={handleGptBtn}
    > {ShowGptSearch? "Homepage":"GPT Search"}  </button>
   

   {
    ShowGptSearch && <div>
      <select className='flex flex-col gap-2 bg-gray-600 p-3 rounded-lg text-white' onChange={handleChangeLang}>
        
         {
          SUPPPORT_LANGAUGES.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          ))
         }
      </select>
    </div>
   }



   <button className=' cursor-pointer mx-2 bg-red-600 text-white p-2 rounded-full'
 onClick={handleLogout}
 >Logout</button>
</div>
 ):null}
  </div>
 </div>

  )
}

export default Header
