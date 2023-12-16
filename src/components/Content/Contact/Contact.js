import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FaPhone, FaEnvelope, FaUser, FaComment } from "react-icons/fa";

function Contact() {
    return (
        <section>
            <div className={styles["contact"]}>
                <div className={styles["main-content"]}>
                    <h1 className={styles["title"]}>Liên hệ</h1>
                    <div className={styles["contact_container"]}>
                        {/* Item 1 */}
                        <div className={styles["contact_container--item"]}>
                            <div
                                className={`${styles["icon"]} ${styles["phone_"]}`}
                            >
                                <i>
                                    <FaPhone />
                                </i>
                            </div>
                            <p className={styles["support_contact"]}>
                                Hỗ trợ tư vấn
                            </p>
                            <p className={styles["desc"]}>
                                1900 6750 - 1900 6750
                            </p>
                        </div>
                        {/* Item 2 */}
                        <div className={styles["contact_container--item"]}>
                            <div
                                className={`${styles["icon"]} ${styles["map"]}`}
                            >
                                <i>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </i>
                            </div>
                            <p className={styles["support_contact"]}>
                                Văn phòng giao dịch
                            </p>
                            <p className={styles["desc"]}>
                                Đường Trần Hữu Dực kéo dài, quận Nam Từ Liêm, Hà
                                Nội.
                            </p>
                        </div>
                        {/* Item 3 */}
                        <div className={styles["contact_container--item"]}>
                            <div
                                className={`${styles["icon"]} ${styles["mail"]}`}
                            >
                                <i>
                                    <FaEnvelope />
                                </i>
                            </div>
                            <p className={styles["support_contact"]}>
                                Bộ phận hỗ trợ bán hàng
                            </p>
                            <p className={styles["desc"]}>
                                nguyenxuanmanh2992003@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles["comment_content"]}>
                    <div className={styles["comment_content__map"]}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8169397280303!2d105.73938337498116!3d21.040009480612063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135096b31fa7abb%3A0xff645782804911af!2zVHLGsOG7nW5nIMSR4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgxJDDtG5nIMOB!5e0!3m2!1svi!2s!4v1688982525158!5m2!1svi!2s"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            rel="preconnect"
                            title="Map"
                        ></iframe>
                    </div>
                    <div className={styles["comment_content__form"]}>
                        <form action="#!" id="form_3">
                            <div className={styles["container_form"]}>
                                <h1 className={styles["title"]}>
                                    Chúng tôi luôn sẵn sàng tiếp nhận mọi ý kiến
                                    ​đóng góp và giải đáp những yêu cầu của bạn.
                                    Hãy liên hệ ngay với chúng tôi.
                                </h1>
                                <div className={styles["container_form_group"]}>
                                    <i>
                                        <FaUser />
                                    </i>
                                    <input
                                        type="text"
                                        placeholder="Họ tên:"
                                        className={styles["surname"]}
                                    />
                                    <span
                                        className={styles["form-message"]}
                                    ></span>
                                </div>
                                <div className={styles["container_form_group"]}>
                                    <i>
                                        <FaPhone />
                                    </i>
                                    <input
                                        type="number"
                                        placeholder="Số điện thoại:"
                                        className={styles["surname"]}
                                    />
                                    <span
                                        className={styles["form-message"]}
                                    ></span>
                                </div>
                                <div className={styles["container_form_group"]}>
                                    <i>
                                        <FaEnvelope />
                                    </i>
                                    <input
                                        type="email"
                                        placeholder="Email:"
                                        className={styles["surname"]}
                                    />
                                    <span
                                        className={styles["form-message"]}
                                    ></span>
                                </div>
                                <div
                                    className={styles["container_form_group"]}
                                    id="_textarea"
                                >
                                    <i>
                                        <FaComment />
                                    </i>
                                    <textarea placeholder="Nội dung:"></textarea>
                                    <span
                                        className={styles["form-message"]}
                                    ></span>
                                </div>
                            </div>
                            <div className={styles["banner_contacts_form"]}>
                                <button
                                    className={styles["btn_form_contact"]}
                                    type="submit"
                                >
                                    Gửi tin nhắn
                                </button>
                                <img
                                    src="Images/banner_contact.webp"
                                    alt="banner_contact"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
