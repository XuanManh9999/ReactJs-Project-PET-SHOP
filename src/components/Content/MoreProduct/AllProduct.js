import styles from "./AllProduct.module.scss";
import { Link, useParams } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";
import ProudctItem from "./ProductItem";
import { useData } from "../../Common/DataContext";
function AllProduct() {
  const { typeProduct } = useParams();
  const { dataProduct, setDataProduct, setTypeParams } = useData();

  const hendleClick = (e) => {
    const name = e.target.innerText;
    let newData = [];
    switch (name) {
      case "Mặc định": {
        setTypeParams(`${typeProduct} `);
        break;
      }
      case "A đến Z": {
        newData = dataProduct.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        setDataProduct(newData);
        break;
      }
      case "Z đến A": {
        newData = dataProduct.sort((a, b) =>
          a.name < b.name ? 1 : b.name < a.name ? -1 : 0
        );
        setDataProduct(newData);
        break;
      }
      case "Giá tăng dần": {
        newData = dataProduct.sort((a, b) => a.salePrice - b.salePrice);
        setDataProduct(newData);
        break;
      }
      case "Giá giảm dần": {
        newData = dataProduct.sort((a, b) => b.salePrice - a.salePrice);
        setDataProduct(newData);
        break;
      }
      default:
        break;
    }
  };
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
                <Link
                  onClick={hendleClick}
                  href="#!"
                  className={styles.select_item_all_active}
                >
                  Mặc định
                </Link>
              </li>
              <li>
                <Link
                  onClick={hendleClick}
                  href="#!"
                  className={styles.select_item_all_active}
                >
                  A đến Z
                </Link>
              </li>
              <li>
                <Link
                  onClick={hendleClick}
                  href="#!"
                  className={styles.select_item_all_active}
                >
                  Z đến A
                </Link>
              </li>
              <li>
                <Link
                  onClick={hendleClick}
                  href="#!"
                  className={styles.select_item_all_active}
                >
                  Giá tăng dần
                </Link>
              </li>
              <li>
                <Link
                  onClick={hendleClick}
                  href="#!"
                  className={styles.select_item_all_active}
                >
                  Giá giảm dần
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ProudctItem />
      </div>
    </section>
  );
}

export default AllProduct;
