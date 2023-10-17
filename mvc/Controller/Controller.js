import UrlapModel from "../Modell.js/UrlapModel.js"
import UrlapView from "../View/View.js"

class Controller {

    constructor() {
        this.urlapModel = new UrlapModel();
        this.urlapView = new UrlapView($(".urlap"), this.urlapModel.leiro);
        this.submitElem = $("#submit")
        this.submitElem.on("click", (event) => {
            event.preventDefault()
            let urlapelemLista = this.urlapView.getUrlapElemList();
            let urlapadat = this.urlapView.getUrlapadatok();
            let isFormValid = true; 
            let szamisValid = true;
            let formValid = true;
            urlapelemLista.forEach((elem) => {
                isFormValid = isFormValid && elem.getvalid();
                szamisValid = szamisValid && elem.getvalid();  
                formValid = formValid && elem.getvalid();  
            });
            if (isFormValid && szamisValid && formValid) {
                console.log("valid az űrlap!")
                urlapelemLista.forEach((elem) => {
                    let ertek = elem.ertek
                    let kulcs = elem.key
                    urlapadat[kulcs] = ertek
                })
            } else {
                console.log("Nem valid az űrlap!")
            }
            console.log(urlapadat)
        })
    }
}


export default Controller;