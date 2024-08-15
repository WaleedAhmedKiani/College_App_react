
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Program from './Components/Program/Program';
import Slider from './Components/Slider/Slider';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/TESTIMONIAL/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
    <Navbar/>
    <Slider/>
    <div className='container'>
    <Title subtitle='Our PROGRAM' title='What We Offer'/>
    <Program/>
    <About/>
    <Title subtitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subtitle='TESTIMONIALS' title='WHAT OUR STUDENTS SAYS'/>
    <Testimonial/>
    <Title subtitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    <Footer/>
    </div>
    
    </div>
    

  );
}

export default App;
