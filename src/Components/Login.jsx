import React, { useEffect, useRef, useState } from 'react'
import { background_Image } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { checkSiced } from '../redux/LoginSlice'
import { CheckValidate } from '../utils/Validate'
import { AddUser } from '../redux/userSlice'
import { retry } from '@reduxjs/toolkit/query'
   import {createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
   import {auth} from '../utils/firebase'
   


const Login = () => {

  const [errorMessage,seterrorMessage]=useState("");
  const checkLogin=useSelector(store=>store?.checkLog.checkLog)
  const dispatch=useDispatch();

  const email=useRef(null);
  const password=useRef(null);
  const confirmpassword=useRef(null);
  const Name=useRef(null);
 
 
   const OnhandleLogin=()=>{
    dispatch(checkSiced());
   }


   const handleform=()=>{
      const message = checkLogin?(
        CheckValidate(email.current.value,password.current.value,Name.current.value,confirmpassword.current.value)
      ):(
        CheckValidate(email.current.value,password.current.value)
      )
     console.log(message)
 
      if(message)  {
        // alert("message",message)
        seterrorMessage(message)
        return
      }

     if(checkLogin){


   


createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then(async(userCredential)  => {
    // Signed up 
    const user = userCredential.user;
    // ...
  
 
 //updateProfile(auth.currentUser,
await updateProfile(auth.currentUser, {
  displayName: Name.current.value,
  photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisHjUx74fJG6ea1JLfNqcCwlVirhu3hAScg&s"
}).then(() => {
  // Profile updated!
// dispatch(AddUser({
//             uid: userCredential.user.uid,
//             email: userCredential.user.email,
//             displayName: Name.current.value,
//             photoURL: auth.currentUser.photoURL
//           }));
  // ...
}).catch((error) => {
  // An error occurred
  // ...
  seterrorMessage(error)
});

  })
  .catch((error) => {
    const errorCode = error.code;
      seterrorMessage(errorCode,"-"+errorMessage)
    const errorMessage = error.message;
       seterrorMessage(errorCode,"-"+errorMessage)
    // ..
  });
      //  dispatch(AddUser({
      // email: email.current.value,
      //  password:password.current.value,
      //  }))
     }
     else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorMessage)
  });
     }
  
   }
   
 

  return (
    <div>

        <div className=''>
 <img src={background_Image}
w-screen h-screen bg-cover bg-center
  />

<div className='relative'>
   <div className='bg-black opacity-90 p-4 rounded-lg text-white sm:w-screen md:w-5/12 absolute top-0 -mt-[680px] left-[32%] h-auto '>
   <form onSubmit={(e)=>e.preventDefault()}  className='flex flex-col gap-2'>
    <span className='px-2 text-3xl mb-2 mt-2 capitalize font-bold'>{checkLogin?"sign up now":"sign in"}</span>
   
   {checkLogin &&
   <div className='flex flex-col p-2 gap-2'>
   <label className='text-lg'>Name</label>
    <input ref={Name} className='bg-gray-900 p-2 py-3' placeholder='Enter Name' />
</div>
   }
<div className='flex flex-col p-2 gap-2'>
   <label className='text-lg'>Email</label>
    <input ref={email} className='bg-gray-900 p-2 py-3' placeholder='Enter email' />
</div>
<div className='flex flex-col p-2 gap-2'>
   <label className='text-lg'>password</label>
    <input ref={password} placeholder='*******' className='bg-gray-900 p-2 py-3' type='password' />
</div>

{checkLogin&& <div className='flex flex-col p-2 gap-2'>
   <label className='text-lg'>confirm password</label>
    <input ref={confirmpassword} placeholder='*******' className='bg-gray-900 p-2 py-3' type='password' />
</div>}

<span className='text-red-600 px-2 text-lg capitalize'>{errorMessage}</span>
     
<button className='p-2 py-3 cursor-pointer bg-red-500 text-white rounded-lg'
onClick={handleform}

> {checkLogin?"Sign Up now":"sign in"} </button>

<p>
<span>  Al ready user exit</span>

 <span className='mx-2 cursor-pointer text-lg'
 onClick={OnhandleLogin}
 > {checkLogin?"sign in":"Sign up now"} </span>
</p>
  </form>
 
 </div>
</div>
        </div>
    </div>
  )
}

export default Login
