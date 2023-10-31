import AjoutEquipe from "./AjoutEquipe.js";

(function () {
    
    let elAjoutEquipe = document.querySelectorAll('[data-js-ajout-equipe]')
    
    for (let i = 0, l  = elAjoutEquipe.length; i < l; i++) {

        new AjoutEquipe(elAjoutEquipe[i]);
        
    }

    

})();