import { createSlice } from "@reduxjs/toolkit";

const userSlcie=createSlice({

    name:"user",
    initialState:{
        userData:null
    },
    reducers:{
        AddUser:(state,action)=>{
            state.userData=action.payload
        },

        RemoveUser:(state,action)=>{
            state.userData=null
        }
    }
})

export default userSlcie.reducer;
export const {AddUser,RemoveUser}=userSlcie.actions;