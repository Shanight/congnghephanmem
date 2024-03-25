import React, { useEffect, useRef, useState } from 'react';
import axios from "axios"

import "../../../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import { DataTable } from 'simple-datatables';
import { Link } from "react-router-dom";
function DichVu() {
  const [dichvus, setDichVus] = useState([]);

  useEffect(() => {
    getDichVus();
  }, []);

  function getDichVus() {
    axios.get('http://localhost/react/api/dichvu.php')
      .then(function (response) {
        setDichVus(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const deleteDichVu = (id) => {
    axios.delete(`http://localhost/react/api/dichvu.php/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getDichVus();
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
          <h1>Dịch vụ</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Dịch vụ</li>
            </ol>
            <nav style={{ textAlign: 'right' }}>
              <a href="dichvu/themdichvu">
                <button type="button" className="btn btn-info" style={{}}> + Thêm</button>
              </a>
            </nav>
          </nav></div>{/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="col-12">
              <div className="card recent-sales overflow-auto">
                <div className="card-body">
                  <table className="table table-borderless datatable" ref={tableRef}>
                    <thead>
                      <tr>
                        <th scope="col">ID dịch vụ</th>
                        <th scope="col">Tên dịch vụ</th>
                        <th scope="col">Loại dịch vụ</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Giá</th>
                        <th>Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dichvus.map((dichvu, index) => (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{dichvu.TenDV}</td>
                          <td>{dichvu.LoaiDV}</td>
                          <td>{dichvu.MoTa}</td>
                          <td>{dichvu.Gia} $</td>
                          <td>
                            <button type="button" className="btn btn-success">
                              <Link to={`${dichvu.IDDV}/suadichvu`} style={{ color: "white" }}>
                                <i className="bi bi-pencil" />
                              </Link>
                            </button>
                            <button onClick={() => deleteDichVu(dichvu.IDDV)} className="btn btn-danger">
                              X
                            </button>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>{/* End Recent Sales */}
          </div>
        </section>
      </main>

    </div>
  );
}

export default DichVu;
