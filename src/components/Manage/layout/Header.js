import 'bootstrap/dist/css/bootstrap.min.css';

import 'animate.css/animate.min.css';

import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5/js/dataTables.bootstrap5.min.js';

import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/quill/quill.snow.css';
import '../assets/vendor/quill/quill.bubble.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/simple-datatables/style.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../layout/Header.module.scss';
import { Link } from 'react-router-dom';

function HeaderAdmin() {
  return (
    <section>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link href="" className="logo d-flex align-items-center">
            <img
              src="https://i.ibb.co/3pCnKn8/logo-2.png"
              width={'60px'}
              height={'60px'}
              alt="Logo"
            />
            <span className="d-none d-lg-block">PetShop</span>
          </Link>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>
        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <Link className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </Link>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <Link href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <Link href="#">Show all notifications</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
              </Link>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 3 new messages
                  <Link href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <Link href="#">
                    <img
                      src="assets/img/messages-1.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <Link href="#">
                    <img
                      src="assets/img/messages-2.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <Link href="#">
                    <img
                      src="assets/img/messages-3.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                  <Link href="#">Show all messages</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown pe-3">
              <Link
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://i.ibb.co/Jx2trJF/default-user-1.png"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  Admin
                </span>
              </Link>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Admin</h6>
                  <span>Quản trị viên </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    href="?act=setting_account"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    href="?act=setting_account"
                  >
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    href="pages-faq.html"
                  >
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    href="?act=exits_account"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link " to="/">
              <i className="bi bi-grid"></i>
              <span>Tổng Quan</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#bill-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Đơn hàng</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul
              id="bill-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/OrderList">
                  <i className="bi bi-circle"></i>
                  <span>Danh sách đơn hàng</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#products-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-journal-text"></i>
              <span>Quản lý sản phẩm </span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul
              id="products-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/ProductAdd">
                  <i className="bi bi-circle"></i>
                  <span>Thêm sản phẩm</span>
                </Link>
              </li>
              <li>
                <Link to="/ProductManage">
                  <i className="bi bi-circle"></i>
                  <span>Danh sách sản phẩm</span>
                </Link>
              </li>
              <li>
                <Link to="/update-product">
                  <i className="bi bi-circle"></i>
                  <span>Cập nhật sản phẩm</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#blog-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-journal-text"></i>
              <span>Quản Lý Bài Viết</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul
              id="blog-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/BlogAdd">
                  <i className="bi bi-circle"></i>
                  <span>Thêm Bài Viết</span>
                </Link>
              </li>
              <li>
                <Link to="/ListBlog">
                  <i className="bi bi-circle"></i>
                  <span>Danh sách bài viết</span>
                </Link>
              </li>
              <li>
                <Link to="/UpdateBlog">
                  <i className="bi bi-circle"></i>
                  <span>Cập nhật bài viết</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#products-dm-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-box-seam"></i>
              <span>Danh mục sản phẩm</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul
              id="products-dm-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link href="?act=add_category">
                  <i className="bi bi-circle"></i>
                  <span>Thêm danh mục</span>
                </Link>
              </li>
              <li>
                <Link href="?act=show_category_admin">
                  <i className="bi bi-circle"></i>
                  <span>Danh sách danh mục</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#comment"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-chat-square-dots"></i>
              <span>Quản lý phản hồi</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul
              id="comment"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link href="">
                  <i className="bi bi-circle"></i>
                  <span>Danh sách phản hồi</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#user"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-person-gear"></i>
              <span>Quản lý tài khoản</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul
              id="user"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link href="">
                  <i className="bi bi-circle"></i>
                  <span>Danh sách tài khoản khách hàng</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="bi bi-circle"></i>
                  <span>Danh sách tài khoản quản trị</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <Link className="nav-link collapsed" href="">
              <i className="bi bi-person"></i>
              <span>Tài khoản</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" href="">
              <i className="bi bi-person-plus"></i>
              <span>Thêm quản trị viên</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" href="">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Thoát</span>
            </Link>
          </li>
        </ul>
      </aside>
    </section>
  );
}

export default HeaderAdmin;
