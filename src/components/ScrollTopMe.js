import React, { useState, useEffect } from "react";
// Styles
import '../Styles/ScrollTopMe.css';
import { FaAngleUp } from "react-icons/fa";
const ScrollTopMe = () => {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return <div className="container">{showBtn && <FaAngleUp className="icon-position icon-styles" onClick={goTop} />}</div>;
};

export default ScrollTopMe;
