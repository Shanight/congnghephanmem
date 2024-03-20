import React from "react";
import "../css";
import Leftbar from "../navbar/leftbar";
import Topbar from "../navbar/topbar";
import { getStorage } from "firebase/storage";
import "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function Themphong() {
  const upload = async () => {
    try {
      const docRef = await addDoc(collection(db, "phong"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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
                <form className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="inputName5" className="form-label">
                      Tên phòng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName5"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail5" className="form-label">
                      Hạng phòng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail5"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword5" className="form-label">
                      Giá phòng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword5"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={upload}
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
