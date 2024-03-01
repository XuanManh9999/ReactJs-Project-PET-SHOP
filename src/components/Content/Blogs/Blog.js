import styles from "./Blog.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaUser, FaComment, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useParams } from "react-router-dom";
import { clientAPIBlog } from "../../../services/client/hendleBlog";
function Blog() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await clientAPIBlog.blogByID(id);
      setBlogData(response?.data ?? []);
    })();

    const scrollToSmooth = (to, duration) => {
      const start = window.pageYOffset;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;

      const animateScroll = () => {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    };

    Math.easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    scroll.scrollTo(300, { duration: 100, smooth: "linear" });

    // Kích hoạt hiệu ứng chậm dần
    scrollToSmooth(300, 5); // 1000 là thời gian cuộn
  }, [id]);

  const fortMatchDate = (date) => {
    let originalDate = new Date(date);
    let day = originalDate.getDate();
    let month = originalDate.getMonth() + 1;
    let year = originalDate.getFullYear();

    let formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  return (
    <section>
      <div className={styles.blog}>
        <div className={styles["main-content"]}>
          <div className={styles["blog__contents"]}>
            {blogData && blogData.length > 0 ? (
              <div className={styles["blog--content"]}>
                <h1 className={styles["title"]}>{blogData[0].name}</h1>
                <span className={styles["create_blog"]}>
                  <i>
                    <FaClock />
                  </i>
                  {fortMatchDate(blogData[0].createAt)}
                </span>
                <div
                  className={styles["content__blog"]}
                  dangerouslySetInnerHTML={{
                    __html: blogData[0].contentHTML,
                  }}
                ></div>
                <div className={styles["blog--content--share"]}>
                  <i>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                  <p>Chia sẻ bài viết:</p>
                  <i>
                    <FaFacebook />
                  </i>
                </div>

                <div className={styles["blog--content-comment"]}>
                  <h2 className={styles["comment-title"]}>Viết bình luận</h2>
                  <div className={styles["blog--content-comment__input"]}>
                    <i>
                      <FaUser />
                    </i>
                    <input
                      type="text"
                      placeholder="Họ tên:"
                      className={styles["comment-input"]}
                    />
                  </div>
                  <div
                    className={styles["blog--content-comment__input_comment"]}
                  >
                    <i>
                      <FaComment />
                    </i>
                    <textarea
                      placeholder="Nội Dung:"
                      className={styles["comment-textarea"]}
                    ></textarea>
                  </div>
                  <button className={styles["comment-button"]}>
                    Gửi bình luận
                  </button>

                  <div className={styles["user_comments"]}>
                    <h2 className={styles["comment-title"]}>
                      Người dùng bình luận:
                    </h2>
                    <div className={styles["container_comments"]}>
                      <div className={styles["user_comment"]}>
                        <img
                          src="https://i.ibb.co/t2gC3gw/user-icon.png"
                          alt="user-icon"
                          className={styles["user-icon"]}
                        />
                        <div className={styles["user_comment__block"]}>
                          <span>Nguyễn Xuân Mạnh</span>
                          <p>
                            Bài viết rất hay, tôi học hỏi được rất nhiều thứ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              "Thông tin bài viết không tồn tại hoặc đã bị xóa."
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
