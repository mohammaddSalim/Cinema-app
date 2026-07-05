import './aboutSection.css';


export default function aboutSection() {
  return (
    <section className="aboutSection">
        <div className="aboutContent">
            <h2 className="sectionTitle">About <span className="Red">Us</span></h2>
            <p>Empire Cinema has been delivering unforgettable movie experiences since 2005. We offer state-of-the-art screens, premium sound systems, and comfortable seating — all designed to bring you closer to the stories you love. From blockbuster hits to indie gems, our curated selection ensures there is always something for everyone. We are committed to making every visit special, with top-tier service and a passion for cinema at the heart of everything we do.</p>
            <a href="About.html" className="btn">Learn More About Us</a>
        </div>
    </section>
  );
}