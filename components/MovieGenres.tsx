import AdjustIcon from '@mui/icons-material/Adjust';
import { TransformedMovie } from '@/types/movieTypes';

interface MovieGenresProps {
    movie: TransformedMovie;
}

const MovieGenres = ({ movie }: MovieGenresProps) => {
    return (
        <p className="mb-10 text-rose-600 flex flex-wrap gap-4">
            {movie.genres.map((genre: string, i: number) => (
                <span key={i} className="flex items-center">
                    <AdjustIcon fontSize="small" className="mr-1" />
                    {genre}
                </span>
            ))}
        </p>
    );
};

export default MovieGenres;
