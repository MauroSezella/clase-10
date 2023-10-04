const jsonBicicletas = require("./datosBici");

let dhBici = {
    bicicletas:  jsonBicicletas.readJson(),

    buscarBici: function(id){
        let estaLaBici = this.bicicletas.filter((bici) => bici.id == id);  //return this.bicicletas.filter((bici) => bici.id == id)[0] || null; 
        return estaLaBici.length > 0 ? estaLaBici : null;    
        
    },

    venderBici: function(id){
        let bici = this.buscarBici(id);
    }
};  


console.log(dhBici.buscarBici(1));

