import axiosConfig from '../api/axiosConfig';
import FilterableMovieList from '@/components/FilterableMovieList';
import { TransformedMovie, Genre } from '@/types/movieTypes';

export default async function Home({ searchParams }: { searchParams: { genre?: string } }) {
  const selectedGenreId = searchParams.genre ? Number(searchParams.genre) : undefined;
  const moviesResponse = await axiosConfig.getMoviesData(selectedGenreId ? [selectedGenreId] : undefined);
  const genresResponse = await axiosConfig.getGenres();
  const movies: TransformedMovie[] = moviesResponse.data.movies;
  const genres: Genre[] = genresResponse.data.genres;

  return (
    <div className="container mx-auto p-4">
      <FilterableMovieList movies={movies} genres={genres} selectedGenreId={selectedGenreId} />
    </div>
  );
}
