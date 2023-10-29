import Product from '../../Components/AllProperties/PropProduct';
import { productData } from '../../Components/AllProperties/PropData';
import "./Prop.css";


export default function Prop() {
  const product = productData.map((item) => (
    <Product
      address={item.address}
      url={item.imageurl}
      price={item.price}
      country={item.country}
      room1={item.room1}
      room2={item.room2}

    />
  ));

  return (
    <div className="popProp1">

      <div className='cards1'>{product}</div>

       <div className='number'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
       </div>
    </div>
  );
}