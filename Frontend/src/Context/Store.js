import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";


const store = configureStore({
    reducer: {
        // Add reducers here
        users : UserSlice,
        
    },
    
});

export default store;