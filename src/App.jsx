import { useState, useEffect } from 'react'
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';

function App() {
  const apiKey = "75d4f6d";
  const[movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie= async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into JS object
    const data = await response.json();
    // Set the movie state to the received data
    setMovie(data);
  };
  
  useEffect(() => {
    getMovie("The Good Place");
  }, []);

  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className = "App">
        <Form moviesearch= {getMovie}/>
        <MovieDisplay movie= {movie}/>
        
    </div>
  );
}

export default App
