let fs = require('fs');

let jsonBicicletas = {
    readJson: function(){
        let bicicletas = fs.readFileSync(__dirname + "/bicicletas.json","utf-8");
        return JSON.parse(bicicletas);
        //AQUI YA SE PARSEA EL JSON.
    }
};

module.exports = jsonBicicletas;

