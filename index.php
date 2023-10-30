<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Exercice 3 | Requêtes asynchrones</title>
	<meta name="description" content="Exercice 3 sur les requêtes asynchrones (sommatif) du cours 582-31F-MA Programmation d'interface Web 2">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="./assets/styles/styles.css">
    
	<!-- scripts -->
    <script type="module" src="./assets/scripts/main.js" defer></script>
</head>

<body>
	<header>
		<h1>Exercice 3 - Requêtes asynchrones <small>(sommatif)</small></h1>
	</header>

	<main>

		<section>
			<h2>Ajouter, changez le nom et/ou supprimez une équipe</h2>

			<form data-js-ajout-equipe>
				<label for="nom">Nom :</label>
				<input type="text" name="nom" id="nom" />
				<label for="quartier">Quartier :</label>
				<input type="text" name="quartier" id="quartier" />
				<div>
					<button>Ajouter</button>
				</div>
			</form>
		</section>


		<section data-js-equipes>
			<h2>Équipes</h2>
		<?php
			require_once('./requetes/fonctionsDB.php');
			$equipes = getAllEquipes();

			while ($equipe = mysqli_fetch_assoc($equipes)) {

				echo '<form class="equipe" data-js-equipe="' . $equipe['id'] . '">
						<div>
							<label for="' . $equipe['id'] . '">' . $equipe['nom'] . ' : </label>
							<input type="text" name="nom" id="' . $equipe['id'] . '" />
						</div>
						<div data-js-actions>
							<button data-js-action="changer">Changer</button>
							<button data-js-action="supprimer">Supprimer</button>
						</div>
					</form>';
			}
		?>
		</section>

	</main>
</body>
</html>