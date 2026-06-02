import './latestMovies.css';


export default function latestMovies() {
  return (
        <section class="latestMovies">
        <h2 class="sectionTitle">Latest <span class="Red">Movies</span></h2>
        <div class="moviesGrid">
            <div class="movieCard">
                <div class="moviePoster">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLZ9i5EiIxoEQhirfmZcJ_vL2sbJ6OQuQ9RK67BDP5Q&s=10" alt="Movie Poster"/>
                </div>
                <div class="movieInfo">
                    <h3>The Lost Kingdom</h3>
                    <p class="movieGenre">Action · Adventure</p>
                    <a href="#" class="btn btnCard">Buy Ticket</a>
                </div>
            </div>
            <div class="movieCard">
                <div class="moviePoster">
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d6/Dark_Horizon.jpg" alt="Movie Poster"/>
                </div>
                <div class="movieInfo">
                    <h3>Dark Horizon</h3>
                    <p class="movieGenre">Thriller · Sci-Fi</p>
                    <a href="#" class="btn btnCard">Buy Ticket</a>
                </div>
            </div>
            <div class="movieCard">
                <div class="moviePoster">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS597XiOqP2is9CR28ws3wsO4D2H1aRyzwbsYccx8tVKw&s=10" alt="Movie Poster"/>
                </div>
                <div class="movieInfo">
                    <h3>The Manager</h3>
                    <p class="movieGenre">Drama · Romance</p>
                    <a href="#" class="btn btnCard">Buy Ticket</a>
                </div>
            </div>
            <div class="movieCard">
                <div class="moviePoster">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-KodkFiiQRusoes6r-Hx7ajHAlPEZLKz4evgs4Y9rqdp_Lvtolifhjog&s=10" alt="Movie Poster"/>
                </div>
                <div class="movieInfo">
                    <h3>Harry Potter</h3>
                    <p class="movieGenre">Action · Mystery</p>
                    <a href="#" class="btn btnCard">Buy Ticket</a>
                </div>
            </div>
        </div>
        <div class="sectionFooter">
            <a href="Movies.html" class="btn">View All Movies</a>
        </div>
    </section>

  );
}