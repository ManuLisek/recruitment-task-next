
"use server";

import axiosConfig from '../api/axiosConfig';
import FilterableMovieList from '@/components/FilterableMovieList';
import { TransformedMovie, Genre } from '@/types/movieTypes';

export default async function Home({ searchParams }: { searchParams: { genre?: string, page?: string, query?: string } }) {
  const selectedGenreId = searchParams.genre ? Number(searchParams.genre) : undefined;
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;
  const query = searchParams.query ? searchParams.query : undefined;

  const moviesResponse = await axiosConfig.getMoviesData(
    selectedGenreId ? [selectedGenreId] : undefined,
    currentPage,
    query
  );
  const genresResponse = await axiosConfig.getGenres();
  const movies: TransformedMovie[] = moviesResponse.data.movies;
  const genres: Genre[] = genresResponse.data.genres;

  return (
    <div className="container mx-auto p-4">
      <FilterableMovieList
        movies={movies}
        genres={genres}
        selectedGenreId={selectedGenreId}
        currentPage={currentPage}
        initialQuery={query || ""}
      />
    </div>
  );
}
