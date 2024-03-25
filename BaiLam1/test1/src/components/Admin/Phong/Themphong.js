import { useState } from "react";
import "../../../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Themphong() {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);
  const handleFileChange = (event) => {
    const files = event.target.files;
    setInputs((prevState) => ({ ...prevState, images: files }));
    
  };
  const handleChange = (event) => {
    
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('inputs', inputs);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post('http://localhost/react/api/phong.php/save', inputs).then(function (response) {
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
                <a href="/admin">Home</a>
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
                <form className="row g-3" onSubmit={handleSubmit} enctype="multipart/form-data">
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
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="SoPhong" className="form-label">
                      Up ảnh
                    </label>
                    <input
                      type="file"
                      multiple
                      name="images"
                      onChange={handleFileChange}
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
  );
}

export default Themphong;
