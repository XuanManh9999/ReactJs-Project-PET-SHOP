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
import { Link } from 'react-router-dom';

function HeaderAdmin() {
    return (
        <section>
            <header id="header" class="header fixed-top d-flex align-items-center">

                <div class="d-flex align-items-center justify-content-between">
                    <a href="" class="logo d-flex align-items-center">
                        <img src="Images/logo (2).png" width={'60px'} height={'60px'} alt="" />
                        <span class="d-none d-lg-block">PetShop</span>
                    </a>
                    <i class="bi bi-list toggle-sidebar-btn"></i>
                </div>
                <div class="search-bar">
                    <form class="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i class="bi bi-search"></i></button>
                    </form>
                </div>

                <nav class="header-nav ms-auto">
                    <ul class="d-flex align-items-center">

                        <li class="nav-item d-block d-lg-none">
                            <a class="nav-link nav-icon search-bar-toggle " href="#">
                                <i class="bi bi-search"></i>
                            </a>
                        </li>

                        <li class="nav-item dropdown">

                            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i class="bi bi-bell"></i>
                                <span class="badge bg-primary badge-number">4</span>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li class="dropdown-header">
                                    You have 4 new notifications
                                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-exclamation-circle text-warning"></i>
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-x-circle text-danger"></i>
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-check-circle text-success"></i>
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-info-circle text-primary"></i>
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li class="dropdown-footer">
                                    <a href="#">Show all notifications</a>
                                </li>

                            </ul>

                        </li>

                        <li class="nav-item dropdown">

                            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i class="bi bi-chat-left-text"></i>
                                <span class="badge bg-success badge-number">3</span>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                <li class="dropdown-header">
                                    You have 3 new messages
                                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="message-item">
                                    <a href="#">
                                        <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle" />
                                        <div>
                                            <h4>Maria Hudson</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="message-item">
                                    <a href="#">
                                        <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle" />
                                        <div>
                                            <h4>Anna Nelson</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>6 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="message-item">
                                    <a href="#">
                                        <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle" />
                                        <div>
                                            <h4>David Muldon</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>8 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li class="dropdown-footer">
                                    <a href="#">Show all messages</a>
                                </li>

                            </ul>

                        </li>

                        <li class="nav-item dropdown pe-3">

                            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="Images/logo (2).png" alt="Profile" class="rounded-circle" />
                                <span class="d-none d-md-block dropdown-toggle ps-2">Mr.Duy</span>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li class="dropdown-header">
                                    <h6>Mr.Duy</h6>
                                    <span>Quản trị viên </span>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="?act=setting_account">
                                        <i class="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="?act=setting_account">
                                        <i class="bi bi-gear"></i>
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i class="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>

                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="?act=exits_account">
                                        <i class="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </nav>
            </header>

            <aside id="sidebar" class="sidebar">

                <ul class="sidebar-nav" id="sidebar-nav">

                    <li class="nav-item">
                        <Link class="nav-link " to="/">
                            <i class="bi bi-grid"></i>
                            <span>Tổng Quan</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#bill-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-layout-text-window-reverse"></i><span>Đơn hàng</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="bill-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/OrderList">
                                    <i class="bi bi-circle"></i><span>Danh sách đơn hàng</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#products-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-journal-text"></i><span>Quản lý sản phẩm </span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="products-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/ProductAdd">
                                    <i class="bi bi-circle"></i><span>Thêm sản phẩm</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/ProductManage">
                                    <i class="bi bi-circle"></i><span>Danh sách sản phẩm</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#products-dm-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-box-seam"></i><span>Danh mục sản phẩm</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="products-dm-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="?act=add_category">
                                    <i class="bi bi-circle"></i><span>Thêm danh mục</span>
                                </a>
                            </li>
                            <li>
                                <a href="?act=show_category_admin">
                                    <i class="bi bi-circle"></i><span>Danh sách danh mục</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#comment" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-chat-square-dots"></i><span>Quản lý phản hồi</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="comment" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="">
                                    <i class="bi bi-circle"></i><span>Danh sách phản hồi</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#user" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-person-gear"></i><span>Quản lý tài khoản</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="user" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="">
                                    <i class="bi bi-circle"></i><span>Danh sách tài khoản khách hàng</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="bi bi-circle"></i><span>Danh sách tài khoản quản trị</span>
                                </a>
                            </li>
                        </ul>
                    </li>



                    <li class="nav-heading">Pages</li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="">
                            <i class="bi bi-person"></i>
                            <span>Tài khoản</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="">
                            <i class="bi bi-person-plus"></i>
                            <span>Thêm quản trị viên</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="">
                            <i class="bi bi-box-arrow-in-right"></i>
                            <span>Thoát</span>
                        </a>
                    </li>
                </ul>

            </aside>
        </section>
    );
}

export default HeaderAdmin;