import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { siteData } from '../../config/siteData'

export function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    const { emailjsServiceId, emailjsTemplateId, emailjsPublicKey } = siteData
    if (!emailjsServiceId || emailjsServiceId === 'your_service_id') {
      alert('Contact form is not configured yet. Please add your EmailJS keys in src/config/siteData.js')
      return
    }
    emailjs.sendForm(emailjsServiceId, emailjsTemplateId, form.current, emailjsPublicKey)
      .then((result) => {
        console.log(result.text)
        e.target.reset()
      }, (error) => {
        console.error(error.text)
      })
  }

  const whatsappLink = `https://wa.me/${siteData.whatsappNumber.replace(/\s/g, '')}`

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMailOutline className='contact-option-icon' />
            <h4>Email</h4>
            <h5>{siteData.email}</h5>
            <a href={`mailto:${siteData.email}`} target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='contact-option-icon' />
            <h4>WhatsApp</h4>
            <h5>{siteData.whatsappDisplay}</h5>
            <a href={whatsappLink} target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required
          />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder="Your Message" required
          ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}