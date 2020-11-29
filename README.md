# Builder

## Instrucciones
(suponiendo modo 'mover')
* Para colocar un elemento de la fuente al tablero, hacer drag and drop.
* Es posible arrastrar elementos desde el tablero.
* Al soltar en una casilla ocupada, el elemento de la casilla se reposicionará si es posible. Si no es posible, el elemento entrante será eliminado si es que proviene del tablero.
* Es posible importar y exportar en formato JSON.
* 
### Configuración
* ```config.js``` contiene la configuración posible del componente.
* Es posible modificar las dimensiones del tablero principal.
* Es posible modificar el número de elementos de la fuente. 
* No hay límite en los datos posibles de cada elemento de la fuente. Los elementos de la fuente son una interfaz, que por default es el componente MySquare.
* MySquare se asume reemplazable cualquier componente siempre y cuando se le alimente con los datos necesarios en ```config.js```.
* Por default viene en modo move. Si se cambia a modo replace, entonces no habrá reposicionamiento; el elemento entrante siempre reemplaza al incumbente.
