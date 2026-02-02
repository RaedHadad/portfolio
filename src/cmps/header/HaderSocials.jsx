import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { siteData } from '../../config/siteData'

export function HeaderSocial() {
  return (
    <div className="header_socials">
      <a href={siteData.linkedin} target="_blank" rel="noreferrer" title="linkedin">
        <BsLinkedin />
      </a>
      <a href={siteData.github} target="_blank" rel="noreferrer" title="github">
        <FaGithub />
      </a>
    </div>
  )
}