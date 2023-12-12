import { getMovieById } from "@/utils/responses";

async function movieDetailsPage(id) {
    const movie = await getMovieById(id);
  return (
      <>
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <p>{movie.overview}</p>
      </>
  )
}

export default movieDetailsPage;