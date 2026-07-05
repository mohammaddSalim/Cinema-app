import './movies.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';


export default function Movies() {
  return (
    <body>
      <Header active={3}/>
        <div className="container">
        <section className="moviesSection">
            <h2 className="sectionTitle">Our <span className="Red">Movies</span></h2>
            <div className="moviesGrid">

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" alt="The Dark Knight"/>
                    </div>
                    <div className="movieInfo">
                        <h3>The Dark Knight</h3>
                        <p className="movieGenre">Action · Crime</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" alt="Inception"/>
                    </div>
                    <div className="movieInfo">
                        <h3>Inception</h3>
                        <p className="movieGenre">Sci-Fi · Thriller</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" alt="Avengers: Endgame"/>
                    </div>
                    <div className="movieInfo">
                        <h3>Avengers: Endgame</h3>
                        <p className="movieGenre">Action · Adventure</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="Spider-Man: No Way Home"/>
                    </div>
                    <div className="movieInfo">
                        <h3>Spider-Man: No Way Home</h3>
                        <p className="movieGenre">Action · Adventure</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/250px-Top_Gun_Maverick_Poster.jpg" alt="Top Gun: Maverick"/>
                    </div>
                    <div className="movieInfo">
                        <h3>Top Gun: Maverick</h3>
                        <p className="movieGenre">Action · Drama</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="Oppenheimer"/>
                    </div>
                    <div className="movieInfo">
                        <h3>Oppenheimer</h3>
                        <p className="movieGenre">Drama · History</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg" alt="The Batman"/>
                    </div>
                    <div className="movieInfo">
                        <h3>The Batman</h3>
                        <p className="movieGenre">Action · Mystery</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" alt="Dune: Part Two"/>
                    </div>
                    <div className="movieInfo">
                        <h3>Dune: Part Two</h3>
                        <p className="movieGenre">Sci-Fi · Adventure</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" alt="John Wick: Chapter 4"/>
                    </div>
                    <div className="movieInfo">
                        <h3>John Wick: Chapter 4</h3>
                        <p className="movieGenre">Action · Thriller</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" alt="Avatar: The Way of Water"/>
                    </div>
                    <div className="movieInfo">
                        <h3>Avatar: The Way of Water</h3>
                        <p className="movieGenre">Sci-Fi · Adventure</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="Interstellar"/>
                    </div>
                    <div className="movieInfo">
                        <h3>Interstellar</h3>
                        <p className="movieGenre">Sci-Fi · Drama</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div className="movieCard">
                    <div className="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" alt="Joker"/>
                    </div>
                    <div className="movieInfo">
                        <h3>Joker</h3>
                        <p className="movieGenre">Crime · Drama</p>
                        <a href="#" className="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

            </div>
        </section>
        </div>


      <Footer />
    </body>
  )
}