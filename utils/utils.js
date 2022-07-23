const { writeFileSync } = require("fs")
const colors = require("colors")
const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const argv = yargs(hideBin(process.argv)).argv

const tablaMultiplicar = async (base, limite, imprimir) => {
  let str = ` TABLA MULTIPLICAR ${base} \n
    * * * * * \n`
  for (let i = 1; i <= limite; i++) {
    str += `${i} * ${base} = ${i * base} \n`
  }
  try {
    writeFileSync(`${base}-mul.txt`, str)
    if (imprimir) {
      console.log(str.green)
    }
    return "File created successfully"
  } catch (error) {
    throw error
  }
}
const tablaMultiplicarParams = async () => {
  const { base, limite } = argv

  let str = ""
  for (let i = 0; i <= 10; i++) {
    str += `${i} * ${base} = ${i * base} /n`
  }
  try {
    writeFileSync(`${base}-mul.txt`, str)
    return "File created successfully"
  } catch (error) {
    throw error
  }
}
module.exports = { tablaMultiplicar, tablaMultiplicarParams }
