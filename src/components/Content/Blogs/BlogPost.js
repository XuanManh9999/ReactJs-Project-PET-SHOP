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
  const fortMatchDate = (date) => {
    let originalDate = new Date(date);
    let day = originalDate.getDate();
    let month = originalDate.getMonth() + 1;
    let year = originalDate.getFullYear();

    let formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  return (
    <section className={styles["main"]}>
      <div className={styles["blog__Featured_Posts"]}>
        <h1 className={styles["blog__Featured_Posts-title"]}>
          BÀI VIẾT NỔI BẬT
        </h1>

        {dataBlog && dataBlog.length > 0
          ? dataBlog.map((blog) => (
              <div className={styles["blog__Featured-content"]}>
                <img
                  src={blog.avatar}
                  alt={blog.name}
                  className={styles["featured-img"]}
                />
                <Link to={""}>
                  <p>{blog.name}</p>
                </Link>
              </div>
            ))
          : ""}
        {/* Item 1 */}

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
