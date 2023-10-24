import UrlapModel from "../Modell.js/UrlapModel.js"
import UrlapView from "../View/View.js"

class Controller {
    constructor() {
        this.urlapModel = new UrlapModel();
        this.urlapView = new UrlapView($(".urlap"), this.urlapModel.leiro);
    }
}

export default Controller;