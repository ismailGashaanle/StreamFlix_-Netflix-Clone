import { configureStore } from "@reduxjs/toolkit";

import logReducer from './LoginSlice'
import userReducer from './userSlice'
import MoveiReducer from './MovieSlice'
import TrailerReducer from './TrailerSlice'
import GptSearchReducer from './GptSearchSlice'
import LangReducer from './LangSlice'
const AppStore=configureStore({
    reducer:{
      checkLog:logReducer,
      user:userReducer,
      Movie:MoveiReducer,
      trailer:TrailerReducer,
     GptSlice :GptSearchReducer,
     languages:LangReducer

    }
})

export default AppStore