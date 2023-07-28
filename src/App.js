import { useEffect , useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//676a253f
//soxiye9502@kkoup.com : Mail for the key

const API_URL = 'https:/omdbapi.com?apikey=676a253f';

const movie1 = {
  "Title": "The Godfather",
  "Year": "1972",
  "imdbID": "tt0068646",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
};



const App = () => {
  
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
     searchMovies('Godfather');
  },[]);


  return (
    <div className='app'>
      <h1>Moviesmod</h1>

      <div className='search'>
        <input 
          placeholder='Search for Movies'
          value = {searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img
          src = {SearchIcon}
          alt = 'Search'
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>
      {
        movies.length > 0
        ? (
          <div className='container'>
             {
              movies.map((movie)=>(
               <MovieCard movie={movie}/> 
              ))
             }
          </div>
        ) : (
          <div className='empty'> No movies found </div>
        )
      }

      
    </div>
  );
}

export default App;
