import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import conversationSlice from "./Slices/ConversationSlice";


const store = configureStore({
    reducer: {
        // Add reducers here
        users : UserSlice,
        conversation :  conversationSlice,
        
    },
    
});

export default store;