"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import Pagination from "@mui/material/Pagination";
import MovieCard from "./MovieCard";
import MovieSearch from "./MovieSearch";
import Sidebar from "./Sidebar";
import { FilterableMovieListProps } from "@/types/componentTypes";

const FilterableMovieList = ({ movies, genres, selectedGenreId, currentPage, initialQuery }: FilterableMovieListProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(initialQuery);
  const router = useRouter();

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const genreParam = selectedGenreId ? `&genre=${selectedGenreId}` : "";
    const queryParam = searchInput ? `&query=${encodeURIComponent(searchInput)}` : "";
    router.push(`/?page=1${genreParam}${queryParam}`);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const genreParam = selectedGenreId ? `&genre=${selectedGenreId}` : "";
    const queryParam = searchInput ? `&query=${encodeURIComponent(searchInput)}` : "";
    router.push(`/?page=${page}${genreParam}${queryParam}`);
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
        <Sidebar
          genres={genres}
          selectedGenreId={selectedGenreId}
          onClose={() => setIsSidebarOpen(false)}
          isOpen={isSidebarOpen}
        />
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
        )}
        <section className="w-full lg:w-3/4 md:ml-auto">
          <div className="w-full mx-auto mb-10 sm:w-80">
            <MovieSearch searchInput={searchInput} setSearchInput={setSearchInput} handleSearchSubmit={handleSearchSubmit}
            />
          </div>
          <ul className="flex justify-center flex-wrap gap-4 list-none p-0">
            {movies.map((movie) => (
              <MovieCard key={movie.key} movie={movie} />
            ))}
          </ul>
          {!searchInput && (
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
          )}
        </section>
      </div>
    </>
  );
};

export default FilterableMovieList;
