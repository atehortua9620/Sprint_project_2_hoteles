import React from "react";
import Hotel from "./hotels.jsx";
import "./Styles/HotelSStyle.css";

function Hoteles(props) {
  return (
    <div className="hotelesTodos">
      {props.listaHoteles.map((hotel) => {
        return (
          <Hotel
            nombre={hotel.name}
            pais={hotel.country}
            imagen={hotel.photo}
            descripcion={hotel.description}
            fecha={hotel.availabilityFrom}
            fechaa={hotel.availabilityTo}
          />
        );
      })}
    </div>
  );
}

export default Hoteles;
