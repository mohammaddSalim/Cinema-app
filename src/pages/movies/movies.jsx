import './movies.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';


export default function Movies() {
  return (
    <body>
      <Header active={3}/>
        <div class="container">
        <section class="moviesSection">
            <h2 class="sectionTitle">Our <span class="Red">Movies</span></h2>
            <div class="moviesGrid">

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" alt="The Dark Knight"/>
                    </div>
                    <div class="movieInfo">
                        <h3>The Dark Knight</h3>
                        <p class="movieGenre">Action · Crime</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" alt="Inception"/>
                    </div>
                    <div class="movieInfo">
                        <h3>Inception</h3>
                        <p class="movieGenre">Sci-Fi · Thriller</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" alt="Avengers: Endgame"/>
                    </div>
                    <div class="movieInfo">
                        <h3>Avengers: Endgame</h3>
                        <p class="movieGenre">Action · Adventure</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="Spider-Man: No Way Home"/>
                    </div>
                    <div class="movieInfo">
                        <h3>Spider-Man: No Way Home</h3>
                        <p class="movieGenre">Action · Adventure</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/250px-Top_Gun_Maverick_Poster.jpg" alt="Top Gun: Maverick"/>
                    </div>
                    <div class="movieInfo">
                        <h3>Top Gun: Maverick</h3>
                        <p class="movieGenre">Action · Drama</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="Oppenheimer"/>
                    </div>
                    <div class="movieInfo">
                        <h3>Oppenheimer</h3>
                        <p class="movieGenre">Drama · History</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg" alt="The Batman"/>
                    </div>
                    <div class="movieInfo">
                        <h3>The Batman</h3>
                        <p class="movieGenre">Action · Mystery</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" alt="Dune: Part Two"/>
                    </div>
                    <div class="movieInfo">
                        <h3>Dune: Part Two</h3>
                        <p class="movieGenre">Sci-Fi · Adventure</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" alt="John Wick: Chapter 4"/>
                    </div>
                    <div class="movieInfo">
                        <h3>John Wick: Chapter 4</h3>
                        <p class="movieGenre">Action · Thriller</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" alt="Avatar: The Way of Water"/>
                    </div>
                    <div class="movieInfo">
                        <h3>Avatar: The Way of Water</h3>
                        <p class="movieGenre">Sci-Fi · Adventure</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="Interstellar"/>
                    </div>
                    <div class="movieInfo">
                        <h3>Interstellar</h3>
                        <p class="movieGenre">Sci-Fi · Drama</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

                <div class="movieCard">
                    <div class="moviePoster">
                        <img src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" alt="Joker"/>
                    </div>
                    <div class="movieInfo">
                        <h3>Joker</h3>
                        <p class="movieGenre">Crime · Drama</p>
                        <a href="#" class="btn btnCard">Buy Ticket</a>
                    </div>
                </div>

            </div>
        </section>
        </div>


      <Footer />
    </body>
  )
}