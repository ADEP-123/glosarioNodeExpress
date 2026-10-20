# Glosario Node – módulos CommonJS

Ejercicio breve de **Node.js** que muestra cómo funcionan los módulos **CommonJS**: un archivo exporta una función con `module.exports` y otro la importa con `require()`.

## Archivos

| Archivo | Contenido |
| --- | --- |
| `module.js` | Define el arreglo `lounge` (salones: Apolo, Artemis, Sputnik) y exporta la función `place()` |
| `main.js` | Importa `module.js` con `require("./module")` y muestra el resultado |
| `glosario.js` | Versión comentada con el glosario: qué es CommonJS y los pasos para crear y conectar ambos archivos |

## Cómo ejecutarlo

Requisitos: Node.js.

```bash
git clone https://github.com/ADEP-123/glosarioNodeExpress.git
cd glosarioNodeExpress
node main.js
```

Salida:

```
Campus classrooms are: 'Apolo, Artemis, Sputnik'
```

## Qué se aprende

- Exportar con `module.exports = { ... }`.
- Importar con `require()` sin la extensión `.js`.
- Separar responsabilidades en módulos.
