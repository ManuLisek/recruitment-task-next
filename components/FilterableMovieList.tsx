"use client";

import Link from 'next/link';
import MovieCard from './MovieCard';
import { TransformedMovie, Genre } from '@/types/movieTypes';
import AdjustIcon from '@mui/icons-material/Adjust';

interface FilterableMovieListProps {
    movies: TransformedMovie[];
    genres: Genre[];
    selectedGenreId?: number;
}

const FilterableMovieList = ({ movies, genres, selectedGenreId }: FilterableMovieListProps) => {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4">
                <h2 className="text-xl font-bold mb-4">Genres</h2>
                <ul className="space-y-2">
                    <li>
                        <Link href="/" className={`block ${!selectedGenreId ? "text-rose-600" : "text-sky-800"}`}>
                            All
                        </Link>
                    </li>
                    {genres.map((genre) => (
                        <li key={genre.id}>
                            <Link
                                href={`/?genre=${genre.id}`}
                                className={`block ${selectedGenreId === genre.id ? "text-rose-600" : "text-sky-800"}`}
                            >

                                <span className="flex items-center">
                                    <AdjustIcon fontSize="small" className="mr-1" />
                                    {genre.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className="md:w-3/4">
                <ul className="flex flex-wrap gap-4 list-none p-0">
                    {movies.map((movie) => (
                        <MovieCard key={movie.key} movie={movie} />
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default FilterableMovieList;
