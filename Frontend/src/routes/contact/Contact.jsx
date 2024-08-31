import './contact.css'

function Contact() {
  return (
    <div className="contact-us-container contact-us-page"> {/* Added contact-us-page */}
      <div className="contact-left">
        <h1>Feel Free to Contact...</h1>
        <p>AgroVision</p>
        <p className="contact-info">
          Contact us at <a href="tel:+9190283XXXXX">+91 90283XXXXX</a>
        </p>
      </div>
      <div className="contact-right">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>

  )
}

export default Contact