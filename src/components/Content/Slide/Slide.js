import React from 'react';
import { useState, useRef } from 'react';
import Slider from 'react-slick';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDongSign,
  faMagnifyingGlassPlus,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Slide.module.scss';
import './overwrite.scss';
import QuickProducts from '../QuickProducts/QuickProducts';
import { connect } from 'react-redux';
import { useData } from '../../Common/DataContext';
function Slide({ data = [], title = 'Sản phẩm nổi bật' }) {
  const [quickView, setQuickView] = useState(false);
  const { updateData, yourData } = useData();
  const getIdProduct = useRef();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 800,
    autoplaySpeed: 4000,
    cssEase: 'ease',
  };

  const hendleQuickView = (id) => {
    getIdProduct.current = id;
    setQuickView((pre) => !pre);
  };

  const hendleAddToCart = (id) => {
    const existingProductIndex = yourData.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      toast.warn('Sản phẩm đã tồn tài trong giỏ hàng');
    } else {
      updateData([
        ...yourData,
        {
          id,
          quantity: 1,
        },
      ]);
      toast.success('Thêm sản phẩm thành công');
    }
  };
  const formatCurrency = (amount) => {
    amount = parseFloat(amount);
    return amount.toLocaleString('vi-VN');
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
              {data && data.length > 0 ? (
                data.map((item, index) => {
                  return (
                    <div key={index} className={clsx(styles.item)}>
                      <Link to={`/ProductDetail/${item.id}/${item.trademark}`}>
                        <figure>
                          <img
                            className={clsx(styles.image)}
                            src={item.avatar}
                            alt={item.name}
                          />
                        </figure>
                        <div className={clsx(styles.content)}>
                          <p className={clsx(styles.desc, 'line-clamp-2')}>
                            {item.name}
                          </p>
                          <div className={clsx(styles.price)}>
                            <p className={clsx(styles.price_new)}>
                              {formatCurrency(item.salePrice)}
                              <FontAwesomeIcon
                                className={clsx(styles.icon_price_new)}
                                icon={faDongSign}
                              />
                            </p>
                            <p className={clsx(styles.price_old)}>
                              {formatCurrency(item.price)}
                              <FontAwesomeIcon
                                className={clsx(styles.icon_price_old)}
                                icon={faDongSign}
                              />
                            </p>
                          </div>
                        </div>
                      </Link>

                      <div className={clsx(styles.box_modal_buy)}>
                        <button
                          className={clsx(styles.btn_view)}
                          onClick={() => {
                            hendleQuickView(item.id);
                          }}
                        >
                          <i>
                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                          </i>
                          <span>Xem nhanh</span>
                        </button>
                        <button className={clsx(styles.btn_buy_now)}>
                          <i>
                            <FontAwesomeIcon icon={faCartPlus} />
                          </i>
                          <span
                            onClick={() => {
                              hendleAddToCart(item.id);
                            }}
                          >
                            Thêm ngay
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className={clsx(styles.empty_card)}>Loadding...</p>
              )}
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
        ''
      )}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default connect()(Slide);
