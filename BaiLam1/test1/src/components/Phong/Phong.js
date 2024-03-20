import { useEffect, useState } from "react";
import "../../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import axios from "axios"
import { Link } from "react-router-dom";

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
                      {phongs.map((phongs, key) =>
                        <tr key={key}>
                          <td scope="row">
                            <a href="#">{phongs.SoPhong}</a>
                          </td>
                          <td>{phongs.TenPhong}</td>
                          <td>{phongs.HangPhong}</td>
                          <td>{phongs.GiaPhong} $</td>
                          <td>
                            <span className="badge bg-success">{phongs.TrangThai}</span>
                          </td>
                          <td>
                            <button type="button" className="btn btn-success">
                              <Link to={`${phongs.IDPhong}/suaphong`} style={{ color: "white" }}><i className="bi bi-pen" /></Link>
                              <a href="suaphong.html" >

                              </a>
                            </button>
                            <button onClick={() => deletephongs(phongs.IDPhong)} className="btn btn-danger">
                              X
                            </button>
                          </td>
                        </tr>
                      )}

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
