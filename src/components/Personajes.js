import React from 'react'


function Personajes (props) {

    return(
        <div id='card'>
        <img src={props.Datos.image} alt="imagen de personaje"></img>
        <h2>{props.Datos.name}</h2>
        <p>{props.Datos.status} - {props.Datos.species}</p>
        <p>{props.Datos.origin.name}</p>
    </div>
);
}
//genero los componentes que quiero y los exporto

export default Personajes;