import { getMovieById } from "@/utils/responses";
import { getSimilarMovies } from "@/utils/responses";

async function movieDetailsPage({params}) {
    const movie = await getMovieById(params.id);

    // Format the genre as a comma-separated string
    const genre = movie.genres.map((genre) => genre.name).join(" | ");

    // Format production companies as a comma-separated string
    const productionCompanies = movie.production_companies
      .map((company) => company.name)
        .join(", ");
    
    // Format spoken languages as a comma-separated string
    const spokenLanguages = movie.spoken_languages
      .map((language) => language.name)
        .join(", ");
    
    // Get similar movies
    const similarMovies = await getSimilarMovies(params.id);

  return (
      <>
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Genre: {genre}</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Productio Companies: {productionCompanies}</p>
          <p>Spoken Languages: {spokenLanguages}</p>
          <p>Tagline: {movie.tagline}</p>
          <p>Vote Average: {movie.vote_average}</p>
          <p>Vote Count: {movie.vote_count}</p>
      </>
  )
}

export default movieDetailsPage;