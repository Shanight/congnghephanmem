import React, { useEffect, useRef, useState } from 'react';

import "../../../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import axios from "axios"
import { Link } from "react-router-dom";
import { DataTable } from 'simple-datatables';
function Phong() {

  const [phongs, setPhongs] = useState([]);

  useEffect(() => {
    getPhongs();
  }, []);

  function getPhongs() {
    axios.get('http://localhost/react/api/phong.php')
      .then(function (response) {
        setPhongs(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function deletePhong(id) {
    axios.delete(`http://localhost/react/api/phong.php/${id}`)
      .then(function (response) {
        console.log(response.data);
        getPhongs(); // Refresh the list of phongs after deletion
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const tableRef = useRef(null);

  useEffect(() => {
    const initializeDataTable = () => {
      if (tableRef.current) {
        new DataTable(tableRef.current);
      }
    };

    const initializeDataTableWithDelay = () => {
      setTimeout(initializeDataTable, 500); // Áp dụng độ trễ 0.5 giây
    };

    initializeDataTableWithDelay();
  }, []);

  return (
    <div className="">
      <Topbar />
      <Leftbar />
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
              <a href="../admin/phong/themphong">
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
                  <table className="table table-borderless datatable" ref={tableRef}>
                    <thead>
                      <tr>
                        <th scope="col">ID phòng</th>
                        <th scope="col">Tên phòng</th>
                        <th scope="col">Hạng phòng</th>
                        <th scope="col">Giá/giờ</th>
                        <th scope="col">Tình trạng</th>
                        <th scope="col">Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phongs.map((phong, index) => (
                        <tr key={index}>
                          <td>{phong.SoPhong}</td>
                          <td>{phong.TenPhong}</td>
                          <td>{phong.HangPhong}</td>
                          <td>{phong.GiaPhong} $</td>
                          <td>
                            <span className="badge bg-success">{phong.TrangThai}</span>
                          </td>
                          <td>
                            <button type="button" className="btn btn-success">
                              <Link to={`${phong.IDPhong}/suaphong`} style={{ color: "white" }}>
                                <i className="bi bi-pencil" />
                              </Link>
                            </button>
                            <button onClick={() => deletePhong(phong.IDPhong)} className="btn btn-danger">
                              X
                            </button>
                          </td>
                        </tr>
                      ))}
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
