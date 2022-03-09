import React from 'react'
import heart from '../../img/sideBar/heartIcon.png'
import './nav.scss'
export default function Nav() {
  return (
    <div className='nav'>
        <div className='nav__child'>Dashboard</div>
        <div className='nav__child'>
            <img src={heart} alt="heart" />
            ADD THIS PAGE TO FAVORITES
        </div>
    </div>
  )
}
