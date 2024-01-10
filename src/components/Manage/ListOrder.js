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


function ListOrder() {
    return (
        <section>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Quản lý đơn hàng</h1>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <table
                                id="example"
                                className="table table-bordered table-striped"
                                style={{ width: '100%' }}
                            >
                                <thead style={{ fontWeight: 'bold', fontFamily: 'monospace', fontSize: '16px' }}>
                                    <tr className="table-danger">
                                        <th>STT</th>
                                        <th>Tên Khách Hàng </th>
                                        <th>Số điện thoại</th>
                                        <th>Địa chỉ</th>
                                        <th>Code order</th>
                                        <th>Ngày mua hàng</th>
                                        <th>Trạng thái</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Đinh Văn Duy</td>
                                        <td>033277363</td>
                                        <td>Hà Nội</td>
                                        <td>ID sản phẩm</td>
                                        <td>Date</td>
                                        <td>Đã giao hàng</td>
                                        <td>
                                            <a href="" class="text-info" title="Show Detail" data-toggle="tooltip"><i class="bi bi-ticket-detailed"></i></a>
                                            <a href="" class="delete" title="Delete" data-toggle="tooltip"><i class="bi bi-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main >
        </section >
    );
}

export default ListOrder;
