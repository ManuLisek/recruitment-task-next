import axios from 'axios';
import {
  GetMovieResponse,
  GetMoviesResponse,
  ParsedMovieResponse,
  TransformedMovie,
} from '@/types/movieTypes';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_SIZE = 'w300';

export default {
  getMoviesData: () =>
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      transformResponse: [
        (response: string): GetMoviesResponse => {
          const parsedResponse = JSON.parse(response);
          const transformedMovies: TransformedMovie[] = parsedResponse.results.map((movie: ParsedMovieResponse) => ({
            key: movie.id,
            title: movie.title,
            language: movie.original_language,
            popularity: movie.popularity,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
            releaseDate: movie.release_date,
            poster: {
              src: `${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`,
              alt: movie.title,
            },
          }));
          return { movies: transformedMovies };
        },
      ],
    }),

  getMovieData: (id: number) =>
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      transformResponse: [
        (response: string): GetMovieResponse => {
          const parsedResponse = JSON.parse(response) as ParsedMovieResponse;
          const transformedMovie: TransformedMovie = {
            key: parsedResponse.id,
            title: parsedResponse.title,
            language: parsedResponse.original_language,
            popularity: parsedResponse.popularity,
            voteAverage: parsedResponse.vote_average,
            voteCount: parsedResponse.vote_count,
            releaseDate: parsedResponse.release_date,
            poster: {
              src: `${IMAGE_BASE_URL}${IMAGE_SIZE}${parsedResponse.poster_path}`,
              alt: parsedResponse.title,
            },
            backdrop: {
              src: `${IMAGE_BASE_URL}${IMAGE_SIZE}${parsedResponse.backdrop_path}`,
              alt: parsedResponse.title,
            },
            overview: parsedResponse.overview,
          };
          return { movie: transformedMovie };
        },
      ],
    }),
};
