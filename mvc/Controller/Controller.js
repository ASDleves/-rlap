import UrlapModel from "../Modell.js/UrlapModel.js"
import UrlapView from "../View/View.js"

class Controller {
    constructor() {
        this.urlapModel = new UrlapModel();
        this.urlapView = new UrlapView($(".urlap"), this.urlapModel.leiro);

        jQuery(this.urlapView.submitElem).on("click", (event) => {
            event.preventDefault();
            let isValid = true;
            let urlapAdatok = {};

            this.urlapView.urlapElemList.forEach((elem) => {
                isValid = isValid && elem.valid;
            });

            if (isValid) {
                console.log("Valid az űrlap!");
                this.urlapView.urlapElemList.forEach((elem) => {
                    let ertek = elem.ertek;
                    let kulcs = elem.key;
                    urlapAdatok[kulcs] = ertek;
                });
                console.log(urlapAdatok);
            } else {
                console.log("Nem valid az űrlap!");
            }
        });
    }
}

export default Controller;