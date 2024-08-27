import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]); // Initialize as an empty array

  async function fetchMoviesHandler() {
    try {
      const response = await fetch('https://swapi.dev/api/films/'); // Corrected the URL and added a trailing slash
      if (!response.ok) {
        throw new Error('Failed to fetch movies.'); // Handle HTTP errors
      }

      const data = await response.json(); // Add parentheses to correctly call response.json()

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });
      setMovies(transformedMovies); // Set transformed movies to state
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
