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