export interface ParsedMovieResponse {
  id: number;
  title: string;
  original_language: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  genre_ids: number[];
  genres: { id: number; name: string }[];
}

export interface TransformedMovie {
  key: number;
  title: string;
  language: string;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  poster: {
    src: string;
    alt: string;
  };
  overview: string;
  genres: { id: number; name: string }[];
}

export interface GetMoviesResponse {
  movies: TransformedMovie[];
}

export interface GetMovieResponse {
  movie: TransformedMovie;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GetGenresResponse {
  genres: Genre[];
}
