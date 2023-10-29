import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./BackgroundImageSlider.css"

const BackgroundImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const backgroundImages = [
    'https://images8.alphacoders.com/374/374276.jpg',
    'https://www.hdwallpapers.in/download/bangkok_high_rise_building_4k_5k_hd-3840x2160.jpg',
  ];

  return (
    <div className="background-image-slider">
      <Slider {...settings}>
        {backgroundImages.map((image, index) => (
          <div key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundImageSlider;
