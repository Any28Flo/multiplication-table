const {tablaMultiplicar} = require("./utils/utils");

tablaMultiplicar(3)
    .then(resultado =>{
        console.log(resultado)
    })
    .catch(error =>{
        console.log(error)
    })
