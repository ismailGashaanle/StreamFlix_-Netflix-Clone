import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet,RouterProvider,createBrowserRouter, useNavigate } from 'react-router-dom'

  import {  onAuthStateChanged } from "firebase/auth";
  import {auth} from '../utils/firebase'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, RemoveUser } from '../redux/userSlice';
const Body = () => {
const dispatch=useDispatch();
const user=useSelector(store=>store.user)
const navigate=useNavigate();


 
useEffect(()=>{

  const unsubscribe =onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user

    // const uid = user.uid;
   dispatch(AddUser({
               uid: user.uid,
               email:user.email,
               displayName: user.displayName,
               photoURL: user.photoURL
             }));

    navigate("/browser")

    
     
    // ...
  } else {
    // User is signed out
    dispatch(RemoveUser());
     navigate("/")

    // ...
  }
  
});
return ()=> unsubscribe();
},[])
 
 
 

    
  return (
    <div>
     <Header/>
 
    </div>
  )
}

export default Body
 