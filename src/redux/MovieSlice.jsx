import { createSlice } from "@reduxjs/toolkit";


const MovieSlice=createSlice({

    name:"Movie",
    initialState:{
        Movies:[],
        NowPlayingFilms:[],
        popularMovies:[]
    },
    reducers:{
        addMovie:(state,action)=>{
            state.Movies=action.payload
           
        },
        AddNowPlayingMovie:(state,action)=>{
           state.NowPlayingFilms=action.payload
           state.popularMovies=action.payload
        }
    }
})

export default MovieSlice.reducer;
export const {addMovie,AddNowPlayingMovie}=MovieSlice.actions