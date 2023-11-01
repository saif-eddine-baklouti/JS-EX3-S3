export default class Equipe {
    #_el;
    #_id;

    
    constructor(el) {
        this.#_el = el;
        this.#_id = this.#_el.getAttribute('data-js-equipe');
        
        // console.log(this.#_el)

        this.#init();
    }

    #init() {
        
        this.#_el.addEventListener('click', function(e) {
            e.preventDefault();
            let targetVisee = e.target.getAttribute('data-js-action');


            switch (targetVisee) {
                case 'changer':

                this.#changeEquipe();
                break;
                case 'supprimer':

                    this.#supprimeEquipe();
                    
                    break;
            
                default:
                    break;
            }

        }.bind(this))

    }

    #changeEquipe() {

        let equipe = {
            id: this.#_id,
            nom: this.#_el.nom.value
        }
        
    
        let oOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(equipe)
        }
    
        fetch('requetes/changeNomEquipe.php', oOptions)
    
            .then(function(reponse) {
                if (reponse.ok) return reponse.text();
                else throw new Error('404')
            })
    
            .then(function() {
                
            
                let dom = 
                `
                <form class="equipe" data-js-equipe="${equipe.id}">
                    <div>
                        <label for="${equipe.id}">${equipe.nom} : </label>
                        <input type="text" name="nom" id="${equipe.id}" value="" />
                    </div>
                    <div data-js-actions>
                        <button data-js-action="changer">Changer</button>
                        <button data-js-action="supprimer">Supprimer</button>
                    </div>
                </form>
                `;
                this.#_el.innerHTML =  dom;

            }.bind(this))
    
            .catch(function(erreur) {
                console.log(erreur.message);
            });
        }

        #supprimeEquipe() {

            let equipe = {
                id: this.#_id
            }
            
        
            let oOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(equipe)
            }
        
            fetch('requetes/supprimeEquipe.php', oOptions)
        
                .then(function(reponse) {
                    if (reponse.ok) return reponse.text();
                    else throw new Error('404')
                })
        
                .then(function() {

                    this.#_el.remove();

                }.bind(this))
        
                .catch(function(erreur) {
                    console.log(erreur.message);
                });
            }
}

