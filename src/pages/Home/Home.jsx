import './home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import HeroSection from '../../components/HeroSection/heroSection'
import LatestMovies from '../../components/LatestMovies/latestMovies';
import AboutSection from '../../components/AboutSection/aboutSection';

export default function Home() {
  return (
    <body>
      <Header active={1}/>
      <HeroSection />
      <LatestMovies />
      <AboutSection />
      <Footer />
    </body>
  );
}