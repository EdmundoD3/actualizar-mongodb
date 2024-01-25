# Genessis Conatumex Client Storage

Esta aplicación está diseñada para gestionar y almacenar información de clientes de Genessis Conatumex. Utiliza el formato CSV para la importación y exportación de datos.

## Configuración

Asegúrate de tener un archivo llamado `datos.csv` en la carpeta raíz. Este archivo contendrá la información de los clientes.

## Instalación

Antes de ejecutar la aplicación, instala las dependencias utilizando el siguiente comando en la terminal:

```bash
npm install
```
## Ejecución

Una vez que hayas instalado las dependencias, puedes ejecutar la aplicación con el siguiente comando:

```bash
npm start
```
Esta aplicación está diseñada para gestionar y almacenar información de clientes de Genessis Conatumex utilizando el formato CSV. A continuación, se detalla la estructura del archivo CSV que se espera:

## Estructura del Archivo CSV

El archivo CSV debe seguir el siguiente formato de columnas:

1. **CTA:** Número de cuenta del cliente.
2. **NOMBRE:** Nombre completo del cliente.
3. **DIRECCION:** Dirección del cliente.
4. **COLONIA:** Colonia del cliente.
5. **CIUDAD:** Ciudad de residencia del cliente.
6. **ENTRE CALL:** Descripción de referencias de la dirección.
7. **TELEFONO:** Número de teléfono del cliente.
8. **PRODUCTOS:** Lista de productos adquiridos por el cliente.
9. **Prod 2, Prod 3, Prod 4:** Información adicional sobre productos adicionales.
10. **PAGOS:** Información sobre los pagos realizados por el cliente.
11. **REF:** Referencias o notas relacionadas con el cliente.
12. **FECHA:** Fecha de la transacción.
13. **VENDEDORA:** Nombre de la vendedora asociada al cliente.
14. **CREDITO:** Detalles sobre crédito otorgado al cliente.
15. **D.CONTADO:** Detalles sobre pagos al contado.
16. **IN. COBRO:** Información sobre cobros pendientes.
17. **ULT.PAG:** Último pago realizado por el cliente.
18. **Abonos, CONTADO, ADEUDO:** Información sobre abonos, pagos al contado y adeudos.
19. **Estado:** Estado actual del cliente.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras problemas o mejoras potenciales, no dudes en abrir un problema o enviar una solicitud de extracción.
