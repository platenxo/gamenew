<?php
header('Content-Type: application/json');

// POST ile gelen veriyi al
$input = file_get_contents('php://input');
$data = json_decode($input, true);

$id_wormate = isset($data['id_wormate']) ? $data['id_wormate'] : '';
$jsonFile = '/banned/banned_user.json';

if (file_exists($jsonFile) && !empty($id_wormate)) {
    $banned_list = json_decode(file_get_contents($jsonFile), true);
    
    // JSON içindeki anahtar (ID) kontrolü
    $is_banned = isset($banned_list[$id_wormate]);
    
    echo json_encode(['status' => $is_banned ? 'banned' : 'ok']);
} else {
    echo json_encode(['status' => 'error']);
}