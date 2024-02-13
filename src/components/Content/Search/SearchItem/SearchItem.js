import { useDeferredValue, useEffect, useState, useTransition } from "react";

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
import {
  getProductsHotSearch,
  userSearchProducts,
} from "../../../../services/hendleUser";

function SearchItem({ close_search }) {
  const [dataSearch, setDataSearch] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  let search = useDeferredValue(inputSearch);
  useEffect(() => {
    if (inputSearch === "") {
      const getData = async () => {
        let result = await getProductsHotSearch();
        setDataSearch(result);
      };
      getData();
    } else {
      const fetchData = async () => {
        let result = await userSearchProducts(search);
        setDataSearch(result);
      };
      fetchData();
    }
  }, [search]);

  const hendleInputSearch = async (e) => {
    let value = e.target.value;
    setInputSearch(value);
  };

  const formatCurrency = (amount) => {
    amount = parseFloat(amount);
    return amount.toLocaleString("vi-VN");
  };

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
          value={inputSearch}
          onChange={hendleInputSearch}
        />
        <i className={clsx(styles.icon_search)}>
          <FontAwesomeIcon icon={faSearch} />
        </i>
      </div>
      <h1 className={clsx(styles.title_search)}>
        {inputSearch === ""
          ? "Sản phẩm được tìm nhiều nhất"
          : dataSearch.data.length === 0
          ? "Không tìm thấy sản phẩm"
          : "Kết quả tìm kiếm"}
      </h1>

      {dataSearch.data &&
        dataSearch.data.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/ProductDetail/${item.id}/${item.trademark}`}
              className={clsx(styles.data_search)}
            >
              <div className={clsx(styles.data_search_item)}>
                <picture>
                  <img
                    className={clsx(styles.img_data_search_item)}
                    src={item.avatar}
                    alt={item.name}
                  />
                </picture>
                <div className={clsx(styles.desc_search)}>
                  <p className={clsx(styles.desc)}>{item.name}</p>
                  <div className={clsx(styles.price)}>
                    <span className={clsx(styles.price_new)}>
                      {formatCurrency(item.price)}
                      <FontAwesomeIcon icon={faDongSign} />
                    </span>
                    <span className={clsx(styles.price_old)}>
                      {formatCurrency(item.salePrice)}
                      <FontAwesomeIcon icon={faDongSign} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default React.memo(SearchItem);
