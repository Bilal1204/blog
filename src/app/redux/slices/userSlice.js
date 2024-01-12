import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    user: null,
    error:null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.status = "loading";
        },
        loginSuccess: (state, action) => {
            state.status = "idle";
            state.user = action.payload;
        },
        loginFailure: (state, action) => {
            state.status = "idle";
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        userUpdate: (state, action) => {
            console.log({action : action.payload})
            const { name, username, email } = action.payload;
            state.user = {
                name,
                username,
                email
            }
            console.log({stateUser : state.user})
        }
    },
    });

export const { loginStart, loginSuccess, loginFailure, logout, userUpdate  } = userSlice.actions;
export default userSlice.reducer;