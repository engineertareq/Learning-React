import React from 'react'

function Fruits() {
    const fruits = ['Mango', 'Banana', 'Orange', 'Grapes', 'Pineapple'];
  return (
    <div>
        <table border = "1">
            <thead>
                <tr>
                    <th>Fruit Name</th>
                </tr>
            </thead>
            <tbody>
                {fruits.map(fruit => <tr key = {fruit}><td>{fruit}</td></tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Fruits