import { TransformedMovie } from '@/types/movieTypes';

export interface MovieParams {
  params: {
    id: number;
  }
}

export interface RatingStarsProps {
  rating: number;
}

export interface MovieGenresProps {
  movie: TransformedMovie;
}

export interface MovieCardProps {
  movie: TransformedMovie;
}

export interface Genre {
  id: number;
  name: string;
}

export interface FilterableMovieListProps {
  movies: TransformedMovie[];
  genres: Genre[];
  selectedGenreId?: number;
  currentPage: number;
  initialQuery: string;
}

export interface MovieSearchProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface SidebarProps {
  genres: Genre[];
  selectedGenreId?: number;
  onClose: () => void;
  isOpen: boolean;
}

export interface GenreListItemProps {
  genre: { id: number; name: string };
  selectedGenreId?: number;
  onClose: () => void;
}