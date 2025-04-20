const { configureStore } = require("@reduxjs/toolkit");
import { counterSlice } from "./slices/counter.slice";

const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer,
    }
});

export default store;