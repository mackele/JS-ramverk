import React from "react";

//Skapar komponenten som är en knapp som sorterar filmerna i alfabetisk ordning
export default function OrderByAlphaButton(props) {    
    //När användaren klickar på knappen körs funktionen (eventet)
    const sortAlphabetically = (event) => {
        event.preventDefault();
        //Skapar en kopia som sedan sorteras, jämför titel a med b och sorterar den därefter
        const sortedMovies = [...props.movies].sort((a, b) => a.title.localeCompare(b.title));
        console.log(sortedMovies);
        //Uppdaterar den originella listan med kopian
        props.setMovies(sortedMovies);
    }

    //Knappen som visas för användaren och som kallar på funktionen sortAlphabetically när användaren klickar
    return (
        <button onClick={sortAlphabetically} className="btn btn-outline-primary mx-1">
            Alfabetisk ordning
        </button>
    )
}

