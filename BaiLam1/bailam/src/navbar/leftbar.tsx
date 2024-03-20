import React from "react";
import "../css";

function Leftbar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link collapsed" href="index.html">
            <i className="bi bi-grid" />
            <span>Trang chủ</span>
          </a>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="datphong.html">
            <i className="bi bi-grid" />
            <span>Đặt phòng</span>
          </a>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="phong.html">
            <i className="bi bi-grid" />
            <span>Phòng</span>
          </a>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="dichvu.html">
            <i className="bi bi-grid" />
            <span>Dịch vụ</span>
          </a>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-target="#components-nav1"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide" />
            <span>Quản lý</span>
            <i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul
            id="components-nav1"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="nhanvien.html">
                <i className="bi bi-circle" />
                <span>Nhân viên</span>
              </a>
            </li>
            <li>
              <a href="hoadon.html">
                <i className="bi bi-circle" />
                <span>Hóa đơn</span>
              </a>
            </li>
            <li>
              <a href="khachhang.html">
                <i className="bi bi-circle" />
                <span>Khách Hàng</span>
              </a>
            </li>
          </ul>
        </li>
        {/* End Components Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-person" />
            <span>Profile</span>
          </a>
        </li>
        {/* End Profile Page Nav */}
      </ul>
    </aside>
  );
}

export default Leftbar;
