import Equipe from "./Equipe.js";

export default class AjoutEquipe {

    #_el;
    #_elBtn;
    #_elParentEquipe;
    #_elsInputAjout;
    

    constructor(el) {
        this.#_el = el;
        this.#_elBtn = this.#_el.querySelector('button');
        this.#_elParentEquipe = document.querySelector('[data-js-equipes]');
        this.#_elsInputAjout = this.#_el.querySelectorAll('input')
        

        // console.log(this._elsInputAjout)

        this.#init();
    }
    #init() {
        this.#_elBtn.addEventListener('click', function (e) {
            e.preventDefault();
            this.#creeEquipe();
            // console.log('yes we are')

        }.bind(this))
    }

    #creeEquipe(){

    let equipe = {
        nom: this.#_el.nom.value,
        quartier: this.#_el.quartier.value
    }
    

    let oOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(equipe)
    }

    fetch('requetes/ajouteEquipe.php', oOptions)

        .then(function(reponse) {
            if (reponse.ok) return reponse.text();
            else throw new Error('404')
        })

        .then(function(data) {
            // console.log(data)
        
            let dom = 
            `
            <form class="equipe" data-js-equipe="${data}">
                <div>
                    <label for="${data}">${equipe.nom} : </label>
                    <input type="text" name="nom" id="${data}" value="" />
                </div>
                <div data-js-actions>
                    <button data-js-action="changer">Changer</button>
                    <button data-js-action="supprimer">Supprimer</button>
                </div>
            </form>
            `;
            this.#_elParentEquipe.insertAdjacentHTML('beforeend', dom)
            
            for (let i = 0, l = this.#_elsInputAjout.length ; i < l; i++) {
                
                this.#_elsInputAjout[i].value = '';
                
            }

            new Equipe(this.#_elParentEquipe.lastElementChild)
            // console.log(this._elParentEquipe.lastElementChild)
        }.bind(this))

        .catch(function(erreur) {
            console.log(erreur.message);
        });
    }
}