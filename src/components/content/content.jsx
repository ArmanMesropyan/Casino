import React from 'react'
import Prices from './prices/prices'
import ContentFoot from './cont__foot/content__foot'

import Diagram from './diagram/diagram'
export default function Content() {
  return (
    <div className='content'>
        <Prices/>
        <Diagram/>
        <ContentFoot/>
        
    </div>
  )
}
