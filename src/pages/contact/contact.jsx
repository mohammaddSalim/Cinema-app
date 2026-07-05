import './contact.css'
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';


export default function contact() {
  return (
    <body>
      <Header active={4}/>

        <section className="contactSection">
          <h2 className="sectionTitle">Contact <span className="Red">Us</span></h2>
          <p className="sectionSubtitle">Have a question or feedback? We'd love to hear from you.</p>

          <div className="contactWrapper">

              <div className="contactInfo">

                  <div className="infoCard">
                      <div className="infoIcon"><i className="fa-solid fa-location-dot"></i></div>
                      <div className="infoText">
                          <h4>Main Branch</h4>
                          <p>Hamra District, Beirut, Lebanon</p>
                      </div>
                  </div>

                  <div className="infoCard">
                      <div className="infoIcon"><i className="fa-solid fa-phone"></i></div>
                      <div className="infoText">
                          <h4>Phone</h4>
                          <p>+961 1 234 567</p>
                      </div>
                  </div>

                  <div className="infoCard">
                      <div className="infoIcon"><i className="fa-solid fa-envelope"></i></div>
                      <div className="infoText">
                          <h4>Email</h4>
                          <p>info@empirecinema.lb</p>
                      </div>
                  </div>

                  <div className="infoCard">
                      <div className="infoIcon"><i className="fa-solid fa-clock"></i></div>
                      <div className="infoText">
                          <h4>Working Hours</h4>
                          <p>Daily — 10:00 AM to 12:00 AM</p>
                      </div>
                  </div>

              </div>

              <form className="contactForm">

                  <div className="formRow">
                      <div className="formGroup">
                          <label for="firstName">First Name</label>
                          <input className="formInput" type="text" id="firstName" placeholder="John"/>
                      </div>
                      <div className="formGroup">
                          <label for="lastName">Last Name</label>
                          <input className="formInput" type="text" id="lastName" placeholder="Doe"/>
                      </div>
                  </div>

                  <div className="formGroup">
                      <label for="email">Email</label>
                      <input className="formInput" type="email" id="email" placeholder="john@example.com"/>
                  </div>

                  <div className="formGroup">
                      <label for="subject">Subject</label>
                      <input className="formInput" type="text" id="subject" placeholder="How can we help?"/>
                  </div>

                  <div className="formGroup">
                      <label for="message">Message</label>
                      <textarea className="formInput formTextarea" id="message" placeholder="Write your message here..."></textarea>
                  </div>

                  <button className="btn btnSubmit" type="submit">Send Message</button>

              </form>

          </div>
      </section>
      <Footer />
    </body>
  )
}