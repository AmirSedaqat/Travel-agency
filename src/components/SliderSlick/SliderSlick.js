import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataImage } from "./data";
import "../../Styles/SliderSlick.css";

const SliderSlick = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3500,
        cssEase: "ease-out",
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {dataImage.map((item) => (
                    <div className="slider-content" key={item.title}>
                        <img className="img-slider" src={item.urls} alt={item.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderSlick;
