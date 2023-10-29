import bath from "../../Assets/room/bath.png";
import bed from "../../Assets/room/bed.png";

export default function Product(props) {
  return (
    <div className="card">

      <img className="product--image" src={props.url} alt="product image" />

      <div className="cardText">
        <p className="price">{props.price}</p>
        <p className="address">{props.address}</p>
        <p className="country">{props.country}</p>
        <div className="roomMain">
          <div className="roomBlock">
            <img src={bed} alt="" />
            <p className="room">{props.room1}</p>
          </div>
          <div className="roomBlock">
            <img src={bath} alt="" />
            <p className="room">{props.room2}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
