Antecedentes
============

Open Science, Open Data
-----------------------

Los datos constituyen la evidencia del conocimiento científico. Más
datos disponibles significan mayor nivel de transparencia y
reproducibilidad. Asegurarse de que los datos estén ampliamente
disponibles a la comunidad científica acelera el ritmo de la
investigación y mejora su eficiencia. @walport_sharing_2011

Compartir datos detallados -incluyendo atributos de muestras, factores y
resultados clínicos, secuencias genómicas, datos crudos de
microarreglos- con otros investigadores permite que estos recursos
contribuyan más allá de los análisis originales.

Además de usarse para confirmar resultados originales, los datos crudos
pueden usarse para explorar hipótesis nuevas o relacionadas, tanto más
cuando se combinan con otros conjuntos de datos públicos. Uno de los
aspectos más interesantes de compartir datos es que cualquiera en
desacuerdo con las elecciones analíticas de los primeros autores puede
usar modelos alternativos, u otra selección de datos y posiblemente
llegar a diferentes conclusiones.

Tener datos reales es indispensable al investigar y desarrollar métodos
de estudio, técnicas de análisis e implementaciones de software. La
comunidad científica en general también se beneficia: compartir datos
promueve múltiples perspectivas, ayuda a identificar errores, disuade de
conductas fraudulentas, es útil para el entrenamiento de nuevos
investigadores y aumenta la eficiencia en el uso de fondos y poblaciones
de pacientes al evitar la colección duplicada de
datos.@piwowar_sharing_2007

Algunas barreras que dificultan la publicación de datos son: falta de
infraestructura informática, restricciones impuestas por los autores,
publicación de datos difíciles de reusar por estar pobremente anotados o
imposibles de extraer (por ejemplo datos en tablas de archivos
PDF).@molloy_open_2011.

Este documento es una propuesta para la creación de un Banco de Datos
Genómicos tal que elimine los obstáculos para la diseminación y
archivado de los datos que acompañan a las publicaciones del INMEGEN.

Datos en el INMEGEN
-------------------

Objetivos y alcance
===================

Banco de datos
--------------

Implementacion de un sistema informático que permita a investigadores
del INMEGEN:

-   archivar y compartir datos relacionados a sus publicaciones

-   establecer vínculos y a medir el impacto de los datos

-   cumplir con estándares: formatos, respaldos, replicación,
    catálogos, etc.

Una revisión permitirá dictaminar si hay algun desarrollo previo que
pueda implementarse o si es necesario el diseño y construcción de un
sistema a la medida.

@_data_???? @altman_proposed_2007

Interfaces Global Alliance for Genomics and Health
--------------------------------------------------

El grupo de trabajo de Datos de la Global Alliance for Genomics and
Health a producido múltiples piezas de software para el
aprovisionamiento de interfaces de intercambio de datos. El Banco de
Datos del INMEGEN podría implementarlas para maximizar su
interoperabilidad.

### Matchmaker Exchange

El esfuerzo colaborativo *<span>Matchmaker Exchange</span>*enfrenta el
reto de la falta de claridad en la etiología en la mayoría de las
muestras a las que se les secuencia el exoma o el genoma, tanto en
ámbitos clínicos como académicos. En estos casos el hallazgo de un sólo
caso adicional con una variante deleterea en el mismo gen y el mismo
fenotipo puede ser evidencia suficiente para identificar el gen causal.
Múltiples laboratorios y consorcios que investigan enfermedades raras
colectan datos de manera independiente, lo que resulta en esfuerzos
fragmentados que dificultan la agregación de casos similares.**

Este proyecto pretende crear una red confederada de infraestructura que
permita hallar pacientes similares a través de diferentes bases de
datos, en especial para facilitar el descubrimiento de las causas
genéticas de enfermedades raras. La red de bases de datos se
interconecta a través de la Matchmaker Exchange API, una interfaz
programática para hacer búsquedas de pacientes a través de sus perfiles
fenotípicos y genotípicos.@_matchmaker_????

### Beacon Project

Se trata de un servicio público a través de la web que cualquier
institución puede implementar. Simplemente acepta preguntas como:
¿tienen genomas con la base ’A’ en la posición 100,735 en el cromosoma
3? (y del estilo) y responde con “sí” o “no”.

Es simple desde el punto de vista técnico, y no devuelve más
información. El objetivo de implementar un “Beacon” es mostrar
disponibilidad al diálogo e intercambio de datos con otras
instituciones.@_ga4gh_????

### Genomics API

Esta interfaz programática permitirá el intercambio e interoperabilidad
sobre información genómica a través de múltiples organizaciónes y
múltiples plataformas. Es un estandar libre y abierto que usa protocolos
web para dar soporte a la transmisión de datos de secuencias de ADN y de
variación genómica. La interfaz permite la creación de fuentes de
información que puede integrarse a software de visualización, a portales
web de datos genómicos o a *<span>pipelines</span>*de análisis. Se
sobrepone a barreras de infraestructura incompatible entre
organizaciones e instituciones para facilitar el intercambio de datos de
ADN a quienes los proveen y quienes los consumen.@_ga4gh_????-1**

La figura muestra diferentes programas accediendo a diferentes
repositorios de datos a través de la Genomics API.

![Interoperación de repositorios de datos y programas a través de la
Genomics API<span
data-label="fig:interop"></span>](GA4GH_API_interop.png){width="0.8\columnwidth"}

Enlaces con otros Repositorios
------------------------------

Establecer un proceso que permita identificar repositorios públicos con
mayor masa crítica para ciertos tipos de datos.

Elaborar una guía que permita aun investigador la identificación clara
de repositorios óptimos para la publicación de sus datos.
@_genebank_???? @king_introduction_2007

Gene expression omnibus

Justificación
=============

Requisito de Revistas
---------------------

Algunas revistas, incluyendo la familia PLoS, requieren la sumisión de
datos biomédicos detallados a bases de datos públicas como condición
para publicar en ellas.@piwowar_sharing_2007 [@hrynaszkiewicz]

Otras agencias como el National Institute of Heath (NIH), la National
Science Foundation (NSF), el Wellcome Trust, el Medical Research Council
(MRC), la Deutsche Forschungsgemeinschaft (DFG) estipulan que grantees
deben tener un plan para compartir datos como parte de sus propuestas o
publicar sus datos al completar sus proyectos.@wicherts_publish_2012

Tener un banco de datos institucional y mecanismos institucionales para
la publicación de datos en repositorios establecidos facilitará el
cumplimiento del requisito de publicación de datos que habitualmente es
política de estas revistas donde publicamos.

Citación
--------

Es una decisión razonable de los editores requerir a sus autores que
provean acceso a los datos: aquellos artículos en revistas con políticas
de replicación que dan acceso a los datos se citan con tres veces más
frecuencia que sus equivalentes sin datos.@walport_sharing_2011

Reproducibilidad, transparencia
-------------------------------

La ciencia reproducible es de mayor calidad y redunda en más exposición
y citación. @piwowar_sharing_2007 [@ioannidis_improving_2011]

Institutos e investigadores deben asegurarse de soportar no sólo el
hardware necesario para almancenar los datos, sino también el software
que permite analizarlos. Un aspecto importante es el software para
manejo de metadatos: herramientas que facilitan el proceso de anotaciónn
de los datos con descripciones de lo que significan sus diferentes
partes, con qué instrumento se colectaron, qué algoritmos se les han
aplicado, etc. Esta información es esencial para que otros científicos
en efecto puedan reusar los datos. Toda esta información debe hospedarse
y ser asequible a largo plazo.@said_datas_2009

Política de Datos Abiertos
--------------------------

El Programa para un Gobierno Cercano y Moderno (PGCM) 2013-2018 instaura
una Política de Datos Abiertos.

La Unidad de Gobierno Digital provee infraestructura para un catálogo
central, pero el hospedaje de los datos debe proveerse por las
instituciones que las publican.

Para cumplir con estos requisitos en la actualidad el INMEGEN publica
datos a través del portal <http://genomamexicanos.inmegen.gob.mx> que
brinda acceso al explorador del HapMap con la aplicación
<http://diversity.inmegen.gob.mx/> y a los datos crudos de microarreglos
en <http://data.inmegen.gob.mx/>.

Sin embargo se trata de un sólo estudio y sería insuficiente como
catálogo de datos para otras plataformas genómicas. Un banco de datos
permitiría cubrir los requisitos de la Política de Datos Abiertos para
datos de más estudios.

Vinculación, colaboración
-------------------------

Compartir datos da ocasión de establecer contacto con organizaciones e
individuos interesados en las mismas líneas de investigación.

Algunos tipos de investigación ganan gran poder estadístico con la
inclusión de más pacientes, mendelian, (citar acá global alliance
mendelian).

Metodología
===========

Creación de Grupo de trabajo
----------------------------

Quizá las mismas bibliotecas pueden tomar este rol.

Inventario Institucional
------------------------

@_nih_????

Plan de Manejo de Datos
-----------------------

Es necesario crear un Plan de Manejo de Datos que ayude a asegurar que
los datos colectados por un proyecto tengan la integridad, calidad y
procedencia necesaria para soportar la investigación propuesta, y que
los datos requeridos para replicar los hallazgos estarán disponibles a
la comunidad.

Algunos puntos que debe considerar el Plan son:

-   Descripción de los datos: ¿qué datos se generarán? ¿cómo se crean?
    (simulados, observados, experimentales).

-   Existing Data: Will you be using existing data? Relationship between
    the data you are collecting and existing data.

-   Audience: Who will potentially use the data?

-   Access and Sharing: How will data ﬁles be shared? How will others
    access them?

-   Formats: What data formats will you be creating?

-   Metadata and Documentation: What documentation will you provide to
    describe the data? Metadata formats and standards?

-   Storage, backup, replication, versioning: Are the data ﬁles backed
    up regularly? Are there replicas in different locations? Are older
    versions of the data kept?

-   Security: Are the system and storage that will be used secure?

-   Budget: Any costs for preparing the data? Costs for storage and
    long-term access?

-   Privacy, Intellectual Property: Does the data contain private or
    conﬁdential information? Any copyrights?

-   Archiving, Preservation, Long-term Access: What plans do you have to
    archive the data and other research products? Will it have long-term
    accessibility?

-   Adherence: How will you check for adherence of this plan?

Publicación
-----------

Repositorios externos. APIs. Página web, catálogo en línea, bit-torrent.

Promoción
---------

@schofield_post-publication_2009
