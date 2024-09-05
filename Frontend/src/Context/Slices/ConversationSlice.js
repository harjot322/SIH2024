import { createSlice } from '@reduxjs/toolkit';

const conversationSlice = createSlice({
    name: 'conversation',
    initialState: {
        messages: [],
        selectedConversation: null,
        getMessageTrigger: false,
        
    },
    reducers: {
        setConversations: (state, action) => {
            state.messages = action.payload;
        },
        setSelectedConversation: (state, action) => {
            state.selectedConversation = action.payload;
            
        },
        addMessage: (state, action) => {
            state.messages = [...state.messages, action.payload];
        },
        setTrigger: state => {
            state.getMessageTrigger = !state.getMessageTrigger;
        },
        
    },
});


export const {setTrigger} = conversationSlice.actions;
export const {setConversations, setSelectedConversation, addMessage} = conversationSlice.actions;

export default conversationSlice.reducer; 