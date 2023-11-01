import AjoutEquipe from "./AjoutEquipe.js";
import Equipe from "./Equipe.js";


(function () {
    
    let elAjoutEquipe = document.querySelectorAll('[data-js-ajout-equipe]'),
        elEquipe = document.querySelectorAll('[data-js-equipe]');

        // console.log(elEquipe)
    
    for (let i = 0, l  = elAjoutEquipe.length; i < l; i++) {

        new AjoutEquipe(elAjoutEquipe[i]);
        
    }

    for (let x = 0, y = elEquipe.length; x < y; x++) {

        new Equipe(elEquipe[x]);
        // console.log(elEquipe[x])
        
    }

    

})();