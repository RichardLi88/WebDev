const url = "https://api.themoviedb.org/";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${url}/movie/popular?api_key=${import.meta.env.API_KEY}`
  );
};

export const searchMovies = async () => {
  const response = await fetch(
    `${url}/search/movie?api_key=${
      import.meta.env.API_KEY
    }&query=${encodeURIComponent(query)}`
  );
};
