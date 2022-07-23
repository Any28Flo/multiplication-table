const { tablaMultiplicar } = require("./utils/utils")

const argv = require("./config/yargs")

//Require sencillo
require("colors")

tablaMultiplicar(argv.b, argv.i)
  .then((resultado) => {
    console.log(resultado.rainbow)
  })
  .catch((error) => {
    console.log(error)
  })
