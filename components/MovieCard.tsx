"use client";

import Link from 'next/link';
import {
    Card, CardActionArea, CardMedia, CardContent, Typography, Box,
} from '@mui/material';
import RatingStars from '@/components/RatingStars';
import { MovieCardProps } from '@/types/componentTypes';

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <Box
            component="li"
            sx={{
                flexGrow: 1, maxWidth: '226px'
            }}
        >
            <Link href={`/movie/${movie.key}`} passHref style={{ width: '100%', textDecoration: 'none' }}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardActionArea sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, }}>
                        <CardMedia
                            component="img"
                            image={movie.poster.src}
                            alt={movie.poster.alt}
                            sx={{}}
                        />
                        <CardContent sx={{ textAlign: 'center', height: '120px' }}>
                            <RatingStars rating={movie.voteAverage} />
                            <Typography variant="h6" component="div">
                                {movie.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Box >
    );
};

export default MovieCard;