"use client";

import Link from "next/link";
import AdjustIcon from '@mui/icons-material/Adjust';
import { SidebarProps } from "@/types/componentTypes";

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
          <li key={genre.id}>
            <Link
              href={`/?genre=${genre.id}`}
              className={`block ${selectedGenreId === genre.id ? "text-rose-600" : "text-sky-800"}`}
              onClick={onClose}
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
  );
};

export default Sidebar;
