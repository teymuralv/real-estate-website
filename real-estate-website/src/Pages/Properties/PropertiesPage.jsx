import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Prop from "../../Components/AllProperties/Prop";
import PopProp from '../../Components/PopProp/PopProp';
import { Link } from "react-router-dom";
import "./PropertiesPage.css"

function PropertiesPage() {
  return (
    <div>
      <Navbar />
      <div className="background">
        <div className="a2">

          <h1>PROPERTIES</h1>
          <div className="a1">
            <p><Link to="/">Home /</Link></p>
            <p>Properties</p>
          </div>

        </div>

      </div>
      <Prop />
      <div className="page2PopProp"><PopProp /></div>
      <div className="page2Footer"><Footer /></div>
    </div>
  );
}
export default PropertiesPage;
