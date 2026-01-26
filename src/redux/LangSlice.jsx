import { createSlice } from "@reduxjs/toolkit";

const LangSlice=createSlice({

    name:"languages",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLanguages:(state,action)=>{
            state.lang=action.payload
        }
    }
})

export default LangSlice.reducer;
export const {changeLanguages}=LangSlice.actions