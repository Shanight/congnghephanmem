import { useState } from "react";
import "../../../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ThemKhachHang() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);
  const handleFileChange = (event) => {
    const files = event.target.files;
    setInputs((prevState) => ({ ...prevState, images: files }));
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("inputs", inputs);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost/react/api/save", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/admin/phong");
      });
  };

  return (
    <div className="">
      <Topbar />
      <Leftbar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Thêm khách hàng</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Khách hàng</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Thêm Khách Hàng</h5>
                {/* Multi Columns Form */}
                <form className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="inputName5" className="form-label">
                      Tên Khách Hàng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName5"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail5" className="form-label">
                      Giới tính
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail5"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword5" className="form-label">
                      Ngày sinh
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="inputPassword5"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputPassword6" className="form-label">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword6"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword7" className="form-label">
                      SDT
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="inputPassword7"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword8" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputPassword8"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Lưu
                    </button>
                    <button type="reset" className="btn btn-secondary">
                      Thoát
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
  );
}

export default ThemKhachHang;
