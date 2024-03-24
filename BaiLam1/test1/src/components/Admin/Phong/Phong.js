import React, { useEffect, useRef, useState } from 'react';

import "../../../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import axios from "axios"
import { Link } from "react-router-dom";
import { DataTable } from 'simple-datatables';

function Phong() {

  const [phongs, setphongs] = useState([]);
  useEffect(() => {
    getphongs();
  }, []);


  function getphongs() {
    axios.get('http://localhost/react/api/').then(function (response) {
      console.log(response.data);
      setphongs(response.data);
    });
  }

  const deletephongs = (id) => {
    axios.delete(`http://localhost/react/api/${id}/delete`).then(function (response) {
      console.log(response.data);
      getphongs();
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
      setTimeout(initializeDataTable, 100); // Áp dụng độ trễ 0.5 giây
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
                      {phongs.map((phong, key) => (
                        <React.Fragment key={key}>
                          <tr>
                            <th scope="col">{phong.SoPhong}</th>
                            <td scope="col">{phong.TenPhong}</td>
                            <td scope="col">{phong.HangPhong}</td>
                            <td scope="col">{phong.GiaPhong} $</td>
                            <td scope="col">
                              <span className="badge bg-success">{phong.TrangThai}</span>
                            </td>
                            <td scope="col">
                              <button type="button" className="btn btn-success">
                                <Link to={`${phong.IDPhong}/suaphong`} style={{ color: "white" }}>
                                  <i className="bi bi-pen" />
                                </Link>
                              </button>
                              <button onClick={() => deletephongs(phong.IDPhong)} className="btn btn-danger">
                                X
                              </button>
                            </td>
                          </tr>
                        </React.Fragment>
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
