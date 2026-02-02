import { CTA } from '../header/CTA'
import { HeaderSocial } from '../header/HaderSocials'
import { siteData } from '../../config/siteData'

export function Header() {
  return (
    <header>
      <div className="container header-container">
        <h2>{siteData.greeting}</h2>
        <h1>{siteData.name}</h1>
        <h3 className="text-light">{siteData.title}</h3>
        {siteData.tagline && (
          <p className="header-tagline">{siteData.tagline}</p>
        )}
        <CTA />
        <div className='icon-container'>
          <HeaderSocial />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}