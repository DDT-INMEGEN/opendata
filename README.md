# Open Data

Micrositio para la publicación de datos genómicos de acceso libre.

La rama gh-pages de este repositorio tiene el micrositio en Jekyll.

Para crear las ligas de descarga debe usarse la función register_download(), 
usando HTML normal dentro de un archivo Markdown (extensión .md), así:


    <a href="#" onclick="register_download('ejemplo.tar.gz')">
        ejemplo.tar.gz
    </a>


El formulario de descarga registra:

- Nombre Completo
- Correo electrónico
- Organización
- Comentarios

Estos datos se someteran a un webservice en un servidor del INMEGEN.
El servicio creará una liga simbólica con un
[UUID](https://docs.python.org/2/library/uuid.html) que apunte a los
archivos originales, de modo que la liga sea siempre única para quien
se registra, pero imposible de adivinar. El webservice está hecho con
Python Flask y registra todo en una base de datos MongoDB, en el archivo
webservice.py.

El micrositio puede visitarse acá:

http://ddt-inmegen.github.io/opendata/

Esa página hospedada por GitHub puede después entregarse desde un 
subdominio *custom*, como:

http://data.inmegen.gob.mx/
