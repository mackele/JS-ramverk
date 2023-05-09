import React, { useState } from "react";
import Movie from "./Movie";

export default function AddMovieForm() {
    const [movies, setMovies] = useState([]);

    //Funktion för att lägga till en film
    const addMovie = (event) => {
        event.preventDefault();

        const newId = Date.now();
        const title = event.target.elements["movie-title"].value;
        const grade = event.target.elements["movie-grade"].value;
        let validation = true; 

        if(title === "" || grade === "0") {
            validation = false;
            alert("Vänligen ange både titel och betyg");
            return;
        }
        
        if(validation) {
            setMovies([...movies, {
                id: newId,
                title: title,
                grade: grade
            }]);
            event.target.reset()
        }
    }

    //Funktion för att ta bort film
    function deleteMovie(id) {
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    return (
        <div>
            <form onSubmit={addMovie}>
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

                <input type="submit" className="btn btn-success mt-3" value="Spara film"/>
            </form>

            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
            </ul>
        </div>
    )
}