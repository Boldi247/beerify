import React, { useEffect, useState } from "react";
import Search from "../Search/Search";

import css from "./MainSection.module.css";
import Beer from "./Beer";
import Warning from "../UI/Warning";

const MainSection = () => {
  const url = window.location.href;
  const urlArray = url.split("#");
  const urlWithoutHash = urlArray[0];

  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://api.punkapi.com/v2/beers");
      result.json().then((data) => setBeers(data));
    };
    fetchData();
  }, []);

  const filterBeers = (filter) => {
    setQuery(filter);
  };

  return (
    <div className="section" id="main">
      <div className={css.wrapper}>
        <div className={css.searchHeader}>
          <h3>Search for your favourites!</h3>
          <Search filterBeers={filterBeers} />
        </div>
      </div>
      <div className={css.grid}>
        {query == ""
          ? beers.map((beer) => {
              return (
                <a href={urlWithoutHash + "beer/" + beer.id} key={beer.id}>
                  <Beer
                    id={beer.id}
                    name={beer.name}
                    img={beer.image_url}
                    alc={beer.abv}
                  />
                </a>
              );
            })
          : beers
              .filter((beer) => {
                return beer.name.toLowerCase().includes(query.toLowerCase());
              })
              .map((beer) => {
                return (
                  <a href={urlWithoutHash + "beer/" + beer.id}>
                    <Beer
                      id={beer.id}
                      name={beer.name}
                      img={beer.image_url}
                      alc={beer.abv}
                    />
                  </a>
                );
              })}
      </div>
    </div>
  );
};

export default MainSection;
