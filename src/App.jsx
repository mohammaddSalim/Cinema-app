import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Movies from './pages/movies/movies';
import Contact from './pages/contact/contact';

function App() {
  return (
    
  <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default App
