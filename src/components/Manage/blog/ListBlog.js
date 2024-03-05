import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";
import { useState, useEffect } from "react";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5/js/dataTables.bootstrap5.min.js";

import "../assets/css/style.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/simple-datatables/style.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "../layout/Header.module.scss";
import Cookies from "js-cookie";
import { APIBlogs } from "../../../services/admin/blog";

function ListBlog() {
  const [blogData, setBlogData] = useState([]);
  const [isCHeckDelete, setIsCheckDelete] = useState(false);
  useEffect(() => {
    (async () => {
      const token = Cookies.get("access_token");
      const response = await APIBlogs.allBlogs(token);
      setBlogData(response.data);
    })();
  }, [isCHeckDelete]);

  const hendleDeleteBlog = (id) => {
    (async () => {
      const token = Cookies.get("access_token");
      const response = await APIBlogs.deleteBlog(token, id);
      if (response.status === 200) {
        toast.success("Xóa bài viết thành công");
        setIsCheckDelete((prev) => !prev);
      } else {
        toast.error("Xóa bài viết không thành công");
      }
    })();
  };

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Quản lý bài viết</h1>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <form
                  action=""
                  className="forms-sample"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="d-flex align-items-center">
                    <div className="col-md-4 mb-3 me-2">
                      <label htmlFor="inputState" className="htmlForm-label">
                        Thể loại
                      </label>
                      <select
                        id="inputState"
                        name="id_cate"
                        className="htmlForm-select"
                      >
                        <option value="">Tất cả</option>
                      </select>
                    </div>
                  </div>
                </form>

                <table
                  id="example"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr className="table-danger">
                      <th>STT</th>
                      <th colSpan={2}>Name</th>
                      <th>Ảnh</th>
                      <th>Tác giả</th>
                      <th>Thể loại</th>
                      <th>Xóa bài</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogData && blogData.length > 0 ? (
                      blogData.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index}</td>
                          <td colSpan={2}>{item.name}</td>
                          <td>
                            <img
                              style={{ objectFit: "cover" }}
                              width={"50px"}
                              height={"80px"}
                              src={item.avatar}
                              alt={item.name}
                            />
                          </td>
                          <td>{item.author}</td>
                          <td>{item.category}</td>
                          <td>
                            <button
                              style={{
                                border: "none",
                              }}
                              onClick={() => {
                                hendleDeleteBlog(item.id);
                              }}
                              className="delete"
                              title="Delete"
                              data-toggle="tooltip"
                            >
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <td colSpan={7}>Không có dữ liệu</td>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
}

export default ListBlog;
