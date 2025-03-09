import Link from "next/link";
import AdjustIcon from '@mui/icons-material/Adjust';
import { GenreListItemProps } from "@/types/componentTypes";

const GenreListItem = ({ genre, selectedGenreId, onClose }: GenreListItemProps) => {
  return (
    <li>
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
  );
};

export default GenreListItem;