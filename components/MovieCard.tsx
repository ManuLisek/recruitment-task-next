"use client";

import Link from 'next/link';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material';
import RatingStars from '@/components/RatingStars';
import { MovieCardProps } from '@/types/componentTypes';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

const MovieCard = ({ movie }: MovieCardProps) => {
    const hasImage = !movie.poster.src.includes('w300null');

    return (
        <Box component="li" sx={{ flexGrow: 1, maxWidth: '226px' }}>
            <Link href={`/movie/${movie.key}`} passHref style={{ width: '100%', textDecoration: 'none' }}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardActionArea sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'flex-end' }}>
                        {hasImage ? (
                            <CardMedia
                                component="img"
                                image={movie.poster.src}
                                alt={movie.poster.alt}
                            />
                        ) : (
                            <Box sx={{
                                width: '226px',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'grey.300'
                            }}>
                                <BrokenImageIcon sx={{ fontSize: 64, color: 'grey.500' }} />
                            </Box>
                        )}
                        <CardContent sx={{
                            textAlign: 'center',
                            height: '120px',
                            minHeight: '120px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start'
                        }}>
                            <RatingStars rating={movie.voteAverage} />
                            <Typography variant="subtitle1" component="div">
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
