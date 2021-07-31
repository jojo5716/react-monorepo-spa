---
id: constants
title: Constantes
---

![img](../../static/img/structure/constants.png)

Aqui gestionaremos todas las constantes de la aplicación.

## actions.js
En este fichero guardaremos todos los nombres de acciones de nuestra aplicación, de esta forma nos aseguramos que no podremos crear nombres duplicados.

#### Ejemplo de una acción
```javascript
export const REDIRECT_TO_URL = 'REDIRECT_TO_URL';
```

:::important
Notese que los nombre de las variables son iguales al valor, de esta forma donde queramos registrar o lanzar la acción, importaremos el nombre siempre desde este fichero.
:::

## urls.js
Aqui gestionamos las urls para los contenedores. Cuando agregamos un nuevo contenedor debemos asignarle una url.
