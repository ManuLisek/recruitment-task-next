import Link from 'next/link';
import axiosConfig from '../api/axiosConfig';

export default async function Home() {
  const response = await axiosConfig.getMoviesData();
  const movies = response.data.movies;

  return (
    <div className="container mx-auto">
      <main className="flex justify-items-center items-center flex-wrap gap-4 w-full">
        {movies.map((movie: any) => (
          <Link key={movie.key} href={`/movie/${movie.key}`} className="flex-grow w-1/5 p-4 border rounded">
            <div>
              <h3 className="text-xl font-bold">{movie.title}</h3>
              <img src={movie.poster.src} alt={movie.poster.alt} className="w-full max-w-sm" />
            </div>
          </Link>
        ))}
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
