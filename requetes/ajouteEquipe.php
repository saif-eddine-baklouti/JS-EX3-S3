<?php 
    require_once('fonctionsDB.php');

    $request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);
    

    if (isset($data['nom']) && isset($data['quartier'])) {

        $nom = htmlspecialchars($data['nom']);
        $quartier = htmlspecialchars($data['quartier']);

        $return_id = ajouteEquipe($nom, $quartier);

        echo $return_id;

    } else {
        echo 'Erreur query string';
    }
?>