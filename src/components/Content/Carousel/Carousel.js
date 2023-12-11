import clsx from "clsx";
import React from "react";
import Slider from "react-slick";

import styles from "./Carousel.module.scss";
import "./Custom.scss";
function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 4000,
        cssEase: "ease",
    };
    return (
        <div className={clsx(styles.container)}>
            <div>
                <Slider className="Carousel_main" {...settings}>
                    <div>
                        <img
                            className={clsx(styles.image)}
                            src="images/slider_1.png"
                            alt="Ảnh slider 1 PET SHOP"
                        />
                    </div>
                    <div>
                        <img
                            className={clsx(styles.image)}
                            src="images/slider_2.png"
                            alt="Ảnh slider 2 PET SHOP"
                        />
                    </div>
                    <div>
                        <img
                            className={clsx(styles.image)}
                            src="images/slider-show-3.png"
                            alt="Ảnh slider 3 PET SHOP"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Carousel;
