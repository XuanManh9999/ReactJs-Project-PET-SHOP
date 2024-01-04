import styles from './ProductPay.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {FaTrash} from "react-icons/fa";


function ProductPay() {
    return (
        <section>
            <h3 className={clsx(styles['heading'])}>Giỏ hàng của bạn</h3>
            <table>
                <thead>
                    <tr>
                        <th>Ảnh sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={clsx(styles['product-images'])}>
                                <img className={clsx(styles['product-img'])} src="Images/bat-an-dong-vat.webp" alt="" />
                            </div>
                        </td>
                        <td>
                            <h3 className={clsx(styles['product-name'])}>
                                <Link to="">Canxi Phốt Pho-hỗ trợ điều trị cho thú cưng</Link>
                            </h3>
                        </td>
                        <td>
                            <span className={clsx(styles['cart-prices'])}>
                                <span className={clsx(styles['prices'])}>276.000₫</span>
                            </span>
                        </td>
                        <td>
                            <div className={clsx(styles['number-control'])}>
                                <input type="number" name="number" min="1" className={clsx(styles['number-quantity'])} />
                            </div>
                        </td>
                        <td>
                            <span className={clsx(styles['cart-price'])}>
                                <span className={clsx(styles['price'])}>276.000₫</span>
                            </span>
                        </td>
                        <td>
                            <i className={clsx(styles['cart-icon'])}>
                                <FaTrash/>
                            </i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={clsx(styles['product-price'])}>
                <div className={clsx(styles['product-price-left'])}>
                    <button>Tiếp tục mua hàng</button>
                </div>
                <div className={clsx(styles['product-price-right'])}>
                    <p className={clsx(styles['desc'])}>
                        Tổng tiền thanh toán: <span>276.000₫</span>
                    </p>
                    <button>Tiến hành thanh toán</button>
                </div>
            </div>
        </section>
    );
}

export default ProductPay;