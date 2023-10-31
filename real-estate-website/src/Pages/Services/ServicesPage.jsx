import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import "./ServicesPage.css"
import Agents from "../../Components/OurAgents/Agents";



function ServicesPage() {
    return (
      <div>
        <Navbar/>
        <div className="background">
        <div className="a2"> 

          <h1>SERVICES</h1>
          <div className="a1">
            <p><Link to="/">Home /</Link></p>
            <p>Services</p>
          </div>

        </div>
        
      </div>
      <div className="ServicesAgents"><Agents /></div> 
      <div className="ServicesFooter"><Footer /></div>
      </div>
    );
  }
  export default ServicesPage;
  