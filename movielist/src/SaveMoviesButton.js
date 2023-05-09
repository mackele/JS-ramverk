import React from "react";

export default function SaveMoviesButton(props) {
    const handleClick = (event) => {
        event.preventDefault();

        const newId = Date.now();
        const title = document.getElementById("movie-title").value;
        const grade = document.getElementById("movie-grade").value;

        let validation = true;
        if (title === "" || grade === "0") {
            validation = false;
            alert("Vänligen ange både titel och betyg");
            return;
        }

        if (validation) {
            const newMovie = {
                id: newId,
                title: title,
                grade: grade,
            };
            props.addMovie(newMovie);
            event.target.form.reset();
        }
    };

    return (
        <input type="submit" className="btn btn-success mt-3" value="Spara film" onClick={handleClick} />
    );
}
