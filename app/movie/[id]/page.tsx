import axiosConfig from '../../../api/axiosConfig';
import { MovieParams } from '@/types/componentTypes';

export default async function MoviePage({ params }: MovieParams) {
    const { id } = params;
    const response = await axiosConfig.getMovieData(id);
    const movie = response.data.movie;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <img src={movie.poster.src} alt={movie.poster.alt} />
            <p>{movie.overview}</p>
        </div>
    );
}
