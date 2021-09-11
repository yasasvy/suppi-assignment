import React, { useEffect, useState } from "react";

import Movie from "./components/Movie";
import "./App.css";
import Multiselect from "multiselect-react-dropdown";
import Ford from "./components/Ford";

const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const IMAGES_API = "https://image.tmdb.org/t/p/w1280";
// const SEARCH_API = "https://api/themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);

  const data_v = [
    { Manufacturer: "Aston Martin", id: 1 },
    { Manufacturer: "Ferrari", id: 2 },
    { Manufacturer: "Mercedes", id: 3 },
    { Manufacturer: "AlphaTauri", id: 4 },
    { Manufacturer: "Mclaren", id: 5 },
  ];

  const [options] = useState(data_v);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    updateCard();
  }, [cards]);

  const updateCard = (card) => {
    // console.log(cards)
    return <Ford value={card} key={card}/>;
  };

  const onSelect = (card_data) => {
    // console.log(Array.isArray(card_data)? card_data.map(su => su.Manufacturer): []);
    setCards(
      Array.isArray(card_data) ? card_data.map((cn) => cn.Manufacturer) : []
    );

    // setCards(...cards, card_data[card_data.length - 1].Manufacturer)
  };

  const onRemove = (card_data) => {
    // console.log(card_data);
    let temp_name = Array.isArray(card_data)
      ? card_data.map((cn) => cn.Manufacturer)
      : [];
    console.log(temp_name + "temp")
    setCards(temp_name)
    // setCards(cards.filter((cd) => cd === temp_name));
    // console.log(cards + "cards");
  };

  return (
    <div className="container-fluid">
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })}
      </div>
      <div className="vehicles col-9">
        <Multiselect
          options={options}
          displayValue="Manufacturer"
          onSelect={onSelect}
          onRemove={onRemove}
          // selectedValues={[{Manufacturer: "Mclaren"}]}
        />
        {/* {console.log(cards)} */}
      </div>
      <div className="col-md-6">
      {cards.map((card) => updateCard(card))}
      </div>
      {/* 
      {cards.map((card) => {
        <Ford value={card}/>
       })} */}
    </div>
  );
}

export default App;
