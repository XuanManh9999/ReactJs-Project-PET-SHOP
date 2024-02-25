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

const mdParser = new MarkdownIt(/* Markdown-it options */);
function AddBlog() {
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

  const hendleAddBlog = () => {};

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
                        onClick={hendleAddBlog}
                      >
                        Thêm
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

export default AddBlog;
