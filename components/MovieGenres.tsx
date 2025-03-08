import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react';

import { MovieGenresProps } from '@/types/componentTypes';

const MovieGenres: React.FC<MovieGenresProps> = ({ movie }) => {
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
