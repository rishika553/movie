import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard"

function Favorite(){
    const {favorites} = useMovieContext();

    if (favorites.length > 0){
        return (
            <div className="favorites">

           

        <div className="movies-grid">

        {favorites.map((movie) => (
         
           <MovieCard key = {movie.id} movie={movie}/>
        ))}
        </div>
         </div>
);
    }

    return <div className="favourite-empty">
        <h2>No favourite movies yet</h2>
        <p>Start adding movies to your favourite and they will appear here</p>
    </div>
}
export default Favorite;