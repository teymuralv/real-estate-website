import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DreamHome from "../../Components/DreamHome/dreamHome";
import { Link } from "react-router-dom";
import "./AboutPage.css"

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="background">
        <div className="a2">

          <h1>ABOUT</h1>
          <div className="a1">
            <p><Link to="/">Home /</Link></p>
            <p>About</p>
          </div>

        </div>

      </div>
      <div className="aboutDreamHome"><DreamHome /></div>
      <div className="aboutFooter"><Footer /></div>
    </div>
  );
}
export default AboutPage;
