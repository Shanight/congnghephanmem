import React, { useEffect, useRef } from 'react';

import "../../../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import SoDo from './SoDo';
import { DataTable } from 'simple-datatables';

function HomeAdmin() {
  const tableRef = useRef(null);
  const tableRef1 = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      new DataTable(tableRef.current);
    }

    if (tableRef1.current) {
      new DataTable(tableRef1.current);
    }
  }, []);

  return (
    <div className="">
      <Topbar />
      <Leftbar />
      <main id="main" className="main">
        <div>
          <div className="pagetitle">
            <h1>Trang chủ</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>{/* End Page Title */}
          <section className="section dashboard">
            <div className="row">
              {/* Left side columns */}
              <div className="col-lg">
                <div className="row">
                  {/* Sales Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li><a className="dropdown-item" href="#">Hôm nay</a></li>
                          <li><a className="dropdown-item" href="#">Tháng này</a></li>
                          <li><a className="dropdown-item" href="#">Năm này</a></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Thuê phòng <span>| Hôm nay</span></h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart" />
                          </div>
                          <div className="ps-3">
                            <h6>12</h6>
                            <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End Sales Card */}
                  {/* Revenue Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li><a className="dropdown-item" href="#">Hôm nay</a></li>
                          <li><a className="dropdown-item" href="#">Tháng này</a></li>
                          <li><a className="dropdown-item" href="#">Năm này</a></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Doanh thu <span>| Tháng này</span></h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar" />
                          </div>
                          <div className="ps-3">
                            <h6>$3,264</h6>
                            <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End Revenue Card */}
                  {/* Customers Card */}
                  <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card customers-card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li><a className="dropdown-item" href="#">Hôm nay</a></li>
                          <li><a className="dropdown-item" href="#">Tháng này</a></li>
                          <li><a className="dropdown-item" href="#">Năm này</a></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Khách hàng <span>| Năm này</span></h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people" />
                          </div>
                          <div className="ps-3">
                            <h6>1244</h6>
                            <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* End Customers Card */}
                  {/* Reports */}
                  <div className="col-12">
                    <div className="card">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li><a className="dropdown-item" href="#">Hôm nay</a></li>
                          <li><a className="dropdown-item" href="#">Tháng này</a></li>
                          <li><a className="dropdown-item" href="#">Năm này</a></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Sơ đồ <span>/Hôm nay</span></h5>
                        {/* Line Chart */}
                        <div id="reportsChart" />
                        {/* End Line Chart */}
                        <SoDo />
                      </div>
                    </div>
                  </div>{/* End Reports */}
                  {/* Recent Sales */}
                  <div className="col-12">
                    <div className="card recent-sales overflow-auto">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li><a className="dropdown-item" href="#">Hôm nay</a></li>
                          <li><a className="dropdown-item" href="#">Tháng này</a></li>
                          <li><a className="dropdown-item" href="#">Năm này</a></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Hóa đơn gần đây <span>| Hôm nay</span></h5>
                        <table className="table table-borderless datatable" ref={tableRef}>
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Khách hàng</th>
                              <th scope="col">Phòng</th>
                              <th scope="col">Giá</th>
                              <th scope="col">Tình trạng</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><a href="#">#2457</a></th>
                              <td>Brandon Jacob</td>
                              <td>P.105</td>
                              <td>$64</td>
                              <td><span className="badge bg-success">Đang thuê</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2147</a></th>
                              <td>Bridie Kessler</td>
                              <td>P.205</td>
                              <td>$47</td>
                              <td><span className="badge bg-warning">Đã đặt phòng</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2049</a></th>
                              <td>Ashleigh Langosh</td>
                              <td>P.102</td>
                              <td>$147</td>
                              <td><span className="badge bg-success">Đang thuê</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2644</a></th>
                              <td>Angus Grady</td>
                              <td>P.405</td>
                              <td>$67</td>
                              <td><span className="badge bg-danger">Đã hủy</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2644</a></th>
                              <td>Raheem Lehner</td>
                              <td>P.304</td>
                              <td>$165</td>
                              <td><span className="badge bg-success">Đang thuê</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>{/* End Recent Sales */}
                  {/* Top Selling */}
                  <div className="col-12">
                    <div className="card top-selling overflow-auto">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li><a className="dropdown-item" href="#">Hôm nay</a></li>
                          <li><a className="dropdown-item" href="#">Tháng này</a></li>
                          <li><a className="dropdown-item" href="#">Năm này</a></li>
                        </ul>
                      </div>
                      <div className="card-body pb-0">
                        <h5 className="card-title">Các phòng nổi bật <span>| Hôm nay</span></h5>
                        <table className="table table-borderless" ref={tableRef1}>
                          <thead>
                            <tr>
                              <th scope="col">Preview</th>
                              <th scope="col">Mã phòng</th>
                              <th scope="col">Tên phòng</th>
                              <th scope="col">Giá</th>
                              <th scope="col" style={{ textAlign: 'center' }}>Số lần thuê</th>
                              <th scope="col">Tổng</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><a href="#"><img src="../assets/img/product-2.jpg" alt /></a></th>
                              <td>P.104</td>
                              <td>Phòng VIP2</td>
                              <td>$46</td>
                              <td className="fw-bold" style={{ textAlign: 'center' }}>40</td>
                              <td>$4,508</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="../assets/img/product-2.jpg" alt /></a></th>
                              <td>P.104</td>
                              <td>Phòng VIP2</td>
                              <td>$46</td>
                              <td className="fw-bold" style={{ textAlign: 'center' }}>40</td>
                              <td>$4,508</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="../assets/img/product-2.jpg" alt /></a></th>
                              <td>P.104</td>
                              <td>Phòng VIP2</td>
                              <td>$46</td>
                              <td className="fw-bold" style={{ textAlign: 'center' }}>40</td>
                              <td>$4,508</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="../assets/img/product-2.jpg" alt /></a></th>
                              <td>P.104</td>
                              <td>Phòng VIP2</td>
                              <td>$46</td>
                              <td className="fw-bold" style={{ textAlign: 'center' }}>40</td>
                              <td>$4,508</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="../assets/img/product-2.jpg" alt /></a></th>
                              <td>P.104</td>
                              <td>Phòng VIP2</td>
                              <td>$46</td>
                              <td className="fw-bold" style={{ textAlign: 'center' }}>40</td>
                              <td>$4,508</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>{/* End Top Selling */}
                </div>
              </div>{/* End Left side columns */}
              {/* Right side columns */}
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}

export default HomeAdmin;
