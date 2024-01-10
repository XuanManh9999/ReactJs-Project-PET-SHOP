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


function AddProduct() {
    return (
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>Thêm sản phẩm</h1>
            </div>

            <section class="section">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="col-12 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-description"></p>
                                        <form action="?act=save_add_product" class="forms-sample" id="addsppp" method="post" enctype="multipart/form-data">
                                            <div class="col-md-4 mb-3">
                                                <label for="inputState" class="form-label">Danh mục</label>
                                                <select id="inputState" name="id_cate" class="form-select">
                                                    <option value=''>Con Chó</option>
                                                    <option value=''>Mèo</option>
                                                    <option value=''>Chim</option>
                                                    <option value=''>Súc vật</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputName1">Tên sản phẩm</label>
                                                <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" required name="name" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputName1">Số lượng</label>
                                                <input type="text" class="form-control" id="exampleInputName1" required name="quantity" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputName1">Giá</label>
                                                <input type="number" class="form-control" id="exampleInputName1" required name="price" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputName1">Sale</label>
                                                <input type="text" class="form-control" id="exampleInputName1" required name="brand" />
                                            </div>
                                            <div class="form-group">
                                                <label>Ảnh</label>
                                                <input type="file" name="img" class="file-upload-default" />
                                                <div class="input-group col-xs-12">
                                                    <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image" />
                                                    <span class="input-group-append">
                                                        <button class="file-upload-browse btn btn-gradient-primary" type="button">Upload</button>
                                                    </span>
                                                </div>

                                                <div class="text-danger"></div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleTextarea1">Mô tả</label>
                                                <textarea class="form-control" id="exampleTextarea1" required name="mota" rows="4"></textarea>
                                            </div>
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form-group" id="image-gallery">
                                                            <label>Ảnh nhỏ</label>
                                                            <div class="input-group">
                                                                <button class="btn btn-gradient-primary add-image-btn" type="button">Thêm ảnh</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row image-previews "></div>
                                            </div>
                                            <div class="image-previews"></div>
                                            <div class="form-group row" id="size-container">
                                                <label for="size-select" class="col-sm-2 col-form-label">Size</label>
                                                <div class="col-sm-6">
                                                    <select class="form-control" id="size-select" required >
                                                        <option value="xs">Size XS</option>
                                                        <option value="s">Size S</option>
                                                        <option value="m">Size M</option>
                                                        <option value="l">Size L</option>
                                                        <option value="xl">Size XL</option>
                                                    </select>
                                                </div>
                                                <div class="col-sm-4">
                                                    <button type="button" class="btn btn-gradient-primary" id="add-size-btn">Thêm Size</button>
                                                </div>
                                            </div>

                                            <div class="form-group row" id="selected-sizes">

                                            </div>

                                            <input type="hidden" name="sizes" id="selected-sizes-input" value="" />
                                            <input type="submit" class="btn btn-gradient-primary me-2" name="add" value="Thêm" />
                                            <button type="reset" class="btn btn-gradient-primary me-2">Reset</button>
                                            <button class="btn btn-secondary">Quay lại</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            
        </main >

    );
}

export default AddProduct;