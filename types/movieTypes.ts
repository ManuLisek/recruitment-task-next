export interface ParsedMovieResponse {
  id: number;
  title: string;
  original_language: string;
  popularity: number;
  vote_average: string;
  vote_count: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genres: {
    id: number;
    name: string
  }[];
}

export interface TransformedMovie {
  key: number;
  title: string;
  language: string;
  popularity: number;
  voteAverage: string;
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
  overview: string;
  genres: string[];
}

export interface GetMoviesResponse {
  movies: TransformedMovie[];
}

export interface GetMovieResponse {
  movie: TransformedMovie;
}
