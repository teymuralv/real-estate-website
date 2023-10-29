import "./Footer.css"
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import linkedin from "../../Assets/icons/linkedin.png";
import pinterest from "../../Assets/icons/pinterest.png";
import tiktok from "../../Assets/icons/tiktok.png";
import twitter from "../../Assets/icons/twitter.png";

function Footer() {
    return (
        <div className="mainFooter">
            <div className="footer">

                <div className="up">
                    <p>Be a part of our growing real state agents</p>
                    <a href="https://www.instagram.com/timaalv/"><div>Apply for Real Estate agent</div></a>
                </div>

                <div className="down">
                    <div className="div1">
                        <p>CONTACT</p>
                        <ul>
                            <li>43 Raymouth Rd. Baltemoer, London 3910</li>
                            <li>+1(123)-456-7890</li>
                            <li>+1(123)-456-7890</li>
                            <li>teymur2307@gmail.com</li>
                        </ul>
                    </div>
                    <div className="div2">
                        <p>SOURCES</p>
                        <div className="list">
                            <ul className="list1">
                                <li>About us</li>
                                <li>Services</li>
                                <li>Vision</li>
                                <li>Mission</li>
                                <li>Terms</li>
                                <li>Privacy</li>
                            </ul>
                            <ul>
                                <li>Partners</li>
                                <li>Business</li>
                                <li>Careers</li>
                                <li>Blog</li>
                                <li>FAQ</li>
                                <li>Creative</li>
                            </ul>
                        </div>
                    </div>
                    <div className="div3">
                        <p>LINKS</p>
                        <ul>
                            <li>Our Vision</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                        <div className="icons">
                            <div className="div1"><a href="https://www.instagram.com/timaalv/"><img src={instagram} alt="instagram" /></a></div>
                            <div><a href="https://www.instagram.com/timaalv/"><img src={twitter} alt="twitter" /></a></div>
                            <div><a href="https://www.instagram.com/timaalv/"><img src={facebook} alt="facebook" /></a></div>
                            <div><a href="https://www.instagram.com/timaalv/"><img src={linkedin} alt="linkedin" /></a></div>
                            <div><a href="https://www.instagram.com/timaalv/"><img src={pinterest} alt="pinterest" /></a></div>
                            <div><a href="https://www.instagram.com/timaalv/"><img src={tiktok} alt="tiktok" /></a></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Footer;