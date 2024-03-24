import React from "react";
import "../../../css";

function Leftbar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link collapsed" href="/admin">
            <i className="bi bi-grid" />
            <span>Trang chủ</span>
          </a>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/admin/datphong">
            <i className="bi bi-grid" />
            <span>Đặt phòng</span>
          </a>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/admin/phong">
            <i className="bi bi-grid" />
            <span>Phòng</span>
          </a>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/admin/dichvu">
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
              <a href="/admin/nhanvien">
                <i className="bi bi-circle" />
                <span>Nhân viên</span>
              </a>
            </li>
            <li>
              <a href="/admin/hoadon">
                <i className="bi bi-circle" />
                <span>Hóa đơn</span>
              </a>
            </li>
            <li>
              <a href="/admin/khachhang">
                <i className="bi bi-circle" />
                <span>Khách Hàng</span>
              </a>
            </li>
          </ul>
        </li>
        {/* End Components Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/admin/profile">
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
