import './heroSection.css'


export default function heroSection({ active }) {
    return (
        <section className="herosection">
            <div className="heroContent">
                <h1>Welcome to <div className="Red">Empire</div> Cinema</h1>
                <p>Your ultimate destination for the latest and greatest movies. Experience the magic of cinema like never before.</p>
                <a href="Movies.html" className="btn">Explore Movies</a>
            </div>
        </section>
    );
}