import './App.css';
import Hero from './componets/Hero';
import Navbar from './componets/Navbar';
import Location from './componets/Location';
import Search from './Search';
import Selects from './componets/Selects';
import Cursrosol from './componets/Cursrosol';
import Footer from './componets/Footer';


function App() {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Location/>
      <Search/>
      <Selects/>
      <Cursrosol/>
      <Footer/>
    </div>
  );
}
export default App;
