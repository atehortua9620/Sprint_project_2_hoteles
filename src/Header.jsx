import React from "react";
import logo from "./Iconos/avion.svg"
import "./Styles/Headersch.css";

function Headerest (props){

    const options={
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    };


      let naturalSince = new Date(props.sinceDate + "T00:00:00").toLocaleDateString("en-US", options);
      let naturaltill = new Date(props.tillDate + "T00:00:00").toLocaleDateString("en-US", options);
    let pais = props.contry;
    let pre = props.price;



    
    return(
        <div className="upperBar">
            <h1>HERE WE GO...</h1>
            <img src={logo} alt="charge"className="logo"/> 

            
            
            <div className="Filter_Action">
                <h5>Hoteles in: {pais}</h5>
                <h5>precios: {pre}</h5>

                { naturalSince === "Invalid Date" ?    (
               <h5>Select date</h5>):(
                <h5> {naturalSince}</h5>
               )           
            }

            { naturaltill === "Invalid Date" ?(
                 <h5>Select date</h5>
            ):(
                <h5>Hasta: {naturaltill}</h5>
            )
            }
            </div>
           

            
                

 
            
           

            
        </div>
    );

    }

export default Headerest;