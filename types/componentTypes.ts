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