import styles from "./AllProduct.module.scss";
import { Link } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";
import ProductList from "../Product/Product-List";

function AllProduct() {
  return (
    <section>
      <div className={styles.all_products__content}>
        <h1 className={styles.title}>Tất cả sản phẩm</h1>
        <ul className={styles.list_all_products_item}>
          <li>
            <Link href="#!" className={styles.select_item_all}>
              Mặc định
              <i className="fa-solid fa-chevron-down">
                <FaChevronDown />
              </i>
            </Link>
            <ul className={styles.sub_list_all_products_item}>
              <li>
                <Link href="#!" className={styles.select_item_all_active}>
                  Mặc định
                </Link>
              </li>
              <li>
                <Link href="#!" className={styles.select_item_all_active}>
                  A đến Z
                </Link>
              </li>
              <li>
                <Link href="#!" className={styles.select_item_all_active}>
                  Z đến A
                </Link>
              </li>
              <li>
                <Link href="#!" className={styles.select_item_all_active}>
                  Giá tăng dần
                </Link>
              </li>
              <li>
                <Link href="#!" className={styles.select_item_all_active}>
                  Giá giảm dần
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AllProduct;
