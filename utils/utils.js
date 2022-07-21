const {writeFileSync} = require('fs');

const tablaMultiplicar = async(base) =>{

    let str = '';
    for(let i = 0 ; i <= 10; i++){
        str += `${i} * ${base} = ${i * base} /n`;

    }
    try {
        writeFileSync(`${base}-mul.txt`, str);
        return 'File created successfully'
    } catch (error) {
        throw error
    }
}
module.exports ={ tablaMultiplicar};