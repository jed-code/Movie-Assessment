interface SearchField {
  ok: boolean | string;
  description: [];
}

interface MovieField {
  ok: boolean | string;
  error_code: number;
  description: string;
  short: {} | null | undefined;
  imdbId: string;
  top: {} | null | undefined;
  main: {} | null | undefined;
}

export interface MovieState {
  movies: SearchField[];
  searchedMovies: SearchField;
  movieDetails: MovieField | null;
  status: '' | 'loading' | 'succeeded' | 'failed' | 'error';
  error: string | null;
}
