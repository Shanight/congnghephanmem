//C:\react\demo-project\src\components\EditUser.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Topbar from "../navbar/topbar";
import Leftbar from "../navbar/leftbar";
import "../../../css";

function SuaPhong() {
    const navigate = useNavigate();
 
    const [inputs, setInputs] = useState([]);
 
    const {id} = useParams();
 
    useEffect(() => {
        getUser();
    }, []);
 
    function getUser() {
        axios.get(`http://localhost/react/api/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
 
        axios.put(`http://localhost/react/api/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/admin/phong');
        });
         
    }
    return (
        <div className="">
      <Topbar />
      <Leftbar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Thêm phòng</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Phòng</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Thêm phòng</h5>
                {/* Multi Columns Form */}
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-12">
                    <label htmlFor="TenPhong" className="form-label">
                      Tên phòng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="TenPhong"
                      name="TenPhong"
                      onChange={handleChange}
                      value={inputs.TenPhong}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="HangPhong" className="form-label">
                      Hạng phòng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="HangPhong"
                      name="HangPhong"
                      onChange={handleChange}
                      value={inputs.HangPhong}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="GiaPhong" className="form-label">
                      Giá phòng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="GiaPhong"
                      name="GiaPhong"
                      onChange={handleChange}
                      value={inputs.GiaPhong}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="SoPhong" className="form-label">
                      Số Phòng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="SoPhong"
                      name="SoPhong"
                      onChange={handleChange}
                      value={inputs.SoPhong}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="TrangThai" className="form-label">
                      Trạng thái
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="TrangThai"
                      name="TrangThai"
                      onChange={handleChange}
                      value={inputs.TrangThai}
                    />

                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                    <button type="reset" className="btn btn-secondary">
                      Reset
                    </button>
                  </div>
                </form>
                {/* End Multi Columns Form */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    )
}
export default SuaPhong;
