import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.org/posts';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ id , category, page}) => {
    const response = await axios.get(apiUrl, {
      params: {
        id: id,
        category: category,
        page: page,
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    return response.data;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    id: 1,
    category: "general",
    page: 1,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
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
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setId, setCategory, setPage } = articlesSlice.actions;

export default articlesSlice.reducer;
