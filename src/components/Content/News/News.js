import styles from './News.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { clientAPIBlog } from '../../../services/client/hendleBlog';

function News() {
  const [dataBlog, setDataBlog] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await clientAPIBlog.blogByLimit(2);
      setDataBlog(response.data);
    })();
  }, []);

  const fortMatchDate = (date) => {
    let originalDate = new Date(date);
    let day = originalDate.getDate();
    let month = originalDate.getMonth() + 1;
    let year = originalDate.getFullYear();

    let formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const cleanedString = (originalString) => {
    return originalString.replace(/##|\*\*|>/g, '');
  };

  return (
    <section>
      {dataBlog && dataBlog.length > 0 ? (
        <div className={styles['pet-news']}>
          <div className={styles['main-content']}>
            <div className={styles['intro-pet-news']}>
              <h1 className={styles.title}>Tin thú cưng.</h1>
              <picture className={styles['img-hero']}>
                <img
                  src="https://i.ibb.co/Q6v08xN/hero-animal.png"
                  alt="Chào mừng bạn đến với Catchy Pet"
                />
              </picture>
            </div>

            <div className={styles['pet-news-list-items']}>
              {dataBlog.map((blog) => (
                <div key={blog.id} className={styles['pet-news-item']}>
                  <picture className={styles['pet-news-img']}>
                    <img src={blog.avatar} alt={blog.name} />
                  </picture>
                  <div className={styles['pet-news-content']}>
                    <div className={styles['pet-news-title']}>
                      <Link to={`/Blog/${blog.id}`}>{blog.name}</Link>
                    </div>
                    <p className={`${styles['pet-news-desc']} line-clamp-3`}>
                      {cleanedString(blog.content)}
                    </p>
                    <span className={styles['pet-news-date']}>
                      <i>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      {fortMatchDate(blog.createAt)}
                    </span>
                    <Link
                      to={`/Blog/${blog.id}`}
                      className={styles['pet-new-more-watch_1']}
                    >
                      Xem tiếp
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles['more-buy-products']}>
              <Link to={`/Blog/${dataBlog[0].id}`}>Xem thêm bài viết.</Link>
              <i>
                <FontAwesomeIcon icon={faRightLong} />
              </i>
            </div>

            <div
              className={styles['pet-news-logo-items']}
              data-aos="fade-up-right"
            >
              <img src="https://i.ibb.co/4FksxRd/brand-1.webp" alt="brand_1" />
              <img src="https://i.ibb.co/kJDMsSr/brand-2.webp" alt="brand_2" />
              <img src="https://i.ibb.co/cXgkZk4/brand-3.webp" alt="brand_3" />
              <img src="https://i.ibb.co/d7Lqg6j/brand-4.webp" alt="brand_4" />
              <img src="https://i.ibb.co/8P59f8k/brand-5.webp" alt="brand_5" />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </section>
  );
}

export default News;
