<?php 
    require_once('fonctionsDB.php');

    $request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);

    
    if (isset($data['id'])) {

        $id = htmlspecialchars($data['id']);

        supprimeEquipe($id);

    } else {
        echo 'Erreur query string';
    }
?>