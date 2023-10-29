import bath from "../../Assets/room/bath.png";
import bed from "../../Assets/room/bed.png";

export default function Product(props) {
  return (
    <div className="card1">

      <img className="product--image1" src={props.url} alt="product image" />

      <div className="cardText1">
        <p className="price1">{props.price}</p>
        <p className="address1">{props.address}</p>
        <p className="country1">{props.country}</p>
        <div className="roomMain1">
          <div className="roomBlock1">
            <img src={bed} alt="" />
            <p className="room1">{props.room1}</p>
          </div>
          <div className="roomBlock1">
            <img src={bath} alt="" />
            <p className="room1">{props.room2}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
