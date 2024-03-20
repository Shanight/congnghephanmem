import React from "react";
import "../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";

function Phong(this: any) {
  function deleteRow(
    arg0: any
  ): React.MouseEventHandler<HTMLButtonElement> | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="">
      <Topbar/>
      <Leftbar/>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Phòng</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Phòng</li>
            </ol>
            <nav style={{ textAlign: "right" }}>
              <a href="../phong/themphong">
                <button type="button" className="btn btn-info" style={{}}>
                  {" "}
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
                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">ID phòng</th>
                        <th scope="col">Tên phòng</th>
                        <th scope="col">Hạng phòng</th>
                        <th scope="col">Giá/giờ</th>
                        <th scope="col">Tình trạng</th>
                        <th>Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <a href="#">P.103</a>
                        </th>
                        <td>Phòng cặp đôi, VIP 1</td>
                        <td>VIP</td>
                        <td>$64</td>
                        <td>
                          <span className="badge bg-success">Đang thuê</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a href="suaphong.html" style={{ color: "white" }}>
                              <i className="bi bi-pen" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-danger">
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">P.103</a>
                        </th>
                        <td>Phòng cặp đôi, VIP 1</td>
                        <td>VIP</td>
                        <td>$64</td>
                        <td>
                          <span className="badge bg-success">Đang thuê</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a href="suaphong.html" style={{ color: "white" }}>
                              <i className="bi bi-pen" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-danger">
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">P.103</a>
                        </th>
                        <td>Phòng cặp đôi, VIP 1</td>
                        <td>VIP</td>
                        <td>$64</td>
                        <td>
                          <span className="badge bg-success">Đang thuê</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a href="suaphong.html" style={{ color: "white" }}>
                              <i className="bi bi-pen" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-danger">
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">P.103</a>
                        </th>
                        <td>Phòng cặp đôi, VIP 1</td>
                        <td>VIP</td>
                        <td>$64</td>
                        <td>
                          <span className="badge bg-success">Đang thuê</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a href="suaphong.html" style={{ color: "white" }}>
                              <i className="bi bi-pen" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-danger">
                            X
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">P.103</a>
                        </th>
                        <td>Phòng cặp đôi, VIP 1</td>
                        <td>VIP</td>
                        <td>$64</td>
                        <td>
                          <span className="badge bg-success">Đang thuê</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success">
                            <a href="suaphong.html" style={{ color: "white" }}>
                              <i className="bi bi-pen" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-danger">
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
    </div>
  );
}

export default Phong;
