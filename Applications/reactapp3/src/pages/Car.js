import React from 'react'

function Car(props) {
 const {brand, year, ...rest} = props;
 const welcome = () => {
    alert("Hello From My Function")
 }
  
 const cars = ["BMW", "Toyota", "Odi", "Rols Royels"];
 
 return (
    <>
    <h1>About Car</h1>

    <p>Brand: {brand}</p>
    <p>Year: {year}</p>
    <p>Brand: {rest.color}</p>
    <p>Brand: {rest.price}</p>
    <button onClick={welcome}>Click Here!</button>
    <hr/>
     <ul>
        {cars.map((car)=><li>{ car }</li>)}
     </ul>
    </>
  )
}

export default Car