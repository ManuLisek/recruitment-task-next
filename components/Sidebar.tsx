"use client";

import Link from "next/link";
import { SidebarProps } from "@/types/componentTypes";
import GenreListItem from "./GenreListItem";

const Sidebar = ({ genres, selectedGenreId, onClose, isOpen }: SidebarProps) => {
  return (
    <aside
      className={`
            fixed inset-y-0 left-0 z-20 w-3/4 p-4 bg-zinc-900 shadow transform transition-transform duration-300 ease-in-out 
            ${isOpen ? "translate-x-0" : "-translate-x-full"} md:static md:w-1/4 md:translate-x-0 md:bg-transparent md:shadow-none
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
          <GenreListItem key={genre.id} genre={genre} selectedGenreId={selectedGenreId} onClose={onClose} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
