export interface Movie {
  id: number
  title: string
  original_language: string
  popularity: number
  vote_average: number
  vote_count: number
  release_date: string
  poster_path: string
}

export interface ParsedMoviesResponse {
  results: Movie[]
}

export interface MoviePoster {
  src: string
  alt: string
}

export interface TransformedMovie {
  key: number
  title: string
  language: string
  popularity: number
  voteAverage: number
  voteCount: number
  releaseDate: string
  poster: MoviePoster
}

export interface GetMoviesResponse {
  movies: TransformedMovie[]
}