// src/features/articlesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/everything?q=tesla&from=2024-05-27&sortBy=publishedAt&apiKey=0517cde1b9f745c185d36e15fea5ada7';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ page }, { rejectWithValue }) => {
    try {
      const pageSize = 20; // Define how many articles per page
      const response = await axios.get(API_URL, {
        params: {
          page,
          pageSize,
        },
      });
      return {
        articles: response.data.articles,
        totalResults: response.data.totalResults,
        pageSize,
      };
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    page: 1,
    totalPages: 0,
  },
  reducers: {
    setPage: (state, action) => {
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
        state.articles = action.payload.articles;
        state.totalPages = Math.ceil(action.payload.totalResults / action.payload.pageSize);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export const { setPage } = articlesSlice.actions;

export default articlesSlice.reducer;
