import { getTrendingMovies } from '@/utils/responses'
async function Trending() {
    const movies = await getTrendingMovies();
  return (
      <div>
            <h2>Trending Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Trending