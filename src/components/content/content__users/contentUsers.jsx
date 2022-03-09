import React from 'react'
import { users } from './users'
import './contentUser.scss'
export default function ContentUsers() {
  return (
    <div className='contentUsers'>
        <div className='titles'>
            <p>ID</p>
            <p>Username</p>
            <p>Profit($)</p>
            <p>Commisions($)</p>
            <p>View</p>
        </div>
        {users.map(user => {
            return <div className='user' key={user.id}>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.profit}</p>
                <p>{user.commision}</p>
                <p><img src={user.view} alt="icon" /></p> 
            </div>
        })}

    </div>
  )
}
