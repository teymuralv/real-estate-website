import "./Agents.css"
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import linkedin from "../../Assets/icons/linkedin.png";
import twitter from "../../Assets/icons/twitter.png";
import agent1 from "../../Assets/photo/agent1.webp";
import agent2 from "../../Assets/photo/agent2.jpg";
import agent3 from "../../Assets/photo/agent3.webp";

 
function Agents() {
    return (
        <div className="agents">

            <div className="agentsUp">
                <h1>OUR AGENTS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit totam? Quod maiores.</p>
            </div>

            <div className="agentsDown">
                <div className="cardName">
                    <img className="photo" src={agent1}  alt="" />
                    <h3>James Doe</h3>
                    <p className="p1">Real Estate Agent</p>
                    <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    <div className="iconsz">
                        <div><a href="https://www.instagram.com/timaalv/"><img src={instagram} alt="instagram" /></a></div>
                        <div><a href="https://www.instagram.com/timaalv/"><img src={twitter} alt="twitter" /></a></div>
                        <div><a href="https://www.instagram.com/timaalv/"><img src={facebook} alt="facebook" /></a></div>
                        <div><a href="https://www.instagram.com/timaalv/"><img src={linkedin} alt="linkedin" /></a></div>
                    </div>
                </div>

                <div className="cardName">
                    <img className="photo" src={agent2}  alt="" />
                    <h3 >Jean Smith</h3>
                    <p className="p1">Real Estate Agent</p>
                    <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    <div className="iconsz">
                        <div><a href="https://www.instagram.com/timaalv/"><img src={instagram} alt="instagram" /></a></div>
                        <div><a href="https://www.instagram.com/timaalv/"><img src={twitter} alt="twitter" /></a></div>
                        <div><a href="https://www.instagram.com/timaalv/"><img src={facebook} alt="facebook" /></a></div>
                        <div><a href="https://www.instagram.com/timaalv/"><img src={linkedin} alt="linkedin" /></a></div>
                    </div>

                </div>

                <div className="cardName">
                    <img className="photo" src={agent3} alt="" />
                    <h3 >Alicia Huston</h3>
                    <p className="p1">Real Estate Agent</p>
                    <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    <div className="iconsz">
                        <div><a href="https://www.instagram.com/timaalv/"><img src={instagram} alt="instagram" /></a></div>
                        <div><a href="https://www.instagram.com/timaalv/"><img src={twitter} alt="twitter" /></a></div>
                        <div><a href="https://www.instagram.com/timaalv/"><img src={facebook} alt="facebook" /></a></div>
                        <div><a href="https://www.instagram.com/timaalv/"><img src={linkedin} alt="linkedin" /></a></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Agents