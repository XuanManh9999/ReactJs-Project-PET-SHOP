import { useEffect, useState } from "react";
import styles from "./BlogPost.module.scss";
import { Link, useParams } from "react-router-dom";
import { clientAPIBlog } from "../../../services/client/hendleBlog";

function BlogPost() {
  const [dataBlog, setDataBlog] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      if (id) {
        const response = await clientAPIBlog.blogOrtherID(id);
        setDataBlog(response.data);
      }
    })();
  }, [id]);

  return (
    <section className={styles["main"]}>
      <div className={styles["blog__Featured_Posts"]}>
        <h1 className={styles["blog__Featured_Posts-title"]}>
          BÀI VIẾT NỔI BẬT
        </h1>

        {dataBlog && dataBlog.length > 0
          ? dataBlog.map((blog) => (
              <Link
                to={`/Blog/${blog.id}`}
                className={styles["blog__Featured-content"]}
              >
                <img
                  src={blog.avatar}
                  alt={blog.name}
                  className={styles["featured-img"]}
                />
                <p className={styles["blog_name"]}>{blog.name}</p>
              </Link>
            ))
          : ""}
        {/* Item 1 */}

        <div className={styles["blog__Featured-content-more"]}>
          <img
            src="https://i.ibb.co/J7Mp05d/banner-blog.webp"
            alt="Banner"
            className={styles["blog_img"]}
          />
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
