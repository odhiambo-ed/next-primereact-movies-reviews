import { getTrendingMovies } from "@/utils/responses";
import { Card } from "primereact/card";
import { Rating } from "primereact/rating";

async function Trending() {
  const movies = await getTrendingMovies();

  return (
    <div className="flex flex-wrap gap-4 py-10">
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
          className="p-m-2 p-md-3 p-lg-4" // Adjust the margin and padding as needed
          style={{ width: "calc(20% - 32px)" }} // Specify the width for 5 cards in a row
        >
          <h3>{movie.title}</h3>
          <p style={{ maxHeight: "100px", overflow: "hidden" }}>
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