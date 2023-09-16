import React, { useEffect, useState, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/addMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-f062f-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong!!");
      }

      const data = await response.json();
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = useCallback(async (movie) => {
    setIsloading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-f062f-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong!!");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, []);

  let content = <p>found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
