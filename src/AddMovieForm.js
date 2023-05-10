import React, { useState } from "react";
import Movie from "./Movie";
import SaveMoviesButton from "./SaveMoviesButton";
import OrderByAlphaButton from "./OrderByAlphaButton";
import OrderByGradeButton from "./OrderByGradeButton.js";

export default function AddMovieForm() {
    const [movies, setMovies] = useState([]);

    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    };

    //Funktion för att ta bort film
    function deleteMovie(id) {
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    return (
        <div>
            <form>
                <label htmlFor="movie-title">Titel: </label>
                <input type="text" id="movie-title" className="form-control" placeholder="Ange filmens namn..."></input>

                <label htmlFor="movie-grade">Betyg:</label>
                <select type="text" id="movie-grade" className="form-control">
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <SaveMoviesButton addMovie={addMovie} />
            </form>

            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
            </ul>

            <OrderByAlphaButton movies={movies} setMovies={setMovies} />
            <OrderByGradeButton movies={movies} setMovies={setMovies} />
        </div>
    )
}