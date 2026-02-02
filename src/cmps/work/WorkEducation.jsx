import { siteData } from '../../config/siteData'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { MdSchool } from 'react-icons/md'

export function WorkEducation() {
  return (
    <section id="work">
      <h5>Career & Studies</h5>
      <h2>Work Experience & Education</h2>

      <div className="container work-education-container">
        <div className="work-section">
          <h3><HiOutlineBriefcase className="section-icon" /> Work Experience</h3>
          {siteData.workExperience.map((job, idx) => (
            <article key={idx} className="work-item">
              <div className="work-item-header">
                <h4>{job.role}</h4>
                <span className="text-light">{job.company}</span>
                <small className="work-period">{job.period}</small>
              </div>
              <p>{job.description}</p>
            </article>
          ))}
        </div>

        <div className="education-section">
          <h3><MdSchool className="section-icon" /> Education & Certifications</h3>
          {siteData.education.map((edu, idx) => (
            <article key={idx} className="education-item">
              <h4>{edu.degree}</h4>
              <span className="text-light">{edu.institution}</span>
              <small className="work-period">{edu.period}</small>
            </article>
          ))}
          <p className="gained-skills"><strong>Gained skills:</strong> {siteData.gainedSkills}</p>
        </div>
      </div>

      {siteData.additionalInfo && siteData.additionalInfo.length > 0 && (
        <div className="container additional-info">
          <ul>
            {siteData.additionalInfo.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
