# Portfolio de Elias

Sitio hecho con [Astro](https://astro.build). Está pensado para que puedas
editar el contenido vos mismo sin tocar casi nada de código.

## 1. Correr el sitio en tu computadora

Necesitás tener [Node.js](https://nodejs.org) instalado (versión 18 o
superior). Para saber si ya lo tenés, abrí la Terminal y escribí:

```
node -v
```

Si te tira un número (ej. `v20.11.0`) ya lo tenés. Si te dice "command not
found", descargalo de https://nodejs.org (la versión "LTS").

Una vez que tenés Node, en la Terminal:

```
cd ~/Documents/portfolio-elias
npm install
npm run dev
```

Esto va a instalar todo lo necesario (solo la primera vez) y levantar el
sitio en `http://localhost:4321`. Abrilo en el navegador y vas a ver el
sitio. Cada vez que guardés un cambio en un archivo, se actualiza solo.

Para cortar el servidor: `Ctrl + C` en la Terminal.

## 2. Editar el contenido

- **Tus proyectos**: `src/data/projects.js` — ahí están las instrucciones
  para agregar/editar cada proyecto (título, categoría, descripción, imagen).
- **Imágenes de proyectos**: van dentro de `public/projects/`. Arrastrá el
  archivo ahí y después referencialo en `projects.js` como
  `/projects/nombre-del-archivo.jpg`.
- **Textos de "Sobre mí"**: `src/components/About.astro`.
- **Textos de la portada (hero)**: `src/components/Hero.astro`.
- **Datos de contacto**: `src/components/Contact.astro`.

Busqué los comentarios que dicen `TODO` — marcan los lugares donde puse
texto de ejemplo para que reemplaces por el tuyo.

## 3. Cambiar el estilo visual

Todo el color y tipografía sale de `src/styles/global.css`. Hay 3 variantes
de tema ya armadas. Para probarlas, abrí `src/layouts/BaseLayout.astro` y
cambiá esta línea:

```html
<html lang="es" data-theme="oscuro-minimal">
```

por `"editorial-claro"` o `"vibrante-motion"`.

## 4. Subir el código a GitHub

1. En [github.com](https://github.com), creá un repositorio nuevo (botón
   verde "New"). Ponele de nombre `portfolio-elias`, dejalo **privado o
   público** (como prefieras) y NO marques ninguna casilla de
   "Add README" (ya tenemos uno).
2. En la Terminal, dentro de la carpeta del proyecto:

```
git init
git add .
git commit -m "primer commit del portfolio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portfolio-elias.git
git push -u origin main
```

(Reemplazá `TU_USUARIO` por tu usuario de GitHub — el link exacto te lo
muestra GitHub al crear el repo, con un botón para copiarlo.)

## 5. Deployar en Vercel

1. Andá a [vercel.com](https://vercel.com) e iniciá sesión con tu cuenta
   (podés entrar directamente con GitHub).
2. Click en "Add New..." → "Project".
3. Elegí el repositorio `portfolio-elias` que acabás de subir a GitHub.
4. Vercel detecta Astro automáticamente — no hace falta tocar la
   configuración. Click en "Deploy".
5. En un par de minutos te da una URL pública (algo como
   `portfolio-elias.vercel.app`). Listo, tu sitio está online.

Cada vez que hagas `git push` a `main`, Vercel vuelve a deployar
automáticamente. No hace falta repetir estos pasos.

## Estructura del proyecto

```
src/
  components/     -> piezas del sitio (Header, Hero, tarjetas de proyecto, etc.)
  data/
    projects.js   -> ACÁ vas a pasar la mayor parte del tiempo editando
  layouts/
    BaseLayout.astro
  pages/
    index.astro   -> arma la página con los componentes
  styles/
    global.css    -> colores y tipografía (temas)
public/
  projects/       -> imágenes de tus proyectos
```
