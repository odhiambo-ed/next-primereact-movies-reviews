const API_KEY = process.env.NEXT_API_KEY;
const API_URL = process.env.NEXT_API_URL;

export async function getTrendingMovies() {
  const res = await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export async function getMovieById(id) {
  const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
}

export async function getMovieByQuery(query) {
  const res = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data;
}

export async function getMovieCredits(id) {
  const res = await fetch(
    `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
}

export async function getMovieReviews(id) {
  const res = await fetch(
    `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
}