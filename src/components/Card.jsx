import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div className="movie">
      <img src={props.image} alt="" />
      <div className="content">
        <Link to={`/movies/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>

        <h3>Language-{props.language}</h3>
        <h3>Rating-{props.rating ? props.rating : "Not Rated Yet"}</h3>
      </div>
    </div>
  );
}
export default Card;
