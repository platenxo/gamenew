<?php
// Gelen veriyi (POST) al
$data = json_decode(file_get_contents('php://input'), true);
$id = isset($data['id_wormate']) ? $data['id_wormate'] : '';

$jsonFile = '/banned/banned_user.json';

if (file_exists($jsonFile)) {
    $bannedData = json_decode(file_get_contents($jsonFile), true);
    
    // JSON anahtarlarında (key) bu ID var mı?
    $isBanned = isset($bannedData[$id]);
    
    header('Content-Type: application/json');
    echo json_encode(['status' => $isBanned]);
} else {
    echo json_encode(['status' => false]);
}
?>