---
id: business_logic
title: Lógica de negocio
---

En este directorio gestionaremos la lógica de negocio.

Actualmente gestionamos la lógica para saber que mensaje mostrar cuando alguna petición de disponibilidad de habitaciones (agregar, eliminar habitación) falla. Desde el CRS nos devuelven un código de error interno y lo mapeamos para poder mostrar un mensaje acorde al error (No hay cupo, Limite máximo de habitaciones en el carrito,  etc...)