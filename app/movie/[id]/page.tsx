"use server";

import axiosConfig from '../../../api/axiosConfig';
import { MovieParams } from '@/types/componentTypes';
import RatingStars from '@/components/RatingStars';
import MovieGenres from '@/components/MovieGenres';

export default async function MoviePage({ params }: MovieParams) {
    const { id } = params;
    const movieResponse = await axiosConfig.getMovieData(Number(id));
    const actorsResponse = await axiosConfig.getActors(Number(id));
    const movie = movieResponse.data.movie;
    const actors = actorsResponse.data.actors;

    return (
        <div className="container flex flex-col gap-6 mx-auto p-4">
            <div className="flex gap-12 max-lg:flex-col max-lg:items-center">
                <img src={movie.poster.src} alt={movie.poster.alt} className='max-lg:max-w-[500px] max-sm:w-full' />
                <div>
                    <h1 className="text-3xl font-bold mb-10">{movie.title}</h1>
                    <div className="flex justify-between gap-2 mb-10 text-yellow-400 font-bold uppercase max-md:flex-col">
                        <span className="flex items-center gap-2  max-sm:flex-col max-sm:items-start">
                            <RatingStars rating={movie.voteAverage} />
                            <span className="lowercase">{movie.voteAverage} / {movie.voteCount} votes</span>
                        </span>
                        <span>{movie.language} / {movie.releaseDate}</span>
                    </div>
                    <h2 className="text-2l font-bold mb-2">The synopsis</h2>
                    <p className="mb-10">{movie.overview}</p>
                    <h2 className="text-2l font-bold mb-2">Genres</h2>
                    <MovieGenres movie={movie} />
                    <h2 className="text-2l font-bold mb-2">The cast</h2>
                    <ul className="flex gap-4 flex-wrap list-none p-0">
                        {actors.map((actor: any) => (
                            <li key={actor.id} className="w-24">
                                <img
                                    src={actor.profile.src}
                                    alt={actor.profile.alt}
                                    className="w-full h-auto rounded"
                                />
                                <p className="text-center text-sm mt-2">{actor.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
