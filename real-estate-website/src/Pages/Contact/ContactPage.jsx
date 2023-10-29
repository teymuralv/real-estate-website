import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import PopProp from '../../Components/PopProp/PopProp';

import { Link } from "react-router-dom";
import "./ContactPage.css"

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="background">
        <div className="a2"> 

          <h1>CONTACT US</h1>
          <div className="a1">
            <p><Link to="/">Home /</Link></p>
            <p>Contact us</p>
          </div>

        </div>

      </div>  
      <PopProp/>
    
      <Footer />

    </div>
  );
}
export default ContactPage;
