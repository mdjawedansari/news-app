// src/features/articlesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '0517cde1b9f745c185d36e15fea5ada7';
 // Replace with your actual API key 8941a0c4c9ec483091c5ea55abd281b3

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page }) => {
    const response = await axios.get(API_URL, {
      params: {
        category,
        page,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: 'general',
    page: 1,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage } = articlesSlice.actions;

export default articlesSlice.reducer;
