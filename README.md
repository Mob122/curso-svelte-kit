# Curso de Svelte
Este es un curso introductorio sobre Svelte, un framework moderno para construir aplicaciones web reactivas y eficientes.

## 1. Crear un proyecto Svelte Kit

```bash
npx sv create 1-introduccion-svelte
```

## 2. Ejecutar el proyecto

```bash
cd 1-introduccion-svelte

pnpm run dev --open
```

## 3. Conceptos Básicos de Svelte
### *3.1. Función Pura*
Una función pura es una función que, dado el mismo conjunto de entradas, siempre devuelve el mismo resultado y no tiene efectos secundarios. En Svelte, las funciones puras son importantes para mantener la reactividad y la predictibilidad del estado de la aplicación.

### *3.2. Memorización*
La memorización es una técnica de optimización que consiste en almacenar los resultados de funciones costosas para evitar cálculos repetitivos. En Svelte, puedes usar la memorización para mejorar el rendimiento de tus componentes.

### *3.3. Macrotareas*
Las macrotareas son tareas que se ejecutan en el ciclo de eventos de JavaScript después de que se hayan completado todas las tareas actuales. En Svelte, las macrotareas pueden ser útiles para manejar actualizaciones de estado y renderizado de componentes de manera eficiente.

### *3.4. Microtareas*
Las microtareas son tareas que se ejecutan antes de que se procesen las macrotareas. En Svelte, las microtareas se utilizan para manejar operaciones asincrónicas y garantizar que las actualizaciones de estado se realicen de manera oportuna.

## 4. Sveltekit
SvelteKit es un framework basado en Svelte que facilita la creación de aplicaciones web completas con características como enrutamiento, renderizado del lado del servidor y generación de sitios estáticos.

### *4.1. Estructura de un proyecto SvelteKit*
- vite.config.js: Archivo de configuración del proyecto que utiliza Vite como herramienta de construcción.
- tsconfig.json: Archivo de configuración de TypeScript.
- svelte.config.js: Archivo de configuración específico de SvelteKit donde se definen opciones como adaptadores y preprocessors.
- package.json: Archivo que contiene las dependencias y scripts del proyecto.
- package-lock.json: Archivo que asegura versiones específicas de las dependencias instaladas.
- eslint.config.cjs: Archivo de configuración para ESLint, una herramienta de análisis estático de código.
- .prettierrc: Archivo de configuración para Prettier, una herramienta de formateo de código.
- src/: Carpeta que contiene el código fuente de la aplicación.
    - app.html: Archivo HTML principal que sirve como plantilla para la aplicación.
    - routes/: Carpeta que contiene las rutas de la aplicación.
        - +layout.svelte: Archivo Svelte que define el diseño común para las páginas.
        - +page.svelte: Archivo Svelte que define una página específica en la aplicación.
    - lib/: Carpeta para componentes y utilidades reutilizables.

- .svelte-kit/: Carpeta generada automáticamente que contiene archivos de construcción y configuración específicos de SvelteKit.


## Anexos
### *A.1. Recursos*
- **daisyUI**: Biblioteca de componentes UI para Tailwind CSS que facilita la creación de interfaces atractivas y funcionales.

```bash
pnpm i daisyui@latest
```