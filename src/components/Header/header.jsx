import './header.css';
import { Link } from 'react-router-dom';

export default function Header({ active }) {
    return (
        <header>
            <nav className="navbar">
                <div className="navBrand">
                    <img src="/src/assests/logo.png" />
                    <span className="navTitle"><h2>Empire Cinema</h2></span>
                </div>

                <div className="humbergur">=</div>
                <ul className="navLinks">
                    <li className={active == 1 ? "active" : ""}><Link to="/">Home</Link></li>
                    <li className={active == 2 ? "active" : ""}><Link to="/about">About Us</Link></li>
                    <li className={active == 3 ? "active" : ""}><Link to="/movies">Movies</Link></li>
                    <li className={active == 4 ? "active" : ""}><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
