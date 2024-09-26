import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'

function App() {
 
  //CLICK UN BOTTONE SU NAV E CI PORTA ALLA SEZIONE SCELTA
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('nav').offsetHeight;
    const sectionPosition = section.offsetTop - navHeight;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
  }

  return (
    <>
      <nav>
        <ul>
          <li><button onClick={() => scrollToSection('intro')}>Introduzione</button></li>
          <li><button onClick={() => scrollToSection('crescita')}>Crescita</button></li>
          <li><button onClick={() => scrollToSection('condizioni di vita')}>Condizioni</button></li>
          <li><button onClick={() => scrollToSection('innovazioni')}>Innovazioni</button></li>
          <li><button onClick={() => scrollToSection('immigrazione')}>Immigrazione</button></li>
          {/* <li><button onClick={() => scrollToSection('gallery')}>Galleria</button></li> */}
        </ul>
      </nav>
      <Navbar />
    </>
  )
}

export default App
