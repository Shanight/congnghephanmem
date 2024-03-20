import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';
import Phong from './components/Phong/Phong';
import Home from './components/Home/Home';
import Themphong from './components/Phong/Themphong';
import SuaPhong from './components/Phong/SuaPhong';
function App() {
  return (
 
      <BrowserRouter>
 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phong" element={<Phong />} />
        <Route path="/phong/themphong" element={<Themphong />} />
        <Route path="/phong/:id/suaphong" element={<SuaPhong />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
