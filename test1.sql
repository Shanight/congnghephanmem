-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 25, 2024 lúc 02:32 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `test1`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `anhphongs`
--

CREATE TABLE `anhphongs` (
  `IDAnh` int(11) NOT NULL,
  `TenAnh` varchar(255) NOT NULL,
  `NhomAnh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dichvus`
--

CREATE TABLE `dichvus` (
  `IDDV` int(11) NOT NULL,
  `TenDV` varchar(255) NOT NULL,
  `MoTa` varchar(255) NOT NULL,
  `Gia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `dichvus`
--

INSERT INTO `dichvus` (`IDDV`, `TenDV`, `MoTa`, `Gia`) VALUES
(1, 'Cơm gà xối mỡ', 'Cơm gà với da gà giòn', '34');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dichvusudungs`
--

CREATE TABLE `dichvusudungs` (
  `IDDVSD` int(255) NOT NULL,
  `MaDP` varchar(255) NOT NULL,
  `IDDV` int(255) NOT NULL,
  `SoLuong` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadonchitiets`
--

CREATE TABLE `hoadonchitiets` (
  `MaDP` varchar(255) NOT NULL,
  `IDHD` int(255) NOT NULL,
  `NgayDat` date NOT NULL,
  `NgayNhan` date NOT NULL,
  `NgayTra` date NOT NULL,
  `Tien` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadons`
--

CREATE TABLE `hoadons` (
  `IDHD` int(255) NOT NULL,
  `IDDVSD` int(255) NOT NULL,
  `MaDP` varchar(255) NOT NULL,
  `TrangThai` varchar(255) NOT NULL,
  `IDNV` int(255) NOT NULL,
  `IDKH` int(255) NOT NULL,
  `TongTien` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhangs`
--

CREATE TABLE `khachhangs` (
  `IDKH` int(255) NOT NULL,
  `TenKH` int(255) NOT NULL,
  `SDT` int(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `GioiTinh` varchar(255) NOT NULL,
  `CCCD` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanviens`
--

CREATE TABLE `nhanviens` (
  `IDNV` int(255) NOT NULL,
  `TenNV` varchar(255) NOT NULL,
  `GioiTinh` varchar(255) NOT NULL,
  `NgaySinh` date NOT NULL,
  `AnhDaiDien` varchar(255) NOT NULL,
  `DiaChi` varchar(255) NOT NULL,
  `SDT` int(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `ViTri` varchar(255) NOT NULL,
  `NgayVaoLam` date NOT NULL,
  `TinhTrang` varchar(255) NOT NULL,
  `MucLuong` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phongs`
--

CREATE TABLE `phongs` (
  `IDPhong` int(255) NOT NULL,
  `TenPhong` varchar(255) NOT NULL,
  `HangPhong` varchar(255) NOT NULL,
  `GiaPhong` varchar(255) NOT NULL,
  `TrangThai` varchar(255) NOT NULL,
  `SoPhong` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `phongs`
--

INSERT INTO `phongs` (`IDPhong`, `TenPhong`, `HangPhong`, `GiaPhong`, `TrangThai`, `SoPhong`) VALUES
(19, 'Phòng gia đình 5 người ', 'Familyi', '36332', 'Đã đặt', 'P.103'),
(20, 'Phòng cặp đôi, VIP2', 'VIP', '36332', 'Trống', 'P.103'),
(26, 'Phòng gia đình 5 người ', 'Familyi', '363', 'Trống', 'P.203'),
(27, 'Phòng gia đình 5 người ', '32r', '304ư3r', 'Trống', 'P.2034');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quyens`
--

CREATE TABLE `quyens` (
  `ViTri` varchar(255) NOT NULL,
  `TenVT` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `mobile` varchar(150) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `anhphongs`
--
ALTER TABLE `anhphongs`
  ADD PRIMARY KEY (`IDAnh`);

--
-- Chỉ mục cho bảng `dichvus`
--
ALTER TABLE `dichvus`
  ADD PRIMARY KEY (`IDDV`);

--
-- Chỉ mục cho bảng `dichvusudungs`
--
ALTER TABLE `dichvusudungs`
  ADD PRIMARY KEY (`IDDVSD`);

--
-- Chỉ mục cho bảng `hoadonchitiets`
--
ALTER TABLE `hoadonchitiets`
  ADD PRIMARY KEY (`MaDP`);

--
-- Chỉ mục cho bảng `hoadons`
--
ALTER TABLE `hoadons`
  ADD PRIMARY KEY (`IDHD`);

--
-- Chỉ mục cho bảng `khachhangs`
--
ALTER TABLE `khachhangs`
  ADD PRIMARY KEY (`IDKH`);

--
-- Chỉ mục cho bảng `nhanviens`
--
ALTER TABLE `nhanviens`
  ADD PRIMARY KEY (`IDNV`);

--
-- Chỉ mục cho bảng `phongs`
--
ALTER TABLE `phongs`
  ADD PRIMARY KEY (`IDPhong`);

--
-- Chỉ mục cho bảng `quyens`
--
ALTER TABLE `quyens`
  ADD PRIMARY KEY (`ViTri`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `anhphongs`
--
ALTER TABLE `anhphongs`
  MODIFY `IDAnh` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `dichvus`
--
ALTER TABLE `dichvus`
  MODIFY `IDDV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `dichvusudungs`
--
ALTER TABLE `dichvusudungs`
  MODIFY `IDDVSD` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `phongs`
--
ALTER TABLE `phongs`
  MODIFY `IDPhong` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
