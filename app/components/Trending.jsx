import { getTrendingMovies } from '@/utils/responses'
import Link from 'next/link'

async function Trending() {
    const movies = await getTrendingMovies();
  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={"/movies/" + movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trending