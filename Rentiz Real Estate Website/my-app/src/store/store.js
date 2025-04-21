const { configureStore } = require("@reduxjs/toolkit");
import { counterSlice } from "./slices/counter.slice";
import { postsSlice } from "./slices/posts.slice";
import { userSlice } from "./slices/user.slice";

const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer,
        userSlice: userSlice.reducer,
        postsSlice: postsSlice.reducer,
    }
});

export default store;