import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MovieState } from '../../Lib/types';

const URL = 'https://imdb.iamidiotareyoutoo.com/';

const initialState: MovieState = {
  movies: [],
  searchedMovies: {
    ok: true,
    description: [],
  },
  movieDetails: null,
  status: '',
  error: null,
};

// unfortunately I couldn't find the api to get All movies on IMDB
export const getAllMovies = createAsyncThunk('allMovies', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${URL}`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Failed to fetch movies');
  }
});

export const searchMovieByName = createAsyncThunk(
  'movieByName',
  async (movieName: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URL}search?q=${movieName}`);
      return response.data.description;
    } catch (error) {
      return rejectWithValue(`No ${movieName} movie found`);
    }
  }
);

export const getMovieById = createAsyncThunk(
  'movieDetails',
  async (movieId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URL}search?tt=${movieId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(`No movie found`);
    }
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    resetSearchedMovie: (state) => {
      state.searchedMovies = {
        ok: true,
        description: [],
      };
    },
    resetMovieDetails: (state) => {
      state.movieDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all movies
      .addCase(getAllMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
        state.error = null;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // Fetch movie by name
      .addCase(searchMovieByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchMovieByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchedMovies = action.payload;
        state.error = null;
      })
      .addCase(searchMovieByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // Fetch movie by ID
      .addCase(getMovieById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieDetails = action.payload;
        state.error = null;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { resetSearchedMovie, resetMovieDetails } = movieSlice.actions;
export default movieSlice.reducer;
