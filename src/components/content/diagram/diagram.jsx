import React from 'react'
import './diagram.scss'
import diagram from '../content__img/diagram.png'
import pie  from '../content__img/Pie.png'
import earth from '../content__img/earth.png'
import elipse1 from '../content__img/Ellipse3.png'
import elipse2 from '../content__img/Ellipse2.png'
import elipse3 from '../content__img/Ellipse1.png'
export default function Diagram() {
  return (
    <div className='diagram'>
        <div className='diagram__child'>
                <div className="diagram__title">
                    <p>Medias Staats</p>
                    <p>Last week</p>
                </div>    
                <div className="diagram__background">
                    <img src={diagram} alt="diagrama" />    
                </div>
                <div className='utils__diagram'>
                 <div className='utils__diag__child'>
                   <div className='utils__cub'></div>  Clicks
                 </div>
                 <div className='utils__diag__child'>
                   <div className='utils__cub'></div>  Page View
                 </div>
                 <div className='utils__diag__child'>
                   <div className='utils__cub'></div>  Sign ups
                </div>
        </div>
        </div>
        <div className="diagram__child">
            <div className="diagram__title">
                <p>Active Medias</p>    
            </div>
            <div className="diagram__background">
                <img src={pie} alt="pie" />
                <p>50</p>
            </div>
            <div className="ctr">
            <ul>
            <li className='ctr__list'>
              <div className='ctr__list__cont'>CTR</div>
              <div className='ctr__list__cont'>25%</div>
            </li>
            <li className='ctr__list'>
              <div className='ctr__list__cont'>
                <img src={elipse1} alt="icon" />
                Total Views</div>
              <div className='ctr__list__cont'>200</div>
            </li>
            <li className='ctr__list'>
              <div className='ctr__list__cont'>
                <img src={elipse2} alt="icon" />
                Total Clicks</div>
              <div className='ctr__list__cont'>65</div>
            </li>
            <li className='ctr__list'>
              <div className='ctr__list__cont'>
                <img src={elipse3} alt="icon" />
                Signups</div>
              <div className='ctr__list__cont'>22</div>
            </li>
            
            
            
            
           
          </ul>  
        </div>
        </div>
        <div className="diagram__child">
                <div className="diagram__title">
                    <p>Geographic Data</p>
                    <p> Last Month</p>
                </div>    
                <div className="diagram__background">
                    <img src={earth} alt="earth" />    
                </div>
                <div className="countrys">
                    <p>Affiliate Sign Ups </p>
                    <ol>
                      <li>
                        <div>1. United States</div>
                        <div>200</div>
                      </li>
                      <li>
                        <div>2. China</div>
                        <div>65</div>
                      </li>
                      <li>
                        <div>3. United Kingdom</div>
                        <div>22</div>
                      </li>

                    </ol>  
                 </div>
        </div>




        <div></div>
        <div></div>
        
        
    </div>
  )
}
