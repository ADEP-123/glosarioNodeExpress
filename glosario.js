/**
 * ? NVM 
 * * Interfaz de línea de comandos sencilla: NVM proporciona una interfaz de línea de comandos sencilla y fácil de usar. Puedes instalar, desinstalar y cambiar rápidamente las versiones de Node.js con simples comandos.
 * ? Instalacion
 * * Link instalacion https://github.com/coreybutler/nvm 
 * * Ejecutar nvmSetup.exe
 * * Comprobar version con nvm --version
 * ? Comandos:
 * * nvm arch [32|64]: Muestra si Node se está ejecutando en modo de 32 o 64 bits.
 * * nvm check: Verifica el proceso de NVM4W en busca de problemas conocidos.
 * * nvm current: Muestra la versión activa.
 * * nvm install <versión> [arch]: La versión puede ser una versión específica, La versión puede ser una versión específica, "latest" para la última versión actual o "lts" para la versión LTS más reciente. "latest" para la última versión actual o "lts" para la versión LTS más reciente. OpcionOpcionalmente, especifica si instalar la versión de 32 o 64 bits (por defecto, la almente, especifica si instalar la versión de 32 o 64 bits (por defecto, la arquitectura del sistema). Agrega arquitectura del sistema). Agrega ----insecure al final de este comando para omitir la insecure al final de este comando para omitir la validación SSL del servidor de descarga remota.validación SSL del servidor de descarga remota.
 * * nvm list available: Lista las instalaciones de Lista las instalaciones de Node.js. Escribe "available" al final Node.js. Escribe "available" al final para mostrar una lista de las versiones disponibles para descargar.para mostrar una lista de las versiones disponibles para descargar.
 * * nvm on: Habilita la administración de versiones de Node.js.Habilita la administración de versiones de Node.js.
 * * nvm off: Deshabilita la administración de versiones de Node.js (no desinstala nada).
 * * nvm p roxy [url]: Establece un proxy para usar en las descargas. Deja [url] en blanco para ver el proxy actual. Establece [url] como "none" para eliminar el proxy. 
 * * nvm uninstall <versión>: Desinstala una versión específica. 
 * * nvm use <versión> [arch]: Cambia a usa r la versión especificada. Opcionalmente, usa "latest", "lts" o "newest". "newest" es la versión más recientemente instalada. Opcionalmente, especifica la arquitectura de 32/64 bits. 
 * * nvm use <arch> seguirá usando la versión seleccionada, pero cambiará al m odo de 32/64 bits. Para obtener información sobre el uso de "use" en un directorio específico (o usando .nvmrc), consulta el problema n.º 16. 
 * * nvm root <ruta>: Establece el directorio donde nvm debe almacenar las diferentes versiones de Node.js. Si no se es tablece <ruta>, se mostrará la ruta actual. 
 * * nvm version: Muestra la versión actual de NVM for Windows que se está ejecutando.
 * ? Completar instalacion
 * * Para completar la instalacion siga la siguiente secuencia de comandos:
 * * - nvm list available
 * * - nvm install 18.16.0 (se debe dijitar la version que se desea utilizar, en este caso la 18.16.0)
 * * - nvm list (verifique que este la version installada dentro de la lista de versionas disponibles a utilizar)
 * * - nvm use 18.16.0 (digite la version que desea utilizar de la lista de versiones instaladas, en este caso la 18.16.0)
 * * - nvm list (verificar la version actual en uso sea la que se desea)
 * * - node --version (verificar la version de node usada)
 */