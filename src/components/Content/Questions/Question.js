import styles from "./Question.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";


function Questions() {
    return (
        <section>
            <div className={styles['user-questions']}>
                <div className={styles['main-content']}>
                    <h1 className={styles['title']}>Câu hỏi thường gặp</h1>
                    <ul className={styles['user-questions__container']}>
                        {/* Question_1 */}
                        <li className={styles['user-questions__container-item']}>
                            Tôi không đăng nhập được?
                            <i>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                            <i style={{ display: 'none' }} className="fa-solid fa-angle-down arrow_down">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </i>
                            <p className={styles['desc']}>
                                Bạn hãy kiểm tra kĩ xem mình đã nhập chính xác, tài khoản mật khẩu chưa. Nếu vẫn không khắc phục vui lòng
                                liên hệ 0352593469 để được hỗ trợ trực tiếp.
                            </p>
                        </li>
                        {/* Question_2 */}
                        <li className={styles['user-questions__container-item']}>
                            Nguồn gốc sản xuất những sản phẩm của cửa hàng?
                            <i>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                            <i style={{ display: 'none' }} className="fa-solid fa-angle-down arrow_down">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </i>
                            <p className={styles['desc']}>
                                Sản phẩm thức ăn của Shop, cho thú cưng là những thực phẩm được chế biến sẵn. Đó là hỗn hợp các thành phần
                                như ngũ cốc; thịt và các sản phẩm phụ của thịt; chất béo, khoáng chất và vitamin. Các chất này được các
                                nhà sản xuất tính toán cân bằng hàm lượng dinh dưỡng phù hợp với từng loại vật nuôi và từng lứa tuổi khác
                                nhau.
                            </p>
                        </li>
                        {/* Question_3 */}
                        <li className={styles['user-questions__container-item']}>
                            Shop vận chuyển sản phẩm bằng hình thức nào?
                            <i>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                            <i style={{ display: 'none' }} className="fa-solid fa-angle-down arrow_down">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </i>
                            <p className={styles['desc']}>
                                Hiện nay Shop chúng tôi sử dụng hình thức giao hàng trực tuyến qua GrabExpress, nhờ vậy mà sản phẩm sẽ đến
                                tay các bạn ở khắp
                                mọi nơi trên đất nước, với giá thành tốt nhất.
                            </p>
                        </li>
                        {/* Question_4 */}
                        <li className={styles['user-questions__container-item']}>
                            Ai là đã thành lập ra cửa hàng?
                            <i>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                            <i style={{ display: 'none' }} className="fa-solid fa-angle-down arrow_down">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </i>
                            <p className={styles['desc']}>
                                Theo một thông tin chính thức, người sáng lập ra cửa hàng hiện vẫn đang là một sinh viên. Nếu bạn tò mò thì
                                có thể tìm thấy thêm thông tin ở phía bên tay phải, mình đã đính kèm:v.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}



export default Questions;