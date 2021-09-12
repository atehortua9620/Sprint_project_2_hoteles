import React, { useState } from "react";
import Hoteles from "./hotelesillos.jsx";
import Headerest from "./Header.jsx";
import FilterBar from "./FilterBar.jsx";
import { hotelsData } from "./scripts/data.js";
import "./Styles/App.css";

function App() {
  /* console.log(hotelsData[1].photo) */

  const [contry, setContry] = useState("TODOS");
  const [price, setPrice] = useState("TODOS");
  const [size, setSize] = useState("TODOS");
  const [sinceDate, setSinceDate] = useState("");
  const [tillDate, setTillDate] = useState("");

  let filterBycont = hotelsData.filter((hotel) => {
    if (contry === "TODOS") {
      return true;
    } else if (hotel.country === contry) {
      return true;
    } else {
      return false;
    }
  });

  filterBycont = filterBycont.filter((hotel) => {
    if (price === "TODOS") {
      return true;
    } else if (hotel.price === price.length) {
      return true;
    } else {
      return false;
    }
  });

  filterBycont = filterBycont.filter((hotel) => {
    if (size === "TODOS") {
      return true;
    } else if (size === "pequeño") {
      return hotel.rooms <= 10;
    } else if (size === "mediano") {
      return hotel.rooms > 10 && hotel.rooms < 20;
    } else {
      return hotel.rooms >= 20;
    }
  });

  filterBycont = filterBycont.filter((hotel) => {
    const fech = new Date(sinceDate + " 00:00:00").getTime();

    if (sinceDate === "") {
      return true;
    } else {
      return fech >= hotel.availabilityFrom;
    }
  });

  filterBycont = filterBycont.filter((hotel) => {
    const fecha = new Date(tillDate + " 00:00:00").getTime();

    if (tillDate === "") {
      return true;
    } else {
      return fecha <= hotel.availabilityTo;
    }
  });

  return (
    <div className="App">
      <Headerest
        sinceDate={sinceDate}
        contry={contry}
        tillDate={tillDate}
        price={price}
        /* setTillDate={setTillDate}/> */
      />

      <FilterBar
        contry={contry}
        setContry={setContry}
        price={price}
        setPrice={setPrice}
        sinceDate={sinceDate}
        setSinceDate={setSinceDate}
        tillDate={tillDate}
        setTillDate={setTillDate}
        Data={hotelsData}
        listaHoteles={hotelsData}
        size={size}
        setSize={setSize}
      />
      {filterBycont === "" ? (
        <h1>We couldn't found any hotels in those selected filters</h1>
      ) : (
        <Hoteles listaHoteles={filterBycont} />
      )}
    </div>
  );
}

export default App;
