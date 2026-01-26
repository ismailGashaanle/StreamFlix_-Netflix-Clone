import { createSlice } from "@reduxjs/toolkit";

 

const GptSearchSlice=createSlice({

    name:"GptSlice",
    initialState:{
        Gptsearch:false
    },
    reducers:{
        addGptsearch:(state)=>{
            state.Gptsearch = !state.Gptsearch
        }
    }
})

export default GptSearchSlice.reducer;
export const {addGptsearch}=GptSearchSlice.actions