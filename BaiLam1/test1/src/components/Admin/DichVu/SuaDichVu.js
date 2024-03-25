import React, { useEffect, useRef } from 'react';

import "../../../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import { DataTable } from 'simple-datatables';

function SuaDichVu() {
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

            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Sửa dịch vụ</h1>
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
                                <h5 className="card-title">Sửa dịch vụ</h5>
                                {/* Multi Columns Form */}
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Tên Dịch Vụ :</label>
                                        <input type="text" id="name" name="name" className="form-control" defaultValue="Cơm Gà" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Loại Dịch Vụ :</label>
                                        <input type="text" id="name" name="name" className="form-control" defaultValue="Thức Ăn" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Số Lượng Hiện Có :</label>
                                        <input type="text" id="name" name="name" className="form-control" defaultValue={79} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Giá :</label>
                                        <input type="text" id="name" name="name" className="form-control" defaultValue="15$" />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="name" className="form-label">Mô Tả :</label>
                                        <input type="text" id="name" name="name" className="form-control" defaultValue="Cơm gà xối mở được làm ra bởi nghệ nhân" />
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

export default SuaDichVu;
