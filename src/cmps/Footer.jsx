import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookF, FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { siteData } from '../config/siteData'

export function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">{siteData.footerLogo}</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        {!siteData.facebook.includes('your-') && (
          <a href={siteData.facebook} target="_blank" rel="noreferrer" title="facebook">
            <FaFacebookF />
          </a>
        )}
        {!siteData.instagram.includes('your-') && (
          <a href={siteData.instagram} target="_blank" rel="noreferrer" title="instagram">
            <FiInstagram />
          </a>
        )}
        <a href={siteData.linkedin} target="_blank" rel="noreferrer" title="linkedin">
          <BsLinkedin />
        </a>
        <a href={siteData.github} target="_blank" rel="noreferrer" title="github">
          <FaGithub />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; {siteData.copyrightName}. All rights reserved</small>
      </div>
    </footer>
  )
}