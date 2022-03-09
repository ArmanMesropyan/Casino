import React from 'react'
import ContentUsers from '../content__users/contentUsers'
import './content__foot.scss'

export default function ContentFoot() {
  return (
    <div className='content__foot'>
      <div className='cont_users__M'>
        <div className='content__title__foot'>Top Affiliates</div>
        <ContentUsers/>
      </div>
      <div className='cont_users__M'>
        <div className='content__title__foot'>Signups</div>
        <ContentUsers/>
      </div>
      <div className='cont_users__M'>
        <div className='content__title__foot'>Pending Commissions</div>
        <ContentUsers/>
      </div>
        
     
       
    </div>
  )
}
