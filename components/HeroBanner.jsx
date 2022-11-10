import React from 'react'

import { urlFor } from '../lib/client'
const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <h3>{heroBanner.midText }</h3>
            <h1>{heroBanner.largeText1}</h1>
            <img src={urlFor(heroBanner.image)} alt='sneakers' className='hero-banner-image' />
            <div>
              <div className='desc'>
                <p>{heroBanner.desc}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner