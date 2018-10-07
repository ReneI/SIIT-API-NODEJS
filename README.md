
 SIIT-API-NODEJS

Modelos
-------------------
  Usuario
 - Matricula
 - password (con encriptacion) sin posibilidad de hacer update del
   password por el momento por seguridad solamente con un token.
 - Email
 - google (token para inicio de sesion con cuenta de google sin password ni matricula)
 - img
 - role (ADMIN, ALUM, MASTER) sin posibilidad de hacer update sin token

--------------------

## 
para pruebas instalar postman e introducir noddgoey.herokuapp.com/usuario
- Ejecutar algun metodo que no requiera el id del usuario por ejemplo post o get para lectura 

## Guia de uso

 En servidor a produccion https://noddgoey.herokuapp.com/usuario/:id
 uso del servicio mlab y amazon aws para prueba con mongodb
 
 ![database](https://github.com/ReneI/SIIT-API-NODEJS/blob/master/Guide/database.PNG?raw=true)
 ### get
 {{url}}/usuario?desde=2&hasta=10
 ![get](https://github.com/ReneI/SIIT-API-NODEJS/blob/master/Guide/get.PNG?raw=true)
 ![get](https://github.com/ReneI/SIIT-API-NODEJS/blob/master/Guide/postman.PNG?raw=true)
 regresas los usuarios y total de usuarios
 ###  post
 ![Screenshot](https://github.com/ReneI/SIIT-API-NODEJS/blob/master/Guide/post.PNG?raw=true)

 {{url}}/usuario/:id
 ## put
  
 {{url}}/usuario/:id
'
 

### delete 
cambiar la bandera de estado a false,no se debe eliminar registros solamente cambiar de true a false ya
romperia la caracteristica de integridad.

# Siguientes cambios
- Los demas modelos
- Token de sesion 
- Recuperar password
#### expiracion de la sesion 







## Regex 

Para validaciones

> **Tip:**  Usar reglas de validacion tanto en el cliente como en el servidor **para tener seguridad**

|                |explicacion |Regex|
|----------------|-------------------------------|-----------------------------|
|Correo|`'Correo del tecnologico de durango'`            |''            |
|password          |`"password de 4 digitos"`            |"Isnthi"            |
|Matricula|  10 caracteres| 



