const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: " Es la base de la tabla de multiplicar",
  })
  .option("i", {
    alias: "imprimir",
    type: "boolean",
    default: false,
    demandOption: true,
    describe: "Imprime en consola la tabla",
  })
  .option("l", {
    alias: "limite",
    type: "number",
    default: 10,
    describe: "El limite para multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser numero"
    } else if (isNaN(argv.l)) {
      throw "El limite debe ser un numero"
    } else {
      return true
    }
  }).argv

module.exports = argv
