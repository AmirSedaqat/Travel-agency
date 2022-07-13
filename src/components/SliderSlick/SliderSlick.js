import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataImage } from "./data";
import "../../Styles/SliderSlick.css";
import { Typography } from "@mui/material";

const SliderSlick = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };
    return (
        <div className="slider-container">
            <Typography variant="h3" component="h1">
                Beautiful Iran
            </Typography>
            <Slider {...settings}>
                {dataImage.map((item) => (
                    <div className="slider-content" key={item.title}>
                        <img className="imgSlider" src={item.urls} alt={item.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderSlick;
