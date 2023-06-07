import React, { useEffect, useState } from "react";
import axios from "axios";
import sharingan from "../images/sharingan.png";
import Card from "./Card";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // Fetch data here
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setMovies(response.data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(movies);
  return (
    <div>
      <div className="header">
        <h1>MovieVerse</h1>

        <img src={sharingan} alt="" />
      </div>
      <div className="movies">
        <div className="grid-container">
          {movies.map((movie, index) => {
            return (
              <Card
                key={index}
                id={movie.show.id}
                image={movie.show.image.medium}
                name={movie.show.name}
                language={movie.show.language}
                rating={movie.show.rating.average}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default MoviesList;
