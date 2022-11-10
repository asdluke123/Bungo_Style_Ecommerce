import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'
const FooterBanner = ({footerBanner}) => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
        <h3>Shop For</h3>
        <h3>Your Favorites</h3>
        </div>
        <div className="right">
          <p>{footerBanner.smallText}</p>
          <h2>{footerBanner.midText}</h2>
          <p>{footerBanner.desc}</p>
        </div>
        <img src={urlFor(footerBanner.image)}className='footer-banner-image' width={450}/>
      </div>
    </div>
  )
}

export default FooterBanner