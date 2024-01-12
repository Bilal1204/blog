import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    blogs : []
}

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.blogs = action.payload
        }
    },
    });

export const { addBlog } = blogSlice.actions;
export default blogSlice.reducer;