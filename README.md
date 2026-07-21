# VoltGrip — Soporte de coche con carga inalámbrica 15W

Este proyecto es la web de producto para VoltGrip, un soporte de coche con carga inalámbrica. Aquí encontrarás el código de la página (en TypeScript) con imágenes, estilos y la lógica para mostrar la landing.

> Nota rápida: Si no sabes nada de programación, no te preocupes — abajo tienes instrucciones paso a paso para ver la web en tu ordenador y para que otras personas puedan trabajar en el proyecto.

---

## Índice
- [Vista rápida](#vista-rápida)  
- [Capturas de pantalla](#capturas-de-pantalla)  
- [Cómo ver la página ahora mismo (modo muy fácil)](#cómo-ver-la-página-ahora-mismo-modo-muy-fácil)  
- [Cómo ejecutar la versión de desarrollo (recomendado)](#cómo-ejecutar-la-versión-de-desarrollo-recomendado)  
- [Comandos útiles](#comandos-útiles)  
- [Estructura básica del proyecto](#estructura-básica-del-proyecto)  
- [Problemas comunes y soluciones rápidas](#problemas-comunes-y-soluciones-rápidas)  
- [Qué puedo hacer por ti](#qué-puedo-hacer-por-ti)

---

## Vista rápida (qué hay y para qué sirve)
- Es una página web que muestra el producto (hero, características, comparativa, FAQ, testimonios, etc.).
- Puedes abrir una vista previa rápida sin herramientas (archivo `"vista previa proyecto.html"`) o ejecutar el proyecto en local con herramientas de desarrollo.

## Capturas de pantalla
Aquí puedes añadir capturas para que cualquiera vea cómo se ve la web sin ejecutarla. Si quieres, puedo generar estas capturas y subirlas por ti.

Ejemplo (sustituye las imágenes por las que quieras):

![Pantalla principal](docs/screenshot-1.png)
_Pantalla principal (Hero + CTA)_

![Sección características](docs/screenshot-2.png)
_Sección de características y beneficios_

Cómo añadir capturas al README:
1. Crea la carpeta `docs/` en la raíz del proyecto.
2. Pon las imágenes dentro de `docs/` (por ejemplo `screenshot-1.png`, `screenshot-2.png`).
3. Usa las etiquetas de imagen en este README (como las de arriba).

Si quieres, puedo crear la carpeta `docs/` y añadir imágenes de ejemplo por ti. Dime si quieres que las suba.

---

## Cómo ver la página ahora mismo (modo muy fácil — sin instalar nada)
1. En tu ordenador, descarga o clona el repositorio.
2. Busca el archivo llamado `vista previa proyecto.html` en la carpeta principal.
3. Haz doble clic sobre ese archivo y se abrirá en tu navegador. Eso te mostrará una vista previa estática.

> Esta opción es la más sencilla si no quieres instalar programas.

## Cómo ejecutar la versión de desarrollo (recomendado si quieres probar cambios)
Tienes dos opciones: usar Bun (recomendado por el proyecto) o npm/yarn (si no quieres instalar Bun).

Opción A — con Bun (más rápida si la instalas):
1. Instala Bun siguiendo estas instrucciones: https://bun.sh (solo una vez).
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta:

```
bun install
bun run dev
```

4. Abre tu navegador en la dirección que te indique la terminal (normalmente http://localhost:3000 o similar).

Opción B — con npm (si prefieres no instalar Bun):
1. Asegúrate de tener Node.js y npm instalados.
2. En la terminal (en la carpeta del proyecto) ejecuta:

```
npm install
npm run dev
```

3. Abre tu navegador en la dirección que muestre la terminal.

---

## Comandos útiles
- Desarrollo: `bun run dev` o `npm run dev`
- Build (preparar archivos para producción): `bun run build` o `npm run build`
- Ver la versión build: `bun run preview` o `npm run preview`
- Lint/format (revisión de estilo de código): `npm run lint` y `npm run format` (si están configurados)

---

## Estructura básica del proyecto (lo importante)
- public/ — archivos públicos (favicon, etc.)
- src/
  - assets/ — imágenes usadas en la web
  - components/ — (idealmente) componentes reutilizables (aun por llenar)
  - lib/ — utilidades y manejo de errores
  - routes/ — páginas y secciones; `index.tsx` es la página principal
  - styles.css — estilos globales
- package.json — lista de comandos y dependencias
- README.md — (este archivo)
- `vista previa proyecto.html` — archivo HTML para abrir directamente

---

## Problemas comunes y soluciones rápidas
- Si al ejecutar `bun install` o `npm install` falla: revisa que tengas conexión a internet y permisos para instalar programas.
- Si la página no carga en `dev`: mira la terminal; a menudo te dice qué puerto usar. También prueba a recargar el navegador.
- Si ves texto raro o errores en inglés: pega aquí el mensaje y te ayudo a interpretarlo.

---

## Qué puedo hacer por ti (opciones que te propongo)
Si quieres, puedo:
- Mejorar este README con capturas de pantalla y ejemplos visuales (puedo generarlas y subirlas).  
- Separar el archivo grande `src/routes/index.tsx` en piezas más pequeñas (Hero, FAQ, Footer) para que sea más fácil de entender y cambiar.  
- Añadir una configuración automática (CI) que revise el proyecto cada vez que alguien suba cambios.  
- Optimizar las imágenes para que la página cargue más rápido en móviles.

Dime cuál quieres y lo hago: escribe A) subir capturas y mejorar README visual, B) dividir en componentes, C) añadir CI, D) optimizar imágenes.

---

## Ayuda rápida si nunca has usado la terminal
Si nunca has usado una terminal (programa donde se escriben comandos):
1. En Windows busca "PowerShell" o "Terminal" y ábrelo.
2. En macOS abre "Terminal" (en Aplicaciones > Utilidades).
3. Usa el comando `cd` para ir a la carpeta del proyecto. Ejemplo:

```
cd Descargas/drive-charger-flow2026
```

4. Luego escribe `bun install` o `npm install` según tu elección, y después `bun run dev` o `npm run dev`.

Si quieres, te doy instrucciones exactas paso a paso para tu sistema (Windows o macOS).

## Licencia y contribuir
- Si quieres que otras personas usen o contribuyan al proyecto, es buena idea añadir un archivo `LICENSE` (por ejemplo MIT). Dime si quieres que lo añada.
- Para aceptar cambios de otros, se suelen usar Pull Requests en GitHub. Puedo dejar instrucciones sencillas para eso también.
