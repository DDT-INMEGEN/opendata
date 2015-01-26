# Open Data

Micrositio para la publicación de datos genómicos de acceso libre.

A través de GitHub Pages se aprovisionará un micrositio en torno a los
datos. Contendrá una aplicación para registrar algunos datos de las
personas que descargan los datos que el INMEGEN hace públicos.

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
se registra.


