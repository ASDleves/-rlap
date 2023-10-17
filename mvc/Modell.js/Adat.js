export const urlapleiro ={
    nev:{
        megj:"Név",
        type:"text",
        placeholder:"Valaki vagyok",
        value:"",
        regex:"[A-Z][a-z]{2,15}",
        valid:"Nagybetűvel kezdődik, legalább 3 betű legyen!"

    },
    szul:{
        megj:"Születési idő",
        type:"number",
        placeholder:"2000",
        value:"",
        regex:{
            min:1000,
            max:2023
        },
        valid:"1000 és 2023 közötti számot irj!"
    },
    neme: {
        megj: "Nem",
        type: "select",
        options: [
            { label: "", value: "" },
            { label: "Nő", value: "no" },
            { label: "Férfi", value: "ferfi" }
        ],
        valid: "Kérlek, válassz egy nemet!"
        }
        
    }
