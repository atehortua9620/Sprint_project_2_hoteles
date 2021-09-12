import React, { useState } from "react";
import { hotelsData } from "./scripts/data";
import "./Styles/FilterBar.css";

function FilterBar(props) {
  let {
    contry,
    setContry,
    price,
    setPrice,
    sinceDate,
    setSinceDate,
    tillDate,
    setTillDate,
    size,
    setSize
  } = props;

  const handlingClick_reset = () => {
    setContry("TODOS");
    setPrice("TODOS");
    setSize("TODOS");
    setSinceDate("");
    setTillDate("");
  };

  const HandleContry = (e) => {
    console.log(contry);
    setContry(e.target.value);
  };
  const HandlePrices = (e) => {
    setPrice(e.target.value);
  };
  const HandleDateS = (e) => {
    setSinceDate(e.target.value);
  };
  const HandleDateT = (e) => {
    setTillDate(e.target.value);
  };
  const HandleSize = (e) => {
    setSize(e.target.value);
  };

  return (
    /*  {props.listaHoteles.map } */
    <div className="filterbarS">
      <div>
        <h3>Contries</h3>
        <select
          value={props.contry}
          className="filtroinput"
          onChange={HandleContry}
        >
          <option value="TODOS">ALL</option>
          <option value="Argentina">ARGENTINA</option>
          <option value="Brasil">BRASIL</option>
          <option value="Chile">CHILE</option>
          <option value="Uruguay">URUGUAY</option>
        </select>
      </div>

      <div>
        <h3>Prices</h3>
        <select
          value={props.price}
          className="filtroinput"
          onChange={HandlePrices}
        >
          <option value="TODOS">ALL</option>
          <option value="$">BASIC</option>
          <option value="$$">DELUXE</option>
          <option value="$$$">SUPREME</option>
          <option value="$$$$">LUXURY</option>
        </select>
      </div>

      <div>
        <h3>Size</h3>
        <select
          value={props.size}
          className="filtroinput"
          onChange={HandleSize}
        >
          <option value="TODOS">ALL</option>
          <option value="pequeño">SMALL</option>
          <option value="mediano">MEDIUM</option>
          <option value="grande">BIG</option>
        </select>
      </div>

      <div>
        <h3>Desde</h3>
        <input
          value={props.sinceDate}
          className="filtroinput"
          type="date"
          onChange={HandleDateS}
        ></input>
      </div>

      <div>
        <h3>Hasta</h3>
        <input
          value={props.tillDate}
          className="filtroinput"
          type="date"
          onChange={HandleDateT}
        ></input>
      </div>

      <button
        value="clear"
        className="filtroinput Boton"
        onClick={handlingClick_reset}
      >
        CLEAR
      </button>
    </div>
  );
}

export default FilterBar;
