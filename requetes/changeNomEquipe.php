<?php 
    require_once('fonctionsDB.php');

    $request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);

    
    if (isset($data['nom']) && isset($data['id'])) {

        $nom = htmlspecialchars($data['nom']);
        $id = htmlspecialchars($data['id']);

        changeNomEquipe($nom, $id);

    } else {
        echo 'Erreur query string';
    }
?>