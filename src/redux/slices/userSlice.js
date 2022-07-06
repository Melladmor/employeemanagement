import { createSlice } from "@reduxjs/toolkit";



export const  userSlice = createSlice({
    name:'user',

    initialState:{
        userData:{
            name:"",
            email:""
        },
        loading:null,
    },

    reducers:{
        startUser:(state)=>{
            state.loading =true;
        },
        adduser:(state , action )=>{
            state.userData = action.payload;
            state.loading = false;
        }
    }
});

export const {adduser ,startUser} = userSlice.actions

export default userSlice.reducer