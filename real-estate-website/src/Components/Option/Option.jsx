import "./Option.css"
import newProperties from "../../Assets/options/newProperties.png";
import agent from "../../Assets/options/agent.png";
import building from "../../Assets/options/building.png";
import house from "../../Assets/options/house.png";


function Option() {
    return (
        <div className="option">
            <div className="firstDiv">
                <div className="box">
                    <img src={newProperties} alt="" />
                    <p>New Properties</p>
                </div>
                <div className="box">
                    <img src={agent} alt="" />
                    <p>Contact Agent</p>
                </div>
            </div>




            <div className="secondDiv">
                <div className="box">
                    <img src={building} alt="" />
                    <p>Building for Sale</p>
                </div>
                <div className="box">
                    <img src={house} alt="" />
                    <p>House for Sale</p>
                </div>
            </div>

        </div>
    )
}
export default Option