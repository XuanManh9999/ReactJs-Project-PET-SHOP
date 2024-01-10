import 'bootstrap/dist/css/bootstrap.min.css';

import 'animate.css/animate.min.css';

import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5/js/dataTables.bootstrap5.min.js';


import './assets/css/style.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/quill/quill.snow.css';
import './assets/vendor/quill/quill.bubble.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/simple-datatables/style.css';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Header.module.scss';



function ManageProduct() {
    return (
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>Quản lý sản phẩm</h1>
            </div>

            <section class="section">
                <div class="row">
                    <div class="col-lg-12">

                        <div class="card">
                            <div class="card-body">
                                <form action="" class="forms-sample" method="post" enctype="multipart/form-data">
                                    <div class="d-flex align-items-center">
                                        <div class="col-md-4 mb-3 me-2">
                                            <label for="inputState" class="form-label">Danh mục</label>
                                            <select id="inputState" name="id_cate" class="form-select">
                                                <option value=""  >Tất cả</option>
                                                <option value=""  >Chó</option>
                                                <option value=""  >Mèo</option>
                                                <option value=""  >Chim</option>
                                            </select>
                                        </div>
                                        <input type="submit" class="btn btn-primary mt-2" name="listok" value="show" />
                                    </div>
                                </form>

                                <table id="example" class="table table-bordered table-striped" >
                                    <thead>
                                        <tr class="table-danger">
                                            <th>STT</th>
                                            <th >Name</th>
                                            <th>Ảnh</th>
                                            <th>Size</th>
                                            <th>Số lượng</th>
                                            <th>Giá</th>
                                            <th>Sale</th>
                                            <th>Tình trạng</th>
                                            <th >Mô tả</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Thức ăn cho chó</td>
                                            <td><img src='Images/logo (2).png' width={'80px'} height={'70px'}/></td>
                                            <td>S, M, L</td>
                                            <td>320</td>
                                            <td>200.000đ</td>
                                            <td>20%</td>
                                            <td>Còn hàng</td>
                                            <td>desc</td>
                                            <td>
                                                <a href="" class="edit" title="Edit" data-toggle="tooltip"><i class="bi bi-pencil"></i></a>
                                                <a href="" class="delete" title="Delete" data-toggle="tooltip"><i class="bi bi-trash3"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default ManageProduct;