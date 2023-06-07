import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");
  useEffect(() => {
    // Fetch data here
    axios
      .get(`https://api.tvmaze.com/shows/${movieId}`)
      .then((response) => {
        setMovie(response.data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [movieId]);
  console.log(movie);
  return <div>{movie.summary}</div>;
}
export default MovieDetails;
