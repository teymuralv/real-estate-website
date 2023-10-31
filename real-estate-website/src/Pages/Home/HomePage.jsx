import './HomePage.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Option from '../../Components/Option/Option';
import PopProp from '../../Components/PopProp/PopProp';
import Agents from '../../Components/OurAgents/Agents';
import DreamHome from '../../Components/DreamHome/dreamHome';
import BackgroundImageSlider from "../../Components/BackgroundSlider/BackgroundImageSlider";
function HomePage() {
  return (
    <div className="main">
      <div className='home'>

        <Navbar />

        <div className='search'>


          <h1 >FIND A PERFECT DREAM HOUSE</h1>

          <div className='searchBlock'>
            <input className='searchText' type="text" placeholder='Your ZIP code or City. e.g. Baku' />
            <button className='searchButton'>Search</button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam enim pariatur similiq velnisi qui reprehenderit totam? Quod maiores.
          </p>
          <a href='https://www.instagram.com/timaalv/'>
            View Properties	→
          </a>

        </div>

        <BackgroundImageSlider />
        <Option />
      </div>
      <div className='homePopProp'><PopProp /></div>
      <div className='homeDreamHome'><DreamHome /></div>
      <div className='homeFooter'><Footer /></div>
      <div className='homeAgents'><Agents /></div>




    </div>
  );
}
export default HomePage;
