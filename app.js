const { tablaMultiplicar } = require("./utils/utils")
const argv = require("./config/yargs")

tablaMultiplicar(argv.b, argv.l)
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((error) => {
    console.log(error)
  })
