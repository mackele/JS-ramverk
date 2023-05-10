import React from "react";

//Skapar komponent för spara knappen
export default function SaveMoviesButton(props) {
    //När användaren klickar körs nedan
    const handleClick = (event) => {
        event.preventDefault();

        //Id som används är Date.now för att sedan kunna spara och sortera filmerna
        const newId = Date.now();
        const title = document.getElementById("movie-title").value;
        const grade = document.getElementById("movie-grade").value;

        //Validerar så att både titel och betyg är angett
        let validation = true;
        if (title === "" || grade === "0") {
            //Om inte så returneras
            validation = false;
            alert("Vänligen ange både titel och betyg");
            return;
        }

        //Om allt är ok skapas en ny film
        if (validation) {
            const newMovie = {
                id: newId,
                title: title,
                grade: grade,
            };
            //Den nya filmen läggs till och uppdateras sen via setMovies som finns i AddMovieForm.js
            props.addMovie(newMovie);
            event.target.form.reset();
        }
    };

    //När användaren klickar körs handleClick
    return (
        <input type="submit" className="btn btn-success mt-3" value="Spara film" onClick={handleClick} />
    );
}
