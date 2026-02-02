import Me from '../../assets/img/me-about.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { AboutP } from '../../services/about.service'
import { siteData } from '../../config/siteData'

export function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={Me} alt={siteData.name} />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>{siteData.aboutCardCertificate}</h5>
              <small>{siteData.aboutCardCertificateSub}</small>
            </article>
            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>{siteData.aboutCardProjects}</h5>
              <small>{siteData.aboutCardProjectsCount}</small>
            </article>
          </div>
          <AboutP />
        </div>
      </div>
    </section>
  )
}