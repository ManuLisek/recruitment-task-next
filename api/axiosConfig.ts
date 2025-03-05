import axios from 'axios';
import { GetMoviesResponse, ParsedMoviesResponse, TransformedMovie } from '@/types/movieTypes';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/discover/movie',
});
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_SIZE = 'w300';

export default {
  getMoviesData: () =>
    instance({
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      transformResponse: [
        (response): GetMoviesResponse => {
          const parsedResponse: ParsedMoviesResponse = JSON.parse(response);
          const transformedMovies: TransformedMovie[] = parsedResponse.results.map(
            (movie) => ({
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
            }),
          );
          return { movies: transformedMovies };
        },
      ],
    })
};
