import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        login(state, action){
            return  state = action.payload 
        },
        logout(state){            
            return state = {};
        },
        reset(state) {
            return state = state
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
