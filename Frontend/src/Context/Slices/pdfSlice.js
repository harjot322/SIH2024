import { createSlice } from "@reduxjs/toolkit";

const pdfSlice = createSlice({
    name: 'pdf',
    initialState: {
        pdf: null,
        pdfTrigger: false,
    },
    reducers: {
        setPdf: (state, action) => {
            state.pdf = action.payload;
        },
        setPdfTrigger: state => {
            state.pdfTrigger = !state.pdfTrigger;
        },
    },

});

export const { setPdf, setPdfTrigger } = pdfSlice.actions;

export default pdfSlice.reducer;

