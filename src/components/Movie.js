import React from "react";

const IMAGES_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie col-md-3">
      <img src={IMAGES_API + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>

      <div className="movie-overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
