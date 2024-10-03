import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./TestimonialCard";
import testimonials from "../store/testimonials.json";

function Testimonials() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#1d1d1d] p-10">
        <h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-500 mb-4 ">
          Testimonials
        </h1>
        <p className="text-center text-xl text-gray-300 mb-6">
          Here are some of the people who have been using our tool.
        </p>
      </div>
      <div className="overflow-hidden">
        <Slider {...settings} className="bg-[#1d1d1d] py-10 px-4">
          {testimonials.map((item) => (
            <div key={item.id}>
              <Card item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Testimonials;
