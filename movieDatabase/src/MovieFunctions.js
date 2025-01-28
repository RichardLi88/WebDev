const url = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async () => {
  const response = await fetch(`${url}/movie/popular?api_key=${apiKey}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${url}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results;
};
