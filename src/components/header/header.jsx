import React from 'react'

import './header.scss'
import bar from '../../img/bar.png'
import lang from '../../img/lang.png'
import userPhoto from '../../img/Photo.png'
import down from '../../img/down.png'

export default function Header({barClick}) {
  return (
    <div className='header'>
        <div className='header__child'>
            <div className="bar" >
                <img src={bar}  onClick={barClick} alt="bar" />
            </div>
        </div>
        <div className='header__child'>
            <div className="language">
                <img src={lang} alt="lang" />
            </div>
        </div>
        <div className='header__child'>
            <div className='user'>
                <div className='user__child'>
                    <img src={userPhoto} alt="user" />    
                </div>
                <div className='user__child'>
                        <h6>Hello, Max!</h6>    
                        <p>Last loign: Thu Mar 20 214</p>
                </div>
                <div className='user__child'>
                    <img src={down} className='downArrow' alt="downArrow" />
                </div>
            </div>
        </div>    
    </div>
  )
}
