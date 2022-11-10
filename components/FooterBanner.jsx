import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'
const FooterBanner = ({footerBanner}) => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
        <p>{footerBanner.discount}</p>
        <h3>{footerBanner.largeText1}</h3>
        <h3>{footerBanner.largeText2}</h3>
        <p>{footerBanner.saleTime}</p>
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