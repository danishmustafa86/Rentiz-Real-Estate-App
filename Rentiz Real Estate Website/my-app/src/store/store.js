import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter.slice";
import { postsSlice } from "./slices/posts.slice";
import { userSlice } from "./slices/user.slice";
// import { objectsSlice } from "./slices/objects.slice";

const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer,
        userSlice: userSlice.reducer,
        postsSlice: postsSlice.reducer,
        // obectsSlice: objectsSlice.reducer,
    }
});

export default store;