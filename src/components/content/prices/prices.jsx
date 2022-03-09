import React from 'react'
import './prices.scss'
export default function Prices() {
  return (
    <div className='prices'>
        <div className='prices__child'>
            <div className='price__PR'>25</div>
            <div className='price__text'>SIGNUPS</div>    
        </div>
        <div className='prices__child'>
            <div className='price__PR'>$1000</div>
            <div className='price__text'>PROFIT</div>    
        </div>
        <div className='prices__child'>
            <div className='price__PR'>$350</div>
            <div className='price__text'>COMMISSIONS</div>    
        </div>
        <div className='prices__child'>
            <div className='price__PR'>$300</div>
            <div className='price__text'>PENDING COMMISSION</div>    
        </div>    
    </div>
  )
}
