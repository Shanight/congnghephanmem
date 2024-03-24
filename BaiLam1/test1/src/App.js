import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';
import Phong from './components/Admin/Phong/Phong';
import Themphong from './components/Admin/Phong/Themphong';
import SuaPhong from './components/Admin/Phong/SuaPhong';
import HomeAdmin from './components/Admin/Home/Home';
function App() {
  return (

    <BrowserRouter>

      <Routes>
      <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/phong" element={<Phong />} />
        <Route path="/admin/phong/themphong" element={<Themphong />} />
        <Route path="/admin/phong/:id/suaphong" element={<SuaPhong />} />
        <Route path="user/create" element={<CreateUser />} />
        <Route path="user/:id/edit" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
