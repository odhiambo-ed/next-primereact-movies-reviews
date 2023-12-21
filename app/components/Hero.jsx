'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative h-[80vh]">
      <Slider {...settings}>
        <div
          className="bg-cover bg-center h-[90vh]"
          style={{ backgroundImage: "url('/images/b1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div
          className="bg-cover bg-center h-[90vh]"
          style={{ backgroundImage: "url('/images/b2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        {/* Add more slides as needed */}
      </Slider>

      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover the Cinematic World
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Explore a vast collection of movies and TV shows at your fingertips.
          </p>
          <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;