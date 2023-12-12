import { getMovieByQuery } from "@/utils/responses"
import Link from 'next/link'


async function searchPage({params}) {
    const movies = await getMovieByQuery(params.query);
  return (
    <>
      <h2>Search Results</h2>
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
    </>
  );
}

export default searchPage