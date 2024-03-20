import styles from './Service.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Service() {
  return (
    <section>
      <div className={styles['service-animal']}>
        <div className={styles['main-content']}>
          {/*info */}
          <div className={styles['info']}>
            <h1 className={styles.title}>Dịch Vụ</h1>
            <picture className={styles['img-hero']}>
              <img
                src="https://i.ibb.co/Q6v08xN/hero-animal.png"
                alt="Chào mừng bạn đến với Catchy Pet"
              />
            </picture>
          </div>
          {/* service-contents */}
          <div className={styles['service-contents']}>
            {/* take-animal */}
            <div className={styles['take-animal']}>
              <h2 className={styles['title-service']}>Chăm Sóc Thú Cưng.</h2>
              <ul>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPaw} />
                  </i>
                  Giúp thú cưng sạch sẽ hơn, gọn gàng hơn.
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPaw} />
                  </i>
                  Tạo những kiểu tóc sang chảnh, ấn tượng.
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPaw} />
                  </i>
                  Loại bỏ các mầm mống gây bệnh từ lông móng.
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPaw} />
                  </i>
                  Thú cưng được massage đúng cách, tạo tâm lý vui vẻ, thoải mái.
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPaw} />
                  </i>
                  Đảm bảo an toàn cho boss.
                </li>
              </ul>
            </div>
            {/* service-animal */}
            <div className={styles['img-service-animal']}>
              <picture>
                <img
                  src="https://i.ibb.co/3Rq9tvd/carepic.png"
                  alt="Ảnh chăm sóc chó."
                />
              </picture>
            </div>
            {/* take-animal */}
            <div className={styles['exam-animal']}>
              <h2 className={styles['title-service']}>Kiểm tra thú cưng.</h2>
              <ul>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPaw} />
                  </i>
                  Ngăn ngừa và sớm phát hiện các bệnh nguy hiểm.
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPaw} />
                  </i>
                  Kiểm soát được tình trạng mất cân bằng dinh dưỡng.
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPaw} />
                  </i>
                  Phát hiện bệnh từ những dấu hiệu ban đầu và điều trị dứt điểm.
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPaw} />
                  </i>
                  Tiết kiệm chi phí và thời gian điều trị cho thú cưng.
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPaw} />
                  </i>
                  Phòng ngừa các bệnh lây từ thú sang người.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
