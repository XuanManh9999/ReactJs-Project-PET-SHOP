import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5/js/dataTables.bootstrap5.min.js";
import "./assets/css/style.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/quill/quill.snow.css";
import "./assets/vendor/quill/quill.bubble.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/simple-datatables/style.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Header.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
// markdown
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

import {
  getDataProducts,
  getDataProductsEqualId,
  updateProductById,
} from "../../services/hendleProducts";
import styles from "./UpdateProduct.module.scss";
// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!

function UpdateProduct() {
  const editorRef = useRef();

  const [productData, setProductData] = useState({
    name: "",
    desc: "",
    descHTML: "",
    avatar: "",
    price: 0,
    salePrice: 0,
    manyProducts: 0,
    comment: "",
    trademark: "",
    detailImages: [],
    sizes: [],
    colors: [],
  });
  // data
  const [idSelected, setIdSelect] = useState(null);
  const [dataProducts, setDataProducts] = useState([]);
  const [detailImages, setDetailImage] = useState("");
  const [saveImages, setSaveImages] = useState([]);
  const [detailColor, setDetailColor] = useState("");
  const [saveColor, setSaveColor] = useState([]);
  const [detailSize, setDetailSize] = useState("");
  const [saveSize, setSaveSize] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      const res = await getDataProducts();
      setDataProducts(res.data);
    };
    fetchingData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  function handleEditorChange({ html, text }) {
    setProductData((prevData) => ({
      ...prevData,
      descHTML: html,
      desc: text,
    }));
  }

  let hendleImageDetail = () => {
    if (detailImages !== "") {
      setSaveImages((prev) => [...prev, { hrefImage: detailImages }]);
      setDetailImage("");
      toast.success(
        "Thêm dữ liệu thành công. Sau khi thêm đủ đừng quên lưu nhé"
      );
    } else {
      toast.warn("Không thể thêm urlImage rỗng. Vui lòng thao tác lại");
    }
  };

  let hendleSaveDetailImage = () => {
    if (saveImages && saveImages.length > 0) {
      setProductData((prev) => ({
        ...prev,
        detailImages: saveImages,
      }));
      setSaveImages([]);
      toast.success("Lưu thành công");
    } else {
      toast.warn("Không thể lưu dữ liệu rỗng");
    }
  };

  let hendleColorDetail = () => {
    if (detailColor !== "") {
      setSaveColor((prev) => [...prev, { color: detailColor }]);
      setDetailColor("");
      toast.success(
        "Thêm dữ liệu thành công. Sau khi thêm đủ đừng quên lưu nhé"
      );
    } else {
      toast.warn("Không thể thêm trường rỗng. Vui lòng thao tác lại");
    }
  };

  let hendleSaveColor = () => {
    if (saveColor && saveColor.length > 0) {
      setProductData((prev) => ({
        ...prev,
        colors: saveColor,
      }));
      setSaveColor([]);
      toast.success("Lưu thành công");
    } else {
      toast.warn("Không thể lưu dữ liệu rỗng");
    }
  };

  let hendleSizesProduct = () => {
    if (detailSize !== "") {
      setSaveSize((prev) => [...prev, { size: detailSize }]);
      setDetailSize("");
      toast.success(
        "Thêm dữ liệu thành công. Sau khi thêm đủ đừng quên lưu nhé"
      );
    } else {
      toast.warn("Không thể thêm trường rỗng. Vui lòng thao tác lại");
    }
  };
  let hendleSaveSize = () => {
    if (saveSize && saveSize.length > 0) {
      setProductData((prev) => ({
        ...prev,
        sizes: saveSize,
      }));
      toast.success("Lưu thành công");
      setSaveSize([]);
    } else {
      toast.warn("Không thể lưu dữ liệu rỗng");
    }
  };
  // Hàm để xóa toàn bộ dữ liệu
  const clearData = () => {
    setProductData({
      name: "",
      desc: "",
      descHTML: "",
      avatar: "",
      price: 0,
      salePrice: 0,
      manyProducts: 0,
      comment: "",
      trademark: "",
      detailImages: [],
      sizes: [],
      colors: [],
    });
  };
  const hendleUpdateProduct = async () => {
    try {
      if (idSelected !== null) {
        const response = await updateProductById({
          ...productData,
          id: idSelected,
        });
        if (response && response.status === 200) {
          toast.success("Cập nhật sản phẩm thành công");
          if (editorRef.current) {
            editorRef.current.setText("");
          }
          clearData();
        } else {
          toast.warn(
            "Cập nhật sản phẩm thành công không thành công vui lòng kiểm tra lại dữ liệu"
          );
        }
      } else {
        toast.warn("Không tìm thấy id sản phẩm");
      }
    } catch (e) {
      toast.error(
        "Cập nhật sản phẩm thành công không thành công. Đã xảy ra lỗi"
      );
    }
  };
  const hendleSelectedId = async (event) => {
    const value = event.target.value;
    if (value !== "" && value !== "Chọn sản phẩm") {
      setIdSelect(value);
      const res = await getDataProductsEqualId(value);
      setProductData(res.data[0]);
    } else {
      clearData();
    }
  };

  const hendleBtn = (event) => {
    const { name } = event.target;
    const res = window.confirm("Bạn có chắc chắn muốn clear dữ liệu không?");
    if (res) {
      if (name === "btnImages") {
        setProductData({ ...productData, detailImages: [] });
      } else if (name === "btnColor") {
        setProductData({ ...productData, colors: [] });
      } else if (name === "btnSizes") {
        setProductData({ ...productData, sizes: [] });
      }
    }
  };
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Cập nhật sản phẩm</h1>
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
                          Tên sản phẩm
                        </label>
                        <select
                          id="inputState"
                          name="id_cate"
                          className="form-select"
                          onChange={(event) => {
                            hendleSelectedId(event);
                          }}
                        >
                          <option>Chọn sản phẩm</option>
                          {dataProducts && dataProducts.length > 0
                            ? dataProducts.map((item, index) => (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              ))
                            : ""}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Tên sản phẩm</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          placeholder="Name"
                          required
                          name="name"
                          value={productData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Số lượng</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          required
                          name="manyProducts"
                          value={productData.manyProducts}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Giá</label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputName1"
                          required
                          name="price"
                          value={productData.price}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Sale</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          required
                          name="salePrice"
                          value={productData.salePrice}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Trademark</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          required
                          name="trademark"
                          value={productData.trademark}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="d-flex gap-3 align-items-center">
                          <label htmlFor="exampleInputName1">Avatar</label>

                          {productData.avatar !== "" ? (
                            <PhotoProvider>
                              <PhotoView src={productData.avatar}>
                                <img
                                  className={styles.avatarImg}
                                  src={productData.avatar}
                                  alt={productData.name}
                                  style={{ marginBottom: "5px" }}
                                />
                              </PhotoView>
                            </PhotoProvider>
                          ) : (
                            ""
                          )}
                        </div>

                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          required
                          name="avatar"
                          value={productData.avatar}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="d-flex gap-3 align-items-center">
                          <label>Ảnh</label>
                          {productData.detailImages.length > 0 &&
                            productData.detailImages.length > 1 &&
                            productData.detailImages.map((item, index) => (
                              <PhotoProvider>
                                <PhotoView src={item.hrefImage}>
                                  <img
                                    className={styles.avatarImg}
                                    src={item.hrefImage}
                                    alt={productData.name}
                                    style={{ marginBottom: "5px" }}
                                  />
                                </PhotoView>
                              </PhotoProvider>
                            ))}
                          {productData.detailImages.length > 0 &&
                            productData.detailImages.length > 1 && (
                              <button
                                type="button"
                                className="btn btn-primary mb-3"
                                name="btnImages"
                                onClick={(event) => {
                                  hendleBtn(event);
                                }}
                              >
                                Reset
                              </button>
                            )}
                        </div>

                        <input
                          type="file"
                          name="img"
                          className="file-upload-default"
                        />
                        <div className="input-group col-xs-12 d-flex gap-2">
                          <input
                            type="text"
                            className="form-control file-upload-info"
                            placeholder="href Image"
                            value={detailImages}
                            onChange={(event) =>
                              setDetailImage(event.target.value)
                            }
                          />
                          <span className="input-group-append d-flex gap-2">
                            <button
                              className="file-upload-browse btn btn-gradient-primary"
                              type="button"
                              onClick={hendleImageDetail}
                            >
                              Upload
                            </button>
                            <button
                              className="file-upload-browse btn btn-primary"
                              type="button"
                              onClick={hendleSaveDetailImage}
                            >
                              Save
                            </button>
                          </span>
                        </div>

                        <div className="text-danger"></div>
                      </div>

                      <div className="form-group">
                        <div className="d-flex gap-3  align-items-center">
                          <label>Màu sắc</label>
                          {productData.colors.length > 0 &&
                            productData.colors[0] !== null &&
                            productData.colors.map((item, index) => (
                              <>
                                <div
                                  key={index}
                                  className={styles.colorProduct}
                                  style={{
                                    background: `${item.color}`,
                                  }}
                                ></div>
                              </>
                            ))}
                          {productData.colors.length > 0 &&
                            productData.colors[0] !== null && (
                              <button
                                type="button"
                                name="btnColor"
                                className="btn btn-primary mb-3"
                                onClick={(event) => {
                                  hendleBtn(event);
                                }}
                              >
                                Reset
                              </button>
                            )}
                        </div>
                        <input
                          type="file"
                          name="img"
                          className="file-upload-default"
                        />
                        <div className="input-group col-xs-12 d-flex gap-2">
                          <input
                            type="text"
                            className="form-control file-upload-info"
                            placeholder="color product"
                            value={detailColor}
                            onChange={(event) =>
                              setDetailColor(event.target.value)
                            }
                          />
                          <span className="input-group-append d-flex gap-2">
                            <button
                              className="file-upload-browse btn btn-gradient-primary"
                              type="button"
                              onClick={hendleColorDetail}
                            >
                              Upload
                            </button>
                            <button
                              className="file-upload-browse btn btn-primary"
                              type="button"
                              onClick={hendleSaveColor}
                            >
                              Save
                            </button>
                          </span>
                        </div>

                        <div className="text-danger"></div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleTextarea1">Mô tả</label>
                        <textarea
                          className="form-control"
                          id="exampleTextarea1"
                          required
                          name="comment"
                          rows="4"
                          value={productData.comment}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label>Content Detail</label>
                        <MdEditor
                          style={{ height: "500px" }}
                          renderHTML={(text) => mdParser.render(text)}
                          onChange={handleEditorChange}
                          value={productData.desc}
                          ref={editorRef}
                        />
                      </div>
                      <div className="image-previews"></div>
                      <div className="form-group row" id="size-container">
                        <div className="d-flex mb-3 align-items-center gap-3">
                          <label
                            htmlFor="size-select"
                            className="col-sm-2 col-form-label"
                          >
                            Size đã tồn tại:
                          </label>
                          {productData.sizes.length > 0 &&
                            productData.sizes[0].size !== null &&
                            productData.sizes.map((item, index) => {
                              return (
                                <>
                                  <div
                                    className={styles.sizeProduct}
                                    key={index}
                                  >
                                    {item.size}
                                  </div>
                                </>
                              );
                            })}
                          {productData.sizes.length > 0 &&
                            productData.sizes[0].size !== null && (
                              <button
                                type="button"
                                className="btn btn-primary "
                                name="btnSizes"
                                onClick={(event) => {
                                  hendleBtn(event);
                                }}
                              >
                                Reset
                              </button>
                            )}
                        </div>
                        <div className="col-sm-6">
                          <select
                            className="form-control"
                            id="size-select"
                            value={detailSize}
                            onChange={(event) =>
                              setDetailSize(event.target.value)
                            }
                            required
                          >
                            <option value="xs">Size XS</option>
                            <option value="s">Size S</option>
                            <option value="m">Size M</option>
                            <option value="l">Size L</option>
                            <option value="xl">Size XL</option>
                          </select>
                        </div>
                        <div className="col-sm-4 d-flex gap-2">
                          <button
                            type="button"
                            className="btn btn-gradient-primary"
                            id="add-size-btn"
                            onClick={hendleSizesProduct}
                          >
                            Thêm Size
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            id="add-size-btn"
                            onClick={hendleSaveSize}
                          >
                            Save
                          </button>
                        </div>
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
                        onClick={hendleUpdateProduct}
                      >
                        Save
                      </button>
                      <button
                        type="reset"
                        className="btn btn-gradient-primary me-2"
                        onClick={() => {
                          toast.success("Reset thành công");
                          clearData();
                        }}
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

export default UpdateProduct;
