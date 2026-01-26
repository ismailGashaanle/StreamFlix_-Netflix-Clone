import { createSlice } from "@reduxjs/toolkit";



const TrailerSlice=createSlice({

    name:"trailer",
    initialState:{
        trailerMovies:[]
    },
    reducers:{
        addTrailerMove:(state,action)=>{
           state.trailerMovies=action.payload
        }
    }
})

export default TrailerSlice.reducer;
export const {addTrailerMove}=TrailerSlice.actions