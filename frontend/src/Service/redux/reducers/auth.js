import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name: "auth",
    initialState: {token: localStorage.getItem('token') ||null, userId: localStorage.getItem('userId') ||null, isLoggedIn: localStorage.getItem('token') ? true : false },
    reducers:{
        setLogin:(state,action)=>{
            state.token=action.payload;
            state.isLoggedIn = true;
      localStorage.setItem('token', action.payload);
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
            localStorage.setItem('userId', action.payload);
            console.log(state.userId);
          },
          setLogout: (state, action) => {
            console.log(action.payload);
            state.token = null;
            state.userId = null;
            state.isLoggedIn = false;
            localStorage.removeItem('token');
            localStorage.removeItem('userId')
          },
    }
})
export const {setLogin,setLogout,setUserId}= authSlice.actions;
export default authSlice.reducer;