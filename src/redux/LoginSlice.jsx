import { createSlice } from "@reduxjs/toolkit";


const LoginSlice=createSlice({

    name:"logSlice",
    initialState:{
        checkLog:false
    },

    reducers:{
        checkSiced:(state,action)=>{
            state.checkLog=!state.checkLog
        }
    }

})


export default LoginSlice.reducer
export const {checkSiced}=LoginSlice.actions