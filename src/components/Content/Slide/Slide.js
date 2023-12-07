import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDongSign,
    faMagnifyingGlassPlus,
    faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Slide.module.scss";
import "./overwrite.scss";
function Slide({ data, title = "Sản phẩm nổi bật" }) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "ease",
    };
    return (
        <>
            <div className={clsx(styles.slide_top)}>
                <h1 className={clsx(styles.title)}>{title}</h1>
            </div>
            <div className={clsx(styles.container_slider)}>
                <div className={clsx(styles.list_item)}>
                    <Slider className="slide_main" {...settings}>
                        {/* Item 1 */}
                        <Link to={""}>
                            <div className={clsx(styles.item)}>
                                <figure>
                                    <img
                                        className={clsx(styles.image)}
                                        src="images/precaten-milk.webp"
                                        alt=""
                                    />
                                </figure>
                                <div className={clsx(styles.content)}>
                                    <p
                                        className={clsx(
                                            styles.desc,
                                            "line-clamp-2"
                                        )}
                                    >
                                        Sữa bột cho chó mèo 110g Dr.Kyan
                                        Precanten
                                    </p>
                                    <div className={clsx(styles.price)}>
                                        <p className={clsx(styles.price_new)}>
                                            50.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_new
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                        <p className={clsx(styles.price_old)}>
                                            100.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_old
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className={clsx(styles.box_modal_buy)}>
                                    <button className={clsx(styles.btn_view)}>
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlassPlus}
                                            />
                                        </i>
                                        <span>Xem nhanh</span>
                                    </button>
                                    <button
                                        className={clsx(styles.btn_buy_now)}
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
                        </Link>
                        {/* Item 2 */}
                        <Link to={""}>
                            <div className={clsx(styles.item)}>
                                <figure>
                                    <img
                                        className={clsx(styles.image)}
                                        src="images/precaten-milk.webp"
                                        alt=""
                                    />
                                </figure>
                                <div className={clsx(styles.content)}>
                                    <p
                                        className={clsx(
                                            styles.desc,
                                            "line-clamp-2"
                                        )}
                                    >
                                        Sữa bột cho chó mèo 110g Dr.Kyan
                                        Precanten
                                    </p>
                                    <div className={clsx(styles.price)}>
                                        <p className={clsx(styles.price_new)}>
                                            50.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_new
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                        <p className={clsx(styles.price_old)}>
                                            100.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_old
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className={clsx(styles.box_modal_buy)}>
                                    <button className={clsx(styles.btn_view)}>
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlassPlus}
                                            />
                                        </i>
                                        <span>Xem nhanh</span>
                                    </button>
                                    <button
                                        className={clsx(styles.btn_buy_now)}
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
                        </Link>
                        {/* Item 3 */}
                        <Link to={""}>
                            <div className={clsx(styles.item)}>
                                <figure>
                                    <img
                                        className={clsx(styles.image)}
                                        src="images/precaten-milk.webp"
                                        alt=""
                                    />
                                </figure>
                                <div className={clsx(styles.content)}>
                                    <p
                                        className={clsx(
                                            styles.desc,
                                            "line-clamp-2"
                                        )}
                                    >
                                        Sữa bột cho chó mèo 110g Dr.Kyan
                                        Precanten
                                    </p>
                                    <div className={clsx(styles.price)}>
                                        <p className={clsx(styles.price_new)}>
                                            50.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_new
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                        <p className={clsx(styles.price_old)}>
                                            100.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_old
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className={clsx(styles.box_modal_buy)}>
                                    <button className={clsx(styles.btn_view)}>
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlassPlus}
                                            />
                                        </i>
                                        <span>Xem nhanh</span>
                                    </button>
                                    <button
                                        className={clsx(styles.btn_buy_now)}
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
                        </Link>
                        {/* Item 4 */}
                        <Link to={""}>
                            <div className={clsx(styles.item)}>
                                <figure>
                                    <img
                                        className={clsx(styles.image)}
                                        src="images/precaten-milk.webp"
                                        alt=""
                                    />
                                </figure>
                                <div className={clsx(styles.content)}>
                                    <p
                                        className={clsx(
                                            styles.desc,
                                            "line-clamp-2"
                                        )}
                                    >
                                        Sữa bột cho chó mèo 110g Dr.Kyan
                                        Precanten
                                    </p>
                                    <div className={clsx(styles.price)}>
                                        <p className={clsx(styles.price_new)}>
                                            50.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_new
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                        <p className={clsx(styles.price_old)}>
                                            100.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_old
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className={clsx(styles.box_modal_buy)}>
                                    <button className={clsx(styles.btn_view)}>
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlassPlus}
                                            />
                                        </i>
                                        <span>Xem nhanh</span>
                                    </button>
                                    <button
                                        className={clsx(styles.btn_buy_now)}
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
                        </Link>
                        {/* Item 5 */}
                        <Link to={""}>
                            <div className={clsx(styles.item)}>
                                <figure>
                                    <img
                                        className={clsx(styles.image)}
                                        src="images/precaten-milk.webp"
                                        alt=""
                                    />
                                </figure>
                                <div className={clsx(styles.content)}>
                                    <p
                                        className={clsx(
                                            styles.desc,
                                            "line-clamp-2"
                                        )}
                                    >
                                        Sữa bột cho chó mèo 110g Dr.Kyan
                                        Precanten
                                    </p>
                                    <div className={clsx(styles.price)}>
                                        <p className={clsx(styles.price_new)}>
                                            50.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_new
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                        <p className={clsx(styles.price_old)}>
                                            100.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_old
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className={clsx(styles.box_modal_buy)}>
                                    <button className={clsx(styles.btn_view)}>
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlassPlus}
                                            />
                                        </i>
                                        <span>Xem nhanh</span>
                                    </button>
                                    <button
                                        className={clsx(styles.btn_buy_now)}
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
                        </Link>
                        {/* Item 6 */}
                        <Link to={""}>
                            <div className={clsx(styles.item)}>
                                <figure>
                                    <img
                                        className={clsx(styles.image)}
                                        src="images/precaten-milk.webp"
                                        alt=""
                                    />
                                </figure>
                                <div className={clsx(styles.content)}>
                                    <p
                                        className={clsx(
                                            styles.desc,
                                            "line-clamp-2"
                                        )}
                                    >
                                        Sữa bột cho chó mèo 110g Dr.Kyan
                                        Precanten
                                    </p>
                                    <div className={clsx(styles.price)}>
                                        <p className={clsx(styles.price_new)}>
                                            50.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_new
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                        <p className={clsx(styles.price_old)}>
                                            100.000
                                            <FontAwesomeIcon
                                                className={clsx(
                                                    styles.icon_price_old
                                                )}
                                                icon={faDongSign}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className={clsx(styles.box_modal_buy)}>
                                    <button className={clsx(styles.btn_view)}>
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlassPlus}
                                            />
                                        </i>
                                        <span>Xem nhanh</span>
                                    </button>
                                    <button
                                        className={clsx(styles.btn_buy_now)}
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
                        </Link>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Slide;
