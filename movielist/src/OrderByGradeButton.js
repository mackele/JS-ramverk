import React from "react";

//Skapar komponenten som är en knapp som sorterar filmerna i betygsordning
export default function OrderByGradeButton(props) {
    //När användaren klickar på knappen körs funktionen (eventet)
    const sortByGrade = (event) => {
        event.preventDefault();

        //Skapar en ny lista där den originella listan kopieras och sorteras beroende på betyget den har
        const sortedMovies = props.movies.slice().sort((a, b) => {
            //Om film A har lägre betyg än B sorteras film A före i ordningen. Ordningen är från lägst till högst. Lägsta högst upp i listan och 
            //högsta längst ner i listan
            if (a.grade < b.grade) {
              return -1;
            }
            //Om film A har högre betyg placeras den efter B i listan 
            if (a.grade > b.grade) {
              return 1;
            }
            //Om filmerna har samma betyg görs ingenting
            return 0;
          //Bytar till sist ordningen på listan så att det högsta betyget visas högst upp
          }).reverse();
        //setMovies körs sist för att uppdatera den originella listan med den sorterade versionen
        props.setMovies(sortedMovies);
    }

    //Själva knappen som visas upp, när den klickas på körs funktionen sortByGrade
    return (
        <button onClick={sortByGrade} className="btn btn-outline-primary mx-1">
            Betygsordning
        </button>
    )
}

