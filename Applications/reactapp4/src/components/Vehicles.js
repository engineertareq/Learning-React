import React from 'react'

function Vehicles() {
    const Vehicles = [
            "Rickshaw",
            "Car",
            "Bus",
            "Bike",
            "Truck"   
    ];
    const [x, y, z, w, v] = Vehicles; // Array Destructuring
  return (
    <div>
    <h1>Vehicles</h1>
    First Vehicle: {x} <br />
    Second Vehicle: {y} <br />
    third Vehicle: {z} <br />
    fourth Vehicle: {w} <br />
    fifth Vehicle: {v} <br />
    </div>
  )
}

export default Vehicles