"use client";

import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import AdjustIcon from '@mui/icons-material/Adjust';
import Pagination from '@mui/material/Pagination';
import { useRouter } from "next/navigation";
import { TransformedMovie, Genre } from "@/types/movieTypes";
import MovieCard from "./MovieCard";

interface FilterableMovieListProps {
  movies: TransformedMovie[];
  genres: Genre[];
  selectedGenreId?: number;
  currentPage: number;
}

const FilterableMovieList = ({ movies, genres, selectedGenreId, currentPage }: FilterableMovieListProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const genreParam = selectedGenreId ? `&genre=${selectedGenreId}` : "";
    router.push(`/?page=${page}${genreParam}`);
  };

  return (
    <>
      <div className="flex justify-center md:hidden mb-4">
        <button onClick={() => setIsSidebarOpen((prev) => !prev)} className="p-2 border rounded flex items-center gap-2">
          <MenuIcon fontSize="small" />
          Genres
        </button>
      </div>
      <div className="relative flex md:flex-row gap-8">
        <aside
          className={`
            fixed inset-y-0 left-0 z-20 w-3/4 p-4 bg-zinc-900 shadow transform transition-transform duration-300 ease-in-out 
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:static md:w-1/4 md:translate-x-0 md:bg-transparent md:shadow-none
          `}
        >
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
                  onClick={() => setIsSidebarOpen(false)}
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
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <section className="w-full lg:w-3/4 md:ml-auto">
          <ul className="flex justify-center flex-wrap gap-4 list-none p-0">
            {movies.map((movie) => (
              <MovieCard key={movie.key} movie={movie} />
            ))}
          </ul>
          <div className="flex justify-center mt-6">
            <Pagination
              count={100}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              siblingCount={1}
              boundaryCount={1}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default FilterableMovieList;
