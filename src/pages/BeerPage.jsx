import React, { useEffect, useState } from "react";
import NavigationBar from "../components/Header/NavigationBar";
import css from "./BeerPage.module.css";
import Footer from "../components/Footer/Footer";

const BeerPage = () => {
  const path = window.location.pathname;
  const id = path.split("/")[2];
  console.log(id);

  const [beerData, setBeerData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://api.punkapi.com/v2/beers/" + id);
      result.json().then((data) => setBeerData(data[0]));
    };
    fetchData();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className={css.showcase}>
        <div className={css.wrapper}>
          <div className={css.item_showcase}>
            <div className={css.beer_data}>
              <h1>{beerData.name}</h1>
              <h3>{beerData.abv}</h3>
              <h4>{beerData.tagline}</h4>
            </div>
            <img src={beerData.image_url} alt="" />
          </div>
          <p>{beerData.description}</p>
        </div>
      </div>
      <div className={css.beer_data_additional}>
        <div className={css.food}>
          <h2>Food pairing:</h2>
          <ul>
            {beerData.food_pairing &&
              beerData.food_pairing.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeerPage;
