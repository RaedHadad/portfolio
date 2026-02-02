import { useEffect } from 'react'
import { siteData } from './config/siteData'
import { Header } from './cmps/header/Header'
import { Nav } from './cmps/nav/Nav'
import { About } from './cmps/about/About'
import { Experince } from './cmps/experience/Experince'
import { WorkEducation } from './cmps/work/WorkEducation'
import { Portfolio } from './cmps/portfolio/Portfolio'
import { Contact } from './cmps/contact/Contact'
import { Footer } from './cmps/Footer'
import { Services } from './cmps/Services'

export default function App() {
  useEffect(() => {
    document.title = siteData.pageTitle
  }, [])

  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experince />
      <WorkEducation />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

