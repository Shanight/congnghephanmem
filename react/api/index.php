<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
        //Phong

    case "GET":
        $sql = "SELECT * FROM phongs, dichvus";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE IDPhong = :IDPhong";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':IDPhong', $path[3]);
            $stmt->execute();
            $phongs = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $phongs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($phongs);
        break;
    case "POST":
        $phong = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO phongs(IDPhong, TenPhong, HangPhong, GiaPhong, TrangThai, SoPhong) VALUES(null, :TenPhong, :HangPhong, :GiaPhong, :TrangThai, :SoPhong)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':TenPhong', $phong->TenPhong);
        $stmt->bindParam(':HangPhong', $phong->HangPhong);
        $stmt->bindParam(':GiaPhong', $phong->GiaPhong);
        $trangThai = "Trống";
        $stmt->bindParam(':TrangThai', $trangThai);
        $stmt->bindParam(':SoPhong', $phong->SoPhong);

 
        // Xử lý yêu cầu tải lên ảnh và liên kết chúng với phòng
        $path = explode('/', $_SERVER['REQUEST_URI']);

        // Kiểm tra xem yêu cầu có chứa IDPhong không
        if (isset($path[3]) && is_numeric($path[3])) {
            $IDPhong = $path[3];

            // Lưu trữ ảnh trong thư mục src/imageupload
            $targetDir = "src/imageupload/";
            $uploadedFiles = [];
            if (!empty($_FILES['file'])) {
                $files = $_FILES['file'];
                $fileCount = count($files['name']);

                for ($i = 0; $i < $fileCount; $i++) {
                    $fileName = basename($files['name'][$i]);
                    $targetFilePath = $targetDir . $fileName;

                    // Di chuyển ảnh tải lên vào thư mục src/imageupload
                    if (move_uploaded_file($files['tmp_name'][$i], $targetFilePath)) {
                        $uploadedFiles[] = $fileName;
                    }
                }

                // Lưu thông tin ảnh vào bảng anhphongs
                $sql = "INSERT INTO anhphongs(IDAnh, TenAnh, NhomAnh) VALUES";
                $values = [];
                foreach ($uploadedFiles as $fileName) {
                    $values[] = "(null, '$fileName', $IDPhong)";
                }
                $sql .= implode(", ", $values);
                $stmt = $conn->prepare($sql);
                $stmt->execute();
            }

            $response = ['status' => 1, 'message' => 'Images uploaded successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to upload images.'];
        }


        echo json_encode($response);
        break;

    case "PUT":
        $phong = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE phongs SET TenPhong= :TenPhong, HangPhong =:HangPhong, GiaPhong =:GiaPhong, TrangThai =:TrangThai, SoPhong=:SoPhong WHERE IDPhong = :IDPhong";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':IDPhong', $phong->IDPhong);
        $stmt->bindParam(':TenPhong', $phong->TenPhong);
        $stmt->bindParam(':HangPhong', $phong->HangPhong);
        $stmt->bindParam(':GiaPhong', $phong->GiaPhong);
        $stmt->bindParam(':TrangThai', $phong->TrangThai);
        $stmt->bindParam(':SoPhong', $phong->SoPhong);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;


    case "DELETE":
        $sql = "DELETE FROM phongs WHERE IDPhong = :IDPhong";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':IDPhong', $path[3]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
