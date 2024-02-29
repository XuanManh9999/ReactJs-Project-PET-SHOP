import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// markdown
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

import { APIBlogs } from "../../../services/admin/blog";
import Cookies from "js-cookie";

const mdParser = new MarkdownIt(/* Markdown-it options */);
function UpdateBlog() {
  const [selectBlog, setSelectBlog] = useState([]);
  const [idBlogUpdate, setIdBlogUpdate] = useState(null);
  useEffect(() => {
    const fetching = async () => {
      const token = Cookies.get("access_token");
      if (token) {
        const response = await APIBlogs.allBlogs(token);
        setSelectBlog(response?.data);
      }
    };
    fetching();
  }, []);
  const editorRef = useRef();
  const [blogData, setBlogData] = useState({
    name: "",
    avatar: "",
    content: "",
    contentHTML: "",
    author: "",
    category: "",
  });
  function handleEditorChange({ html, text }) {
    setBlogData((prevBlog) => ({
      ...prevBlog,
      content: text,
      contentHTML: html,
    }));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateData = ({
    name,
    avatar,
    content,
    contentHTML,
    author,
    category,
  }) => {
    if (name && avatar && content && contentHTML && author && category) {
      return true;
    }
    return false;
  };

  const hendleUpdateBlog = () => {
    const isCHeck = validateData(blogData);
    if (isCHeck && idBlogUpdate) {
      const fetching = async () => {
        const token = Cookies.get("access_token");

        const response = await APIBlogs.updateBlog(token, {
          ...blogData,
          id: idBlogUpdate,
        });
        if (response?.status === 200) {
          toast.success("Cập nhật dữ liệu thành công");
        } else {
          toast.error(
            "Cập nhật dữ liệu không thành công. Vui lòng kiểm tra và thử lại"
          );
        }
      };
      fetching();
    } else {
      toast.warn("Các dữ liệu không được rỗng");
    }
  };

  const hendleReset = () => {
    setBlogData({
      name: "",
      avatar: "",
      content: "",
      contentHTML: "",
      author: "",
      category: "",
    });
    editorRef.value = "";
    toast.success("Retset data thành công");
  };

  const hendleSelectBlog = (event) => {
    const idBlog = event.target.value;
    if (idBlog) {
      const fetching = async () => {
        const token = Cookies.get("access_token");
        const response = await APIBlogs.blogById(token, idBlog);
        const data = response?.data;
        if (data?.length > 0) {
          setIdBlogUpdate(data[0].id);
          setBlogData({
            name: data[0].name,
            avatar: data[0].avatar,
            content: data[0].content,
            contentHTML: data[0].contentHTML,
            author: data[0].author,
            category: data[0].category,
          });
          editorRef.value = data[0].content;
        }
      };
      fetching();
    }
  };
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Thêm bài viết</h1>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-description"></p>
                    <form
                      action="?act=save_add_product"
                      className="forms-sample"
                      id="addsppp"
                      method="post"
                      encType="multipart/form-data"
                    >
                      <div className="col-md-4 mb-3">
                        <label htmlFor="inputState" className="form-label">
                          Chọn bài viết
                        </label>
                        <select
                          id="inputState"
                          name="id_cate"
                          className="form-select"
                          onChange={hendleSelectBlog}
                        >
                          <option value={""}>--------------</option>
                          {selectBlog &&
                            selectBlog?.length > 0 &&
                            selectBlog.map((blog) => (
                              <option key={blog.id} value={blog.id}>
                                {blog.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Tên bài viết</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          placeholder="Name"
                          required
                          name="name"
                          onChange={handleInputChange}
                          value={blogData.name}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Loại bài viết</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          required
                          name="category"
                          onChange={handleInputChange}
                          value={blogData.category}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Avatar</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          required
                          name="avatar"
                          onChange={handleInputChange}
                          value={blogData.avatar}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Tác giả</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          required
                          name="author"
                          onChange={handleInputChange}
                          value={blogData.author}
                        />
                      </div>
                      <div className="form-group">
                        <label>Content Detail</label>
                        <MdEditor
                          style={{ height: "500px" }}
                          renderHTML={(text) => mdParser.render(text)}
                          onChange={handleEditorChange}
                          value={blogData.content}
                          ref={editorRef}
                        />
                      </div>

                      <div className="form-group row" id="selected-sizes"></div>

                      <input
                        type="hidden"
                        name="sizes"
                        id="selected-sizes-input"
                        value=""
                      />
                      <button
                        type="reset"
                        className="btn btn-primary me-2"
                        onClick={hendleUpdateBlog}
                      >
                        Lưu
                      </button>
                      <button
                        type="reset"
                        className="btn btn-gradient-primary me-2"
                        onClick={hendleReset}
                      >
                        Reset
                      </button>
                      <button className="btn btn-secondary">Quay lại</button>
                    </form>
                  </div>
                </div>
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

export default UpdateBlog;
