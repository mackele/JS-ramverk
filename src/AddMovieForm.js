import React, { useState } from "react";
import SaveMoviesButton from "./SaveMoviesButton";
import OrderByAlphaButton from "./OrderByAlphaButton";
import OrderByGradeButton from "./OrderByGradeButton.js";
import Movies from "./Movies";

export default function AddMovieForm() {
    const [movies, setMovies] = useState([]);

    //Lägga till film 
    const addMovie = (movie) => {
        //Uppdaterar listan med den nya filmen
        setMovies([...movies, movie]);
    };

    //Funktion för att ta bort film
    function deleteMovie(id) {
        //Tar bort filmen som användaren klickar på
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    //Formuläret som visas upp för användaren
    //Innehåller även knapparna för att spara och sortera. Skickar då med movies och funktionen som props
    return (
        <div>
            <h2>Lägg till en film</h2>
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

            <Movies movies={movies} deleteMovie={deleteMovie} />
            
            <OrderByAlphaButton movies={movies} setMovies={setMovies} />
            <OrderByGradeButton movies={movies} setMovies={setMovies} />
        </div>
    )
}