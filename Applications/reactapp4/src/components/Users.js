import React from 'react'

function Users() {
    const Users = [
        {id:1, name: 'Tareq', age:25}, 
        {id:2, name: 'Rahim', age:30}, 
        {id:3, name: 'Karim', age:28}, 
        {id:4, name: 'Salam', age:35}, 
        {id:5, name: 'Jamal', age:40}
    ];


  return (
    <>
    <h1>Users</h1>
    <ul>
    {
        Users.map(user => {
         return ( <li key ={user.id}>{user.id}:------- {user.name}: {user.age}</li>)
    })
    }
    </ul>
    </>
  )
}


export default Users