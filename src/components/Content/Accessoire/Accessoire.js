import styles from './Accessoire.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDongSign,
  faMagnifyingGlassPlus,
  faCartPlus,
  faRightLong,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { store } from '../../../redux/store.js';
import { saveDataFromLocalstore } from '../../../redux/actions.js';
import { useData } from '../../Common/DataContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuickProducts from '../QuickProducts/QuickProducts';
const formatCurrency = (amount) => {
  amount = parseFloat(amount);
  return amount.toLocaleString('vi-VN');
};
function Accessoire({ data = [] }) {
  const [quickView, setQuickView] = useState(false);
  const getIdProduct = useRef();
  const { updateData } = useData();

  const hendleQuickView = (id) => {
    getIdProduct.current = id;
    setQuickView((pre) => !pre);
  };

  const hendleAddToCart = (id) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      toast.warn('Sản phẩm đã tồn tài trong giỏ hàng');
    } else {
      existingCart.push({ id, quantity: 1 });
      store.dispatch(saveDataFromLocalstore(existingCart));
      updateData(existingCart);
      toast.success('Thêm sản phẩm thành công');
    }
  };
  return (
    <section>
      <div className={styles['accessoire']}>
        <div className={styles['main-content']}>
          <div className={styles['intro-accessoire-buy']}>
            <h1 className={styles.title}>Phụ kiện cho thú cưng</h1>
            <picture className={styles['img-hero']}>
              <img
                src="https://i.ibb.co/Q6v08xN/hero-animal.png"
                alt="Chào mừng bạn đến với Catchy Pet"
              />
            </picture>
          </div>

          <div className={styles['accessoire-container-products']}>
            {/* Item 1 */}
            {data &&
              data.map((item, index) => (
                <Link
                  key={index}
                  to={`/ProductDetail/${item.id}/${item.trademark}`}
                  className={styles['producitem']}
                >
                  <div className={styles['producitem-content']}>
                    <picture className={styles['img-item-hero']}>
                      <img src={item.avatar} alt={item.name} />
                    </picture>
                    <div className={styles['price']}>
                      <div className={styles['line-clamp']}>
                        <a href="#!">{item.name}</a>
                      </div>
                      <div className={styles['price-item-many']}>
                        <span className={styles['price-new']}>
                          {formatCurrency(item.salePrice)}
                          <i>
                            <FontAwesomeIcon icon={faDongSign} />
                          </i>
                        </span>
                        <span className={styles['price-old']}>
                          {formatCurrency(item.price)}
                          <i>
                            <FontAwesomeIcon icon={faDongSign} />
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles['box-modal-buy']}>
                    <button
                      onClick={() => {
                        hendleQuickView(item.id);
                      }}
                      className={styles['hero-read-produc']}
                    >
                      <Link to={''}>
                        <i>
                          <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                        </i>
                        <span>Xem nhanh</span>
                      </Link>
                    </button>
                    <button
                      onClick={() => {
                        hendleAddToCart(item.id);
                      }}
                      className={styles['hero-buy-produc']}
                    >
                      <Link to={''}>
                        <i>
                          <FontAwesomeIcon icon={faCartPlus} />
                        </i>
                        <span>Thêm ngay</span>
                      </Link>
                    </button>
                  </div>
                </Link>
              ))}
          </div>

          <div className={styles['more-buy-products']}>
            <Link to={'/MoreProduct/accessories'}>Xem thêm sản phẩm.</Link>
            <i>
              <FontAwesomeIcon icon={faRightLong} />
            </i>
          </div>
        </div>
      </div>
      {quickView ? (
        <QuickProducts
          id={getIdProduct.current}
          hendleQuickViewProduct={hendleQuickView}
        />
      ) : (
        ''
      )}
    </section>
  );
}

export default Accessoire;
