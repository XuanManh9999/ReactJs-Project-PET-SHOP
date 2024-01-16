import styles from "./BlogPost.module.scss";
import { Link } from "react-router-dom";

function BlogPost() {
  return (
    <section className={styles["main"]}>
      <div className={styles["blog__Featured_Posts"]}>
        <h1 className={styles["blog__Featured_Posts-title"]}>
          BÀI VIẾT NỔI BẬT
        </h1>

        {/* Item 1 */}
        <div className={styles["blog__Featured-content"]}>
          <img
            src="Images/wallpaperflare-com-wallpaper-4-1.webp"
            alt=""
            className={styles["featured-img"]}
          />
          <Link to={""}>
            <p>Nguyên nhân khiến chó trở nên hung dữ</p>
          </Link>
        </div>

        {/* Item 2 */}
        <div className={styles["blog__Featured-content"]}>
          <img
            src="Images/wallpaperflare-com-wallpaper-3.webp"
            alt=""
            className={styles["featured-img"]}
          />
          <Link to={""}>
            <p>Huấn luyện chó mèo ngủ đúng chỗ hiệu quả nhất!</p>
          </Link>
        </div>

        {/* Item 3 */}
        <div className={styles["blog__Featured-content"]}>
          <img
            src="Images/wallpaperflare-com-wallpaper-4.webp"
            alt=""
            className={styles["featured-img"]}
          />
          <Link to={""}>
            <p>Cách để giao tiếp với mèo</p>
          </Link>
        </div>

        {/* Item 4 */}
        <div className={styles["blog__Featured-content"]}>
          <img
            src="Images/wallpaperflare-com-wallpaper-1-1.webp"
            alt=""
            className={styles["featured-img"]}
          />
          <Link to={""}>
            <p>Cách tính tuổi mèo chính xác nhất</p>
          </Link>
        </div>

        <div className={styles["blog__Featured-content-more"]}>
          <img
            src="Images/p.fix.png"
            alt="Banner"
            className={styles["blog_img"]}
          />
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
