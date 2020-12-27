const fs = require('fs');

const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`tabla del ${base}`.green);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-hasta-el-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-hasta-el-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}