import { getTrendingMovies } from "@/utils/responses";
import { Card } from "primereact/card";
import { Rating } from "primereact/rating";

async function Trending() {
  const movies = await getTrendingMovies();

  return (
    <div className="flex flex-wrap">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          header={
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          }
          footer={
            <>
              <div>
                <Rating
                  value={movie.vote_average / 2}
                  stars={5}
                  readonly
                  cancel={false}
                />
              </div>
              <div>{movie.release_date}</div>
            </>
          }
          className="p-m-2 p-md-3 p-lg-4 movie-card"
          style={{ width: "calc(20% - 32px)" }}
        >
          <h3>{movie.title}</h3>
          <div className="movie-genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="p-tag p-mr-1">
                {genre.name}
              </span>
            ))}
          </div>
          <p
            className="movie-overview"
            style={{ maxHeight: "100px", overflow: "hidden" }}
          >
            {movie.overview}
          </p>
          <a href={`/movie/${movie.id}`} className="p-button-link">
            Read More
          </a>
        </Card>
      ))}
    </div>
  );
}

export default Trending;