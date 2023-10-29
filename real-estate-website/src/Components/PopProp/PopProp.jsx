import "./PopProp.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from '../../Components/PopProp/Product';
import { productData, responsive } from '../../Components/PopProp/data';

export default function PopProp() {
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
    <div className="popProp">
      <div className="propUp">
        <h1>POPULAR PROPERTIES</h1>
        <a href="https://www.instagram.com/timaalv/">View all properties</a>
      </div>
      <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}

      >
        {product}
      </Carousel>
    </div>
  );
}