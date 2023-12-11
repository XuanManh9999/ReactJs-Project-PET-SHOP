import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faClose,
    faSearch,
    faDongSign,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchItem.module.scss";
import { Link } from "react-router-dom";

function SearchItem({ close_search }) {
    return (
        <div className={clsx(styles.content)}>
            <i
                onClick={() => {
                    close_search();
                }}
                className={clsx(styles.close_modal_search)}
            >
                <FontAwesomeIcon icon={faClose} />
            </i>
            <div className={clsx(styles.search)}>
                <input
                    type="text"
                    alt="search"
                    placeholder="Nhập tên sản phẩm..."
                />
                <i className={clsx(styles.icon_search)}>
                    <FontAwesomeIcon icon={faSearch} />
                </i>
            </div>
            <h1 className={clsx(styles.title_search)}>
                Sản phẩm được tìm nhiều nhất
            </h1>

            {/* Về sau gọi API và render ra */}
            <Link className={clsx(styles.data_search)}>
                <div className={clsx(styles.data_search_item)}>
                    <picture>
                        <img
                            className={clsx(styles.img_data_search_item)}
                            src="images/food-dog-canxi.webp"
                            alt="product"
                        />
                    </picture>
                    <div className={clsx(styles.desc_search)}>
                        <p className={clsx(styles.desc)}>
                            Thức ăn hạt cho mèo Whiskat.
                        </p>
                        <div className={clsx(styles.price)}>
                            <span className={clsx(styles.price_new)}>
                                120.000
                                <FontAwesomeIcon icon={faDongSign} />
                            </span>
                            <span className={clsx(styles.price_old)}>
                                200.000
                                <FontAwesomeIcon icon={faDongSign} />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default React.memo(SearchItem);
