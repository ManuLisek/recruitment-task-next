"use server";

import Image from "next/image";
import axiosConfig from '../../../api/axiosConfig';
import RatingStars from '@/components/RatingStars';
import MovieGenres from '@/components/MovieGenres';
import BackButton from '@/components/BackButton';
import { TransformedActor } from '@/types/actorTypes';

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const movieResponse = await axiosConfig.getMovieData(Number(id));
    const actorsResponse = await axiosConfig.getActors(Number(id));
    const movie = movieResponse.data.movie;
    const actors = actorsResponse.data.actors;

    return (
      <div className="container flex flex-col gap-6 mx-auto p-4">
        <div className="flex gap-12 mb-10 max-lg:flex-col max-lg:items-center">
          <Image
            src={movie.poster.src}
            alt={movie.poster.alt}
            width={500}
            height={816}
            priority
            style={{ height: "auto" }}
          />
          <div>
            <h1 className="text-3xl font-bold mb-10">{movie.title}</h1>
            <div className="flex justify-between gap-2 mb-10 text-yellow-400 font-bold uppercase max-md:flex-col">
              <span className="flex items-center gap-2 max-sm:flex-col max-sm:items-start">
                <RatingStars rating={movie.voteAverage} />
                <span className="lowercase">
                  {movie.voteAverage.toString().slice(0, 3)} / {movie.voteCount} votes
                </span>
              </span>
              <span>{movie.language} / {movie.releaseDate}</span>
            </div>
            <h2 className="text-2l font-bold mb-2">The synopsis</h2>
            <p className="mb-10">{movie.overview}</p>
            <h2 className="text-2l font-bold mb-2">Genres</h2>
            <MovieGenres movie={movie} />
            <h2 className="text-2l font-bold mb-2">The cast</h2>
            <ul className="flex gap-4 flex-wrap list-none p-0">
              {actors.map((actor: TransformedActor) => (
                <li key={actor.id} className="w-24">
                  <div className="relative h-36">
                    <Image
                      src={actor.profile.src}
                      alt={actor.profile.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 226px"
                      className="object-cover rounded"
                    />
                  </div>
                  <p className="text-center text-sm mt-2">{actor.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto">
          <BackButton />
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="container flex items-center justify-center mx-auto p-4 h-screen">
        <p className="text-red-600">Something went wrong... Try again later</p>
      </div>
    );
  }
}
