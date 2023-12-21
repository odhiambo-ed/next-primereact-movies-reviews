import { getTrendingMovies } from "@/utils/responses";
import Link from "next/link";
import { Card } from "primereact/card";
import { Rating } from "primereact/rating";

async function Trending() {
  const movies = await getTrendingMovies();

  return (
    <div className="flex flex-wrap gap-4 py-10">
      {movies.map((movie) => (
        <Link
          href={`/movie/${movie.id}`}
          key={movie.id}
          className="p-m-2 p-md-3 p-lg-4" // Adjust the margin and padding as needed
          style={{ width: "calc(15% - 32px)" }} // Specify the width for 5 cards in a row
        >
          <Card
            key={movie.id}
            header={
              <>
                <div className="relative">
                  <div className="absolute top-0 right-0 z-10">
                    <div
                      className="relative rounded-full p-3 m-1 text-gray-900 font-bold overflow-hidden"
                      style={{
                        background: `linear-gradient(90deg, #F5F5F590 ${
                          (movie.vote_average / 10) * 100
                        }%, #ffffff00 ${(movie.vote_average / 10) * 100}%)`,
                      }}
                    >
                      <div className="absolute inset-0 border-3 border-gray-400 rounded-full"></div>
                      <div className="relative z-10">
                        {movie.vote_average.toFixed(1)}
                      </div>
                    </div>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              </>
            }
            footer={
              <div className="flex justify-content-between">
                <div>
                  <Rating
                    value={movie.vote_average / 2}
                    stars={5}
                    readonly
                    cancel={false}
                  />
                </div>
                <div>{movie.release_date}</div>
              </div>
            }
            title={movie.title}
            subTitle={movie.overview}
          >
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Trending;