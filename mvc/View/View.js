import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView {
    #leiro={};
    #urlapElemList=[]
    #valid = true
    #urlapAdatok = {}
constructor(szuloElem,leiro){
    this.#leiro = leiro;
    this.szuloElem = szuloElem;
    this.szuloElem.append("<form>")
    this.formelem=this.szuloElem.children("form")
    this.#urlapLetrehoz()
    this.submitElem=$("#submit")
    this.submitElem.on("click",(event)=>{
        event.preventDefault()
        this.#valid=true
        this.#urlapElemList.forEach((elem)=>{
            this.#valid=this.#valid &&elem.valid
            console.log(this.#valid)
            
        })
        if(this.#valid){
            console.log("valid az űrlap!")
            this.#urlapElemList.forEach((elem)=>{
                let ertek=elem.ertek
                let kulcs = elem.key
                this.#urlapAdatok[kulcs]=ertek
                console.log(this.#urlapAdatok)
            })
        }else{
            console.log("Nem valid az űrlap!")
        }
    })
}

#urlapLetrehoz(){
    let txt=""
    for (const key in this.#leiro){
        switch(this.#leiro[key].type){
            case "text":
                this.#urlapElemList.push(new TextUrlapElem(key, this.#leiro[key], this.formelem))
            break;
            case "number":
                this.#numberElem(key);
            break;
            default:
                
        }    

    }
    txt+="<input type='submit' id='submit' value='ok'>"
    this.formelem.append(txt)
}


#numberElem(key){
    let txt=""
        txt+=`
        <div class="mb-3 mt-3">
            <label for="${key}" class="form-label">${this.#leiro[key].megj}:</label>
            <input type="${this.#leiro[key].type}" class="form-control" id="${key}" 
            placeholder="${this.#leiro[key].placeholder}" value="${this.#leiro[key].value}"
            min="${this.#leiro[key].regex.min}"
            max="${this.#leiro[key].regex.max}">
            <div class="valid lathatosag">OK</div>
            <div class="invalid lathatosag">${this.#leiro[key].valid}</div>
        </div>
        `
    this.formelem.append(txt)
}
}

export default UrlapView