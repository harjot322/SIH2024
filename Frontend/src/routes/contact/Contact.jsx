import './contact.css'

function Contact() {
  return (
    <div className="contact-container">
            <div className="contact-content">
                <div className="contact-left">
                    <h1>Feel Free to Contact...</h1>
                    <p>Agrovision Always Available.</p>
                    <a href="tel:+9190283XXXXX" className="contact-phone">Contact us at +91 90283XXXXX</a>
                </div>
                <div className="contact-right">
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send message</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contact