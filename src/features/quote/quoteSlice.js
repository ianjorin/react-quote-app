import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchQuote} from '../quote/quoteApi';
import axios from 'axios';

const initialState = {
    status:'idle',
    text:"If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author:"Oprah Winfrey"
 }

 export const getQuoteAsync = createAsyncThunk(
    'quote/fetchQuote',
    async (category) => {
        const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=' + category

        const config = {
            headers: {
              'X-Api-Key': "TqGUsuD0iZixed/3/t4xSw==pP0lXiQ9uLs0TEVr"
            },
          }
        
          const response =  await axios.get(API_URL, config)
        
          console.log(response.data[0])
          return response.data[0]
    }
  );

 export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      reset: (state) => initialState
      
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
      builder
        .addCase(getQuoteAsync.pending, (state) => {
          console.log('loading')
          state.status = 'loading';
        })
        .addCase(getQuoteAsync.fulfilled, (state, action) => {
          console.log('fulfilled')
          state.status = 'idle';
          state.text = action.payload.quote;
          state.author = action.payload.author;
        });
    },
  });

  export default quoteSlice.reducer;

 