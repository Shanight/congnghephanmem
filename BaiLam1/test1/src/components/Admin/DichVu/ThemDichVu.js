import React, { useEffect, useRef,useState } from 'react';

import "../../../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ThemDichVu() {
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
    axios.post('http://localhost/react/api/dichvu.php/save', inputs).then(function (response) {
      console.log(response.data);
      navigate('/admin/dichvu');
    });
  }

    return (
        <div className="">
            <Topbar />
            <Leftbar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Thêm dịch vụ</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Dịch vụ</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Thêm dịch vụ</h5>
                                {/* Multi Columns Form */}
                                <form className="row g-3">
                                    <div className="col-md-12">
                                        <label htmlFor="inputName5" className="form-label">Tên dịch vụ</label>
                                        <input type="text" className="form-control" id="inputName5" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail5" className="form-label">Mô tả</label>
                                        <input type="text" className="form-control" id="inputEmail5" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword5" className="form-label">Giá</label>
                                        <input type="text" className="form-control" id="inputPassword5" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Lưu</button>
                                        <button type="reset" className="btn btn-secondary">Thoát</button>
                                    </div>
                                </form>{/* End Multi Columns Form */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default ThemDichVu;
