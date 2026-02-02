import { PortfolioProj } from '../../services/portfolio.service'

export function Portfolio() {


  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
          PortfolioProj.map(({ id, img, title, github, demo }) => {
            return (
              <article key={id} className="portfolio-item">
                <div className="portfolio-item-img">
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}