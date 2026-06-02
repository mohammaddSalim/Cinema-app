import './heroSection.css'


export default function heroSection({ active }) {
    return (
        <section class="herosection">
            <div class="heroContent">
                <h1>Welcome to <div class="Red">Empire</div> Cinema</h1>
                <p>Your ultimate destination for the latest and greatest movies. Experience the magic of cinema like never before.</p>
                <a href="Movies.html" class="btn">Explore Movies</a>
            </div>
        </section>
    );
}