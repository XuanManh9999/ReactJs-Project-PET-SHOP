import React from "react";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDongSign,
    faMagnifyingGlassPlus,
    faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Slide.module.scss";
import "./overwrite.scss";
import QuickProducts from "../QuickProducts/QuickProducts";
function Slide({ data = [], title = "Sản phẩm nổi bật" }) {
    const [quickView, setQuickView] = useState(false);
    const getIdProduct = useRef();
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        speed: 800,
        autoplaySpeed: 4000,
        cssEase: "ease",
    };
    const handleClick = () => {
        scroll.scrollToTop({ duration: 100 });
    };

    const hendleQuickView = (id) => {
        getIdProduct.current = id;
        setQuickView((pre) => !pre);
    };

    return (
        <>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.slide_top)}>
                    <h1 className={clsx(styles.title)}>{title}</h1>
                </div>
                <div className={clsx(styles.container_slider)}>
                    <div className={clsx(styles.list_item)}>
                        <Slider className="slide_main" {...settings}>
                            {/* Item 1 */}
                            {data &&
                                data.length > 0 &&
                                data.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={clsx(styles.item)}
                                        >
                                            <Link
                                                onClick={handleClick}
                                                to={`/ProductDetail/${item.id}/${item.role}`}
                                            >
                                                <figure>
                                                    <img
                                                        className={clsx(
                                                            styles.image
                                                        )}
                                                        src={item.image}
                                                        alt={item.name}
                                                    />
                                                </figure>
                                                <div
                                                    className={clsx(
                                                        styles.content
                                                    )}
                                                >
                                                    <p
                                                        className={clsx(
                                                            styles.desc,
                                                            "line-clamp-2"
                                                        )}
                                                    >
                                                        {item.name}
                                                    </p>
                                                    <div
                                                        className={clsx(
                                                            styles.price
                                                        )}
                                                    >
                                                        <p
                                                            className={clsx(
                                                                styles.price_new
                                                            )}
                                                        >
                                                            {item.price}
                                                            <FontAwesomeIcon
                                                                className={clsx(
                                                                    styles.icon_price_new
                                                                )}
                                                                icon={
                                                                    faDongSign
                                                                }
                                                            />
                                                        </p>
                                                        <p
                                                            className={clsx(
                                                                styles.price_old
                                                            )}
                                                        >
                                                            {item.salePrice}
                                                            <FontAwesomeIcon
                                                                className={clsx(
                                                                    styles.icon_price_old
                                                                )}
                                                                icon={
                                                                    faDongSign
                                                                }
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div
                                                className={clsx(
                                                    styles.box_modal_buy
                                                )}
                                            >
                                                <button
                                                    className={clsx(
                                                        styles.btn_view
                                                    )}
                                                    onClick={() => {
                                                        hendleQuickView(
                                                            item.id
                                                        );
                                                    }}
                                                >
                                                    <i>
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faMagnifyingGlassPlus
                                                            }
                                                        />
                                                    </i>
                                                    <span>Xem nhanh</span>
                                                </button>
                                                <button
                                                    className={clsx(
                                                        styles.btn_buy_now
                                                    )}
                                                >
                                                    <i>
                                                        <FontAwesomeIcon
                                                            icon={faCartPlus}
                                                        />
                                                    </i>
                                                    <span>Mua ngay</span>
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
            {quickView ? (
                <QuickProducts
                    id={getIdProduct.current}
                    hendleQuickViewProduct={hendleQuickView}
                />
            ) : (
                ""
            )}
        </>
    );
}

export default Slide;
