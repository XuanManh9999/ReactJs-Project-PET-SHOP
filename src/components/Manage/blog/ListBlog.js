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
import {
  getAllProduct,
  deleteProductById,
} from "../../../services/client/hendleProducts";
function ListBlog() {
  const [dataProduct, setDataProduct] = useState([]);
  const [isCHeckDelete, setIsCheckDelete] = useState(false);
  useEffect(() => {
    const callAPIGetALLData = async () => {
      const res = await getAllProduct();
      setDataProduct(res);
    };
    callAPIGetALLData();
  }, [isCHeckDelete]);
  const hendleDeleteProduct = async (id) => {
    try {
      const res = await deleteProductById(id);
      if (res && res.status === 200) {
        setIsCheckDelete(true);
        toast.success("Xóa thành công");
      } else {
        setIsCheckDelete(false);
        toast.err("Xóa không thành công");
      }
    } catch (err) {
      setIsCheckDelete(false);
      toast.error("Xóa không thành công. Đã xảy ra lỗi phía server");
    }
  };
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Quản lý sản phẩm</h1>
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
                        Danh mục
                      </label>
                      <select
                        id="inputState"
                        name="id_cate"
                        className="htmlForm-select"
                      >
                        <option value="">Tất cả</option>
                        <option value="">Chó</option>
                        <option value="">Mèo</option>
                        <option value="">Chim</option>
                      </select>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary mt-2"
                      name="listok"
                      value="show"
                    />
                  </div>
                </form>

                <table
                  id="example"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr className="table-danger">
                      <th>STT</th>
                      <th>Name</th>
                      <th>Ảnh</th>
                      <th>Size</th>
                      <th>Color</th>
                      <th>Số lượng</th>
                      <th>Giá</th>
                      <th>Sale</th>
                      <th>Giảm giá</th>
                      <th>Mô tả</th>
                      <th>Xóa sản phẩm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataProduct &&
                      dataProduct.data &&
                      dataProduct.data.length > 0 &&
                      dataProduct.data.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td className="">
                              <img
                                src={item.avatar}
                                style={{ objectFit: "cover" }}
                                width={"50px"}
                                height={"80px"}
                                alt=""
                              />
                            </td>
                            <td>
                              {item &&
                              item.sizes[0].size !== null &&
                              item.sizes.length > 0
                                ? item.sizes
                                    .map((sizeItem) => sizeItem.size)
                                    .join(", ")
                                : "N/A"}
                            </td>
                            <td>
                              {item &&
                              item.colors[0].color !== null &&
                              item.colors.length > 0
                                ? item.sizes
                                    .map((sizeItem) => sizeItem.color)
                                    .join(", ")
                                : "N/A"}
                            </td>
                            <td>{item.manyProducts}</td>
                            <td>{item.price}đ</td>
                            <td>{item.salePrice}đ</td>
                            <td>
                              {(
                                ((item.price - item.salePrice) / item.price) *
                                100
                              ).toFixed(0)}
                              %
                            </td>
                            <td>{item.comment ? item.comment : "N/A"}</td>
                            <td>
                              <button
                                style={{
                                  border: "none",
                                }}
                                onClick={() => {
                                  hendleDeleteProduct(item.id);
                                }}
                                className="delete"
                                title="Delete"
                                data-toggle="tooltip"
                              >
                                <i className="bi bi-trash3"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
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
