# Open Data

Micrositio para la publicación de datos genómicos de acceso libre.

La rama gh-pages de este repositorio tiene el micrositio (una sóla
página de html, pero después usaremos Jekyll). Lo escencial es el
script de js que presenta un formulario de registro.

De quien descarga se recabará:
1. Nombre Completo
2. Correo electrónico
3. Organización
4. País
5. Comentarios

Estos datos se someteran a un webservice en un servidor del INMEGEN.
El servicio creará una liga simbólica con un
[UUID](https://docs.python.org/2/library/uuid.html) que apunte a los
archivos originales, de modo que la liga sea siempre única para quien
se registra, pero imposible de adivinar. El webservice está hecho con
Python Flask y registra todo en una base de datos MongoDB, en el archivo
webservice.py.

El formulario de javascript es contenido estático y se ve así:

http://ddt-inmegen.github.io/opendata/

Esa página hospedada por GitHub puede después entregarse desde un 
subdominio *custom*, como:

http://data.inmegen.gob.mx/

