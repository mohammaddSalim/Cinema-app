import './contact.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';


export default function contact() {
  return (
    <body>
      <Header active={4}/>

        <section class="contactSection">
          <h2 class="sectionTitle">Contact <span class="Red">Us</span></h2>
          <p class="sectionSubtitle">Have a question or feedback? We'd love to hear from you.</p>

          <div class="contactWrapper">

              <div class="contactInfo">

                  <div class="infoCard">
                      <div class="infoIcon"><i class="fa-solid fa-location-dot"></i></div>
                      <div class="infoText">
                          <h4>Main Branch</h4>
                          <p>Hamra District, Beirut, Lebanon</p>
                      </div>
                  </div>

                  <div class="infoCard">
                      <div class="infoIcon"><i class="fa-solid fa-phone"></i></div>
                      <div class="infoText">
                          <h4>Phone</h4>
                          <p>+961 1 234 567</p>
                      </div>
                  </div>

                  <div class="infoCard">
                      <div class="infoIcon"><i class="fa-solid fa-envelope"></i></div>
                      <div class="infoText">
                          <h4>Email</h4>
                          <p>info@empirecinema.lb</p>
                      </div>
                  </div>

                  <div class="infoCard">
                      <div class="infoIcon"><i class="fa-solid fa-clock"></i></div>
                      <div class="infoText">
                          <h4>Working Hours</h4>
                          <p>Daily — 10:00 AM to 12:00 AM</p>
                      </div>
                  </div>

              </div>

              <form class="contactForm">

                  <div class="formRow">
                      <div class="formGroup">
                          <label for="firstName">First Name</label>
                          <input class="formInput" type="text" id="firstName" placeholder="John"/>
                      </div>
                      <div class="formGroup">
                          <label for="lastName">Last Name</label>
                          <input class="formInput" type="text" id="lastName" placeholder="Doe"/>
                      </div>
                  </div>

                  <div class="formGroup">
                      <label for="email">Email</label>
                      <input class="formInput" type="email" id="email" placeholder="john@example.com"/>
                  </div>

                  <div class="formGroup">
                      <label for="subject">Subject</label>
                      <input class="formInput" type="text" id="subject" placeholder="How can we help?"/>
                  </div>

                  <div class="formGroup">
                      <label for="message">Message</label>
                      <textarea class="formInput formTextarea" id="message" placeholder="Write your message here..."></textarea>
                  </div>

                  <button class="btn btnSubmit" type="submit">Send Message</button>

              </form>

          </div>
      </section>
      <Footer />
    </body>
  )
}