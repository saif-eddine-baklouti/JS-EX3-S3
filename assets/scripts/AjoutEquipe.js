 export default class AjoutEquipe {
    constructor(el) {
        this._el = el;
        this._elBtn = this._el.querySelector('button')
       
        this.init();
    }
    init() {
        this._elBtn.addEventListener('click', function (e) {
            e.preventDefault();
            this.ajouterEquipe();

        }.bind(this))
    }

    ajouterEquipe(){

    let equipe = {
        nom: this._el.nom,
        quartier: this._el.quartier
    }

    let oOptions = {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(equipe)
    }

    fetch('requetes/ajouteEquipe.php', oOptions)
        .then(function(reponse) {
            if (reponse.ok) return reponse.json();
            else throw new Error('404')
        })
        .then(function(data) {
            // console.log(data)
        })

    }
}