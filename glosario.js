/**
 * ? Common JS: Especificación de módulos para JavaScript que define un formato estándar para la organización y carg a de módulos en entornos de ejecución.
 */

// module.js
let lounge = ["Apolo", "Artemis", "Sputnik"];

const place = () => {
    return `Campus classrooms are: '${lounge.join(", ")}'`;
}
/**
 * * El archivo "moudulo.js" exporta la funcion place utilizando module.exports
 * ? Crea archivo "modulo.js"
 */
module.exports = {
    place
}

//main.js
/**
 * * Importa el "module.js" utilizando require() sin la extencion .js
 * ? Crear archivo "main.js" para importar el "module.js"
 */
const config = require("./module");
console.log(config.place());