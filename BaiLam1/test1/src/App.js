import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';
import Phong from './components/Admin/Phong/Phong';
import Themphong from './components/Admin/Phong/Themphong';
import SuaPhong from './components/Admin/Phong/SuaPhong';
import HomeAdmin from './components/Admin/Home/Home';
import DichVu from './components/Admin/DichVu/DichVu';
import SuaDichVu from './components/Admin/DichVu/SuaDichVu';
import ThemDichVu from './components/Admin/DichVu/ThemDichVu';
import HoaDon from './components/Admin/HoaDon/HoaDon';
import NhanVien from './components/Admin/NhanVien/NhanVien';
import ThemNhanVien from './components/Admin/NhanVien/ThemNhanVien';
import KhachHang from './components/Admin/KhachHang/KhachHang';
import ThemKhachHang from './components/Admin/KhachHang/ThemKhachHang';
function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/phong" element={<Phong />} />
        <Route path="/admin/phong/themphong" element={<Themphong />} />
        <Route path="/admin/phong/:id/suaphong" element={<SuaPhong />} />

        <Route path="/admin/dichvu" element={<DichVu />} />
        <Route path="/admin/dichvu/themdichvu" element={<ThemDichVu />} />
        <Route path="/admin/dichvu/:id/suadichvu" element={<SuaDichVu />} />

        <Route path="/admin/hoadon" element={<HoaDon />} />

        <Route path="/admin/khachhang" element={<KhachHang />} />
        <Route path="/admin/khachhang/themkhachhang" element={<ThemKhachHang />} />

        <Route path="/admin/nhanvien" element={<NhanVien />} />
        <Route path="/admin/nhanvien/themnhanvien" element={<ThemNhanVien />} />

        <Route path="user/create" element={<CreateUser />} />
        <Route path="user/:id/edit" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
