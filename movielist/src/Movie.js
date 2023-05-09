import React from "react";

//Skickar med rating och för antalet användaren valt läggs stars till i en variabel som sedan returneras
function addStarsAccordingToRating(rating) {
    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<img key={i} src="/images/star.png" alt="star for rating" className="float-end" />);
    }
    return stars
}

export default function Movie(props) {
    return (
        <li className="list-group-item" data-movie-name= {props.item.title} data-movie-grade={props.item.grade}>
            {props.item.title}
            <img src="/images/delete.png" className="delete-movie-icon float-end" alt="delete icon" onClick={() => props.deleteMovie(props.item.id)}></img>
            {addStarsAccordingToRating(props.item.grade)}
        </li>
    )
}