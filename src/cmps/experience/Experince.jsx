import { BsPatchCheckFill } from 'react-icons/bs'
import { siteData } from '../../config/siteData'

export function Experince() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>

      <div className="container experience-container">
        {siteData.technicalSkills.map((group, idx) => (
          <div key={idx} className={idx % 2 === 0 ? 'experince-frontend' : 'experince-backend'}>
            <h3>{group.category}</h3>
            <div className="experience-conent">
              {group.items.map((item, i) => (
                <article key={i} className="experience-details">
                  <BsPatchCheckFill className="experience-details-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-light">{item.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
