import Link from 'next/link';
import AdjustIcon from '@mui/icons-material/Adjust';
import { MovieGenresProps } from '@/types/componentTypes';

const MovieGenres = ({ movie }: MovieGenresProps) => {
    return (
        <p className="mb-10 text-rose-600 flex flex-wrap gap-4">
            {movie.genres.map((genre: { id: number; name: string }) => (
                <Link key={genre.id} href={`/?genre=${genre.id}`}>
                    <span className="flex items-center cursor-pointer">
                        <AdjustIcon fontSize="small" className="mr-1" />
                        {genre.name}
                    </span>
                </Link>
            ))}
        </p>
    );
};

export default MovieGenres;
