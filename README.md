# Novela Multidimensional Interactiva

## Descripción Breve

Este proyecto es una novela interactiva desarrollada en HTML, CSS y (futuramente) JavaScript. La estructura permite crear una narrativa con múltiples hilos, personajes y lugares interconectados, ofreciendo una experiencia de lectura no lineal y rica en detalles.

## Estructura de Carpetas

*   `index.html`: Punto de entrada principal de la novela. Desde aquí se enlaza al primer capítulo.
*   `css/`: Contiene los archivos de hojas de estilo.
    *   `estilos.css`: Define la apariencia visual de toda la novela.
*   `historias/`: Almacena los archivos HTML para cada capítulo, escena o arco narrativo.
    *   Ejemplo: `capitulo1.html`
    *   Contiene un archivo `.gitkeep` para asegurar que la carpeta sea rastreada por Git.
*   `personajes/`: Contiene los archivos HTML para los perfiles detallados de cada personaje.
    *   Ejemplo: `heroe_principal.html`
    *   Contiene un archivo `.gitkeep`.
*   `lugares/`: Incluye los archivos HTML para las descripciones de los diferentes lugares y escenarios de la novela.
    *   Ejemplo: `aldea_inicio.html`
    *   Contiene un archivo `.gitkeep`.
*   `plantillas/`: Contiene las plantillas base para crear nuevo contenido.
    *   `plantilla_historia.html`: Plantilla para nuevos capítulos/historias.
    *   `plantilla_personaje.html`: Plantilla para nuevos perfiles de personaje.
    *   `plantilla_lugar.html`: Plantilla para nuevas descripciones de lugar.
    *   Contiene un archivo `.gitkeep`.
*   `js/`: Destinada a futuros archivos JavaScript para añadir interactividad avanzada.
    *   Actualmente vacío, pero contiene un `.gitkeep`.
*   `media/`: Para almacenar imágenes, mapas, u otros archivos multimedia que se puedan incorporar en la novela.
    *   Actualmente vacío, pero contiene un `.gitkeep`.

## Cómo Añadir Nuevo Contenido

Sigue estos pasos para expandir la novela:

### Nueva Historia/Capítulo

1.  **Copiar Plantilla:** Copia el archivo `plantillas/plantilla_historia.html` a la carpeta `historias/` y renómbralo descriptivamente (ej. `historias/capitulo2_el_despertar.html`).
2.  **Editar Metadatos:** Abre el nuevo archivo y modifica el contenido de la etiqueta `<title>` y el `<h1>` principal para reflejar el título del capítulo.
3.  **Añadir Narrativa:** Escribe o pega el contenido narrativo dentro de la etiqueta `<main>`, utilizando párrafos `<p>`, y otros elementos HTML según sea necesario.
4.  **Crear Enlaces:**
    *   Para enlazar a un personaje: `<a href="../personajes/nombre_del_personaje.html">Nombre del Personaje</a>`.
    *   Para enlazar a un lugar: `<a href="../lugares/nombre_del_lugar.html">Nombre del Lugar</a>`.
    *   Asegúrate de que los archivos referenciados existan o créalos siguiendo los pasos correspondientes.
5.  **Vincular Capítulo:** Añade un enlace a este nuevo capítulo desde el `index.html` (si es un punto de inicio) o desde el capítulo anterior para mantener la continuidad.

### Nuevo Personaje

1.  **Copiar Plantilla:** Copia `plantillas/plantilla_personaje.html` a `personajes/` y renómbralo con el nombre del personaje (ej. `personajes/mentor_arcano.html`).
2.  **Editar Metadatos:** Modifica el `<title>` y el `<h1>` con el nombre del personaje.
3.  **Rellenar Información:** Completa las diferentes secciones (`<section id="descripcion_general">`, `<section id="historia_trasfondo">`, etc.) con la información detallada del personaje.
4.  **Aplicar Estilos de Sección (Opcional):** Para usar los estilos predefinidos, añade la clase CSS correspondiente a cada etiqueta `<section>`. Por ejemplo:
    `<section id="descripcion_general" class="descripcion-general">`
5.  **Enlazar al Personaje:** Desde los capítulos o lugares donde este personaje aparezca o sea relevante, añade enlaces a este archivo de personaje.

### Nuevo Lugar

1.  **Copiar Plantilla:** Copia `plantillas/plantilla_lugar.html` a `lugares/` y renómbralo (ej. `lugares/ciudad_perdida.html`).
2.  **Editar Metadatos:** Actualiza el `<title>` y el `<h1>` con el nombre del lugar.
3.  **Rellenar Información:** Describe el lugar en las secciones correspondientes.
4.  **Aplicar Estilos de Sección (Opcional):** Al igual que con los personajes, puedes añadir clases CSS a las secciones:
    `<section id="descripcion_general" class="descripcion-general">`
5.  **Enlazar al Lugar:** Crea enlaces a este lugar desde los capítulos o perfiles de personajes que estén asociados con él.

## Estilos CSS

*   La apariencia visual de la novela se controla principalmente a través del archivo `css/estilos.css`.
*   Existen clases CSS predefinidas para estilizar secciones comunes en las páginas de personajes y lugares. Estas clases son:
    *   `.descripcion-general`
    *   `.historia-trasfondo` (para personajes) / `.historia-relevancia` (para lugares)
    *   `.relaciones` (para personajes)
    *   `.apariciones` (para personajes)
    *   `.eventos-ocurridos` (para lugares)
    *   `.personajes-asociados` (para lugares)
    Puedes aplicar estas clases a las etiquetas `<section>` correspondientes en los archivos HTML para obtener un formato consistente.

## Futuras Mejoras

*   **Interactividad con JavaScript:** Se podría añadir JavaScript para funcionalidades como:
    *   Tooltips para mostrar información adicional al pasar el cursor sobre ciertos términos.
    *   Modales para mostrar perfiles de personajes o descripciones de lugares sin salir de la página actual.
    *   Mapas interactivos.
*   **Más contenido y ramificaciones.**

---
Documentación creada para el proyecto de Novela Multidimensional.
