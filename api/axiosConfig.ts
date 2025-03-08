import axios from 'axios';
import { GetMovieResponse, GetMoviesResponse, ParsedMovieResponse, TransformedMovie } from '@/types/movieTypes';
import { GetActorsResponse, ParsedActor, TransformedActor } from '@/types/actorTypes';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_SIZE_300 = 'w300';
const IMAGE_SIZE_500 = 'w500';

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
          const transformedMovies: TransformedMovie[] = parsedResponse.results.map(
            (movie: ParsedMovieResponse) => ({
              key: movie.id,
              title: movie.title,
              language: movie.original_language,
              popularity: movie.popularity,
              voteAverage: movie.vote_average,
              voteCount: movie.vote_count,
              releaseDate: movie.release_date,
              poster: {
                src: `${IMAGE_BASE_URL}${IMAGE_SIZE_300}${movie.poster_path}`,
                alt: movie.title,
              },
            })
          );
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
            voteAverage: parsedResponse.vote_average.toString().slice(0, 3),
            voteCount: parsedResponse.vote_count,
            releaseDate: parsedResponse.release_date,
            poster: {
              src: `${IMAGE_BASE_URL}${IMAGE_SIZE_500}${parsedResponse.poster_path}`,
              alt: parsedResponse.title,
            },
            backdrop: {
              src: `${IMAGE_BASE_URL}${IMAGE_SIZE_500}${parsedResponse.backdrop_path}`,
              alt: parsedResponse.title,
            },
            overview: parsedResponse.overview,
            genres: parsedResponse.genres.map((genre: { id: number; name: string }) => genre.name),
          };
          return { movie: transformedMovie };
        },
      ],
    }),

  getActors: (id: number) =>
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}/credits`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      transformResponse: [
        (response: string): GetActorsResponse => {
          const parsedResponse = JSON.parse(response);
          const transformedActors: TransformedActor[] = parsedResponse.cast
            .slice(0, 8)
            .map((actor: ParsedActor) => ({
              id: actor.id,
              name: actor.name,
              character: actor.character,
              profile: {
                src: actor.profile_path
                  ? `${IMAGE_BASE_URL}${IMAGE_SIZE_300}${actor.profile_path}`
                  : actor.gender === 1
                    ? '/woman-placeholder.jpg'
                    : '/man-placeholder.jpg',
                alt: actor.name,
              },
            }));
          return { actors: transformedActors };
        },
      ],
    }),
};
