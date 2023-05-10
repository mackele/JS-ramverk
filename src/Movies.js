import React from "react";
import Movie from "./Movie";

export default function Movies(props) {
    //Använder destructing för att movies och deleteMovie ska sedan kunna användas som variabler
    const { movies, deleteMovie } = props;

    return (
        //Går igenom varje film i movies och skapar en Movie komponent för varje 
        <ul className="list-group list-group-item-dark mt-3 mb-3">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
        </ul>
    )
}