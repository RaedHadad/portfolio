import { siteData } from '../config/siteData'

export function AboutP() {
  const formattedContent = siteData.aboutText.replace(/\n\s+/g, '<br/>')
  return <p dangerouslySetInnerHTML={{ __html: formattedContent }} />
}
