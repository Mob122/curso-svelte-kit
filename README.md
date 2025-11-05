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