export interface ParsedMovieResponse {
  id: number;
  title: string;
  original_language: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

export interface TransformedMovie {
  key: number;
  title: string;
  language: string;
  popularity: number;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  poster: {
    src: string;
    alt: string;
  };
  backdrop?: {
    src: string;
    alt: string;
  };
  overview?: string;
}

export interface GetMoviesResponse {
  movies: TransformedMovie[];
}

export interface GetMovieResponse {
  movie: TransformedMovie;
}