import React, { useState } from 'react'
import './sideBar.scss'
import logo from '../../img/sideBar/bw.jpg'
import icon1 from '../../img/sideBar/1icon.png'
import icon2 from '../../img/sideBar/2icon.png'
import icon3 from '../../img/sideBar/3icon.png'
import icon4 from '../../img/sideBar/4icon.png'
import icon5 from '../../img/sideBar/5icon.png'
import icon6 from '../../img/sideBar/6icon.png'
import icon7 from '../../img/sideBar/7icon.png'
import icon8 from '../../img/sideBar/heartIcon.png'
import icon9 from '../../img/sideBar/timeIcon.png'
import icon10 from '../../img/sideBar/eyeIcon.png'
import arrLeft from '../../img/sideBar/arrowLeft.png'
import arrRight from '../../img/sideBar/arrowRight.png'




export default function SideBar() {

    const [click , setClcik] = useState()

    const leftClick = () => {
        setClcik(!click)
    }
  return (
    <div className={!click ? 'sideBar' : 'sideBar__long'}>
       { !click ? 
       <div className="arrowLeft" onClick={leftClick}>
            <img src={arrLeft} alt="arrLeft" />    
        </div>
        :
        <div className="arrowRight" onClick={leftClick}>
            <img src={arrRight} alt="arrRight" />    
        </div>
        }
        
        {!click ? <div className='sideBar__parent'>
             <div className='logo__sid'>
                <img src={logo} alt="logo" /> 
             </div>
             
            <div className='content__sid'>
                <ul>
                    <li><img src={icon1} alt="icons" /></li>
                    <li><img src={icon2} alt="icons" /></li>
                    <li><img src={icon3} alt="icons" /></li>
                    <li><img src={icon4} alt="icons" /></li>
                    <li><img src={icon5} alt="icons" /></li>
                    <li><img src={icon6} alt="icons" /></li>
                    <li><img src={icon7} alt="icons" /></li>    
                </ul>    
            </div>
            <div className='content__sid'>
            <ul>
                <li><img src={icon8} alt="icons" /></li>
                <li><img src={icon9} alt="icons" /></li>
                <li><img src={icon10} alt="icons" /></li>
 
            </ul>    
            </div>
        </div> 
        :
        
        <div className='sideBar__parent'>
             <div className='logo__sid__long'>
               
                <p>BIGWIN365 AFFILIATES</p>
             </div>
             
            <div className='content__sid'>
                <ul>
                    <li><img src={logo} alt="icons" />Home</li>
                    <li><img src={icon1} alt="icons" />Dashboard</li>
                    <li><img src={icon2} alt="icons" />Account Managment</li>
                    <li><img src={icon3} alt="icons" />My Account</li>
                    <li><img src={icon4} alt="icons" />Marketing Tools</li>
                    <li><img src={icon5} alt="icons" />Reports</li>
                    <li><img src={icon6} alt="icons" />Payments</li>
                    <li><img src={icon7} alt="icons" />Settings</li>    
                </ul>    
            </div>
         
        </div> 
        
        }
       
      
    </div>
  )
}
