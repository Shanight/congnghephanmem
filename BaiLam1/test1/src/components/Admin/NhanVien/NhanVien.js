import React, { useEffect, useRef } from "react";

import "../../../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import { DataTable } from "simple-datatables";

function NhanVien() {
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
      {/*main*/}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Nhân viên</h1>
          <nav>
            <ol className="breadcrumb" style={{ width: "100%" }}>
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Quản lý</li>
              <li className="breadcrumb-item active">Nhân viên</li>
            </ol>
            <nav style={{ textAlign: "right" }}>
              <a href="../admin/nhanvien/themnhanvien">
                <button type="button" className="btn btn-info" style={{}}>
                  + Thêm
                </button>
              </a>
            </nav>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="col-12">
              <div className="card recent-sales overflow-auto">
                <div className="card-body">
                  <table
                    className="table table-borderless datatable"
                    ref={tableRef}
                  >
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên nhân viên</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">Vị trí</th>
                        <th scope="col">Lương/tháng</th>
                        <th scope="col">Tình trạng</th>
                        <th>Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <a href="#">1</a>
                        </th>
                        <td>Nguyễn Văn A</td>
                        <td>Nam</td>
                        <td>04/10/2000</td>
                        <td>Nhân viên</td>
                        <td>500$</td>
                        <td>
                          <span className="badge bg-success">Đang làm</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a
                              href="chititetnhanvien.html"
                              style={{ color: "white" }}
                            >
                              <i className="bi bi-book" />
                            </a>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onclick="deleteRow(this)"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">2</a>
                        </th>
                        <td>Nguyễn Văn A</td>
                        <td>Nam</td>
                        <td>04/10/2000</td>
                        <td>Nhân viên</td>
                        <td>500$</td>
                        <td>
                          <span className="badge bg-success">Đang làm</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a
                              href="chititetnhanvien.html"
                              style={{ color: "white" }}
                            >
                              <i className="bi bi-book" />
                            </a>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onclick="deleteRow(this)"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">3</a>
                        </th>
                        <td>Nguyễn Văn A</td>
                        <td>Nam</td>
                        <td>04/10/2000</td>
                        <td>Nhân viên</td>
                        <td>500$</td>
                        <td>
                          <span className="badge bg-success">Đang làm</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a
                              href="chititetnhanvien.html"
                              style={{ color: "white" }}
                            >
                              <i className="bi bi-book" />
                            </a>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onclick="deleteRow(this)"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">4</a>
                        </th>
                        <td>Nguyễn Văn A</td>
                        <td>Nam</td>
                        <td>04/10/2000</td>
                        <td>Nhân viên</td>
                        <td>500$</td>
                        <td>
                          <span className="badge bg-success">Đang làm</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a
                              href="chititetnhanvien.html"
                              style={{ color: "white" }}
                            >
                              <i className="bi bi-book" />
                            </a>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onclick="deleteRow(this)"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">5</a>
                        </th>
                        <td>Nguyễn Văn A</td>
                        <td>Nam</td>
                        <td>04/10/2000</td>
                        <td>Nhân viên</td>
                        <td>500$</td>
                        <td>
                          <span className="badge bg-success">Đang làm</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a
                              href="chititetnhanvien.html"
                              style={{ color: "white" }}
                            >
                              <i className="bi bi-book" />
                            </a>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onclick="deleteRow(this)"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">6</a>
                        </th>
                        <td>Nguyễn Văn A</td>
                        <td>Nam</td>
                        <td>04/10/2000</td>
                        <td>Nhân viên</td>
                        <td>500$</td>
                        <td>
                          <span className="badge bg-success">Đang làm</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a
                              href="chititetnhanvien.html"
                              style={{ color: "white" }}
                            >
                              <i className="bi bi-book" />
                            </a>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onclick="deleteRow(this)"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* End Recent Sales */}
          </div>
        </section>
      </main>
      {/* End #main */}

      {/*EndMain*/}
    </div>
  );
}

export default NhanVien;
