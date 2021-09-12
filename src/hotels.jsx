import React from "react";
import "./Styles/hotelStyles.css";
import calendario from "./Iconos/calendario.svg";
import "./Styles/bookingStyles.css";

function Hotel(props) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const fechaNatural1 = new Date(props.fecha).toLocaleDateString(
    "en-US",
    options
  );
  const fechaNatural2 = new Date(props.fechaa).toLocaleDateString(
    "en-US",
    options
  );
  return (
    <div className="Hotelschet">
      <div className="barra">
        <h2>{props.pais}</h2>
      </div>
      <img className="imagenes_hot" src={props.imagen} alt="prop.nombre" />
      <h2>{props.nombre} </h2>
      <br />
      <h5>{props.descripcion}</h5>

      <div className="fechas_design">
        <img className="iconDate" src={calendario} alt="fecha_icon" />
        <p>{fechaNatural1}</p>
        <p>{fechaNatural2}</p>
      </div>

      <div>
        <button className="bookinglook">!BOOKING¡</button>
      </div>
    </div>
  );
}

export default Hotel;
