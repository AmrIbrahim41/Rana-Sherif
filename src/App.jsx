import { useContext, useEffect } from 'react';
import './App.css'
import Nav from './components/NavBar/Nav'
import Home from './Sections/Home/Home'
import About from './Sections/About_Me/About'
import Services from './Sections/Services/Services'
import Experiences from './Sections/Experiences/Experiences'
import Footer from './components/Footer/Footer'
import { ThemeContext } from './Context/ThemeContext';
import ThemeToggleButton from './components/ThemeToggle/ThemeToggleButton';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Services />
      <Experiences />
      <Footer />
      <ThemeToggleButton />
    </>
  )
}

export default App
