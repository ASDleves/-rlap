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
            let isFormValid = true; // Use a different variable name
            urlapelemLista.forEach((elem) => {
                isFormValid = isFormValid && elem.getvalid();
                console.log(elem.getvalid());
            });
            if (isFormValid) {
                console.log("valid az űrlap!")
                urlapelemLista.forEach((elem) => {
                    let ertek = elem.ertek
                    let kulcs = elem.key
                    urlapadat[kulcs] = ertek
                    console.log(urlapadat)
                })
            } else {
                console.log("Nem valid az űrlap!")
            }
        })
    }
}


export default Controller;