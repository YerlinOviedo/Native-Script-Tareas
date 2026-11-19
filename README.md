# TareasApp — demo de NativeScript

Aplicación móvil sencilla de gestión de tareas, hecha con **NativeScript 9.1 + TypeScript** (sin Angular, Vue ni React).
Investigación de frameworks móviles — Desarrollo de Software IV, UCR Sede Regional del Pacífico.

## Qué hace

- **Pantalla 1 (listado):** muestra las tareas, permite marcarlas como completadas (tocar la fila) y eliminarlas (✕).
- **Pantalla 2 (formulario):** agrega una tarea con título, responsable, descripción y prioridad, con validación.
- Las tareas son **locales** (en memoria). Al cerrar la app vuelven las tareas de prueba.

## Datos de prueba (recursos de la demostración)

- `app/datos/tareas-iniciales.ts`: las 3 tareas con las que inicia la app. Se pueden editar para la demo.

## Requisitos

| Herramienta | Versión |
|---|---|
| Node.js | 22 o superior |
| JDK | 21 |
| Android Studio | con Android SDK, Build-Tools, Platform-Tools y un emulador (AVD) |
| NativeScript CLI | `npm install -g nativescript` |

Variables de entorno en Windows: `ANDROID_HOME` (por defecto `%LOCALAPPDATA%\Android\Sdk`) y agregar `%LOCALAPPDATA%\Android\Sdk\platform-tools` al `Path`.

Para revisar que todo esté bien instalado:

```
ns doctor android
```

Debe decir "No issues were detected". Guía oficial: https://docs.nativescript.org/setup/windows

## Instalación y ejecución

```
git clone <URL-del-repositorio>
cd TareasApp
npm install
ns run android
```

- Con **emulador**: abrirlo primero desde Android Studio (Device Manager) y luego ejecutar `ns run android`.
- Con **teléfono**: activar "Depuración por USB" en las opciones de desarrollador, conectarlo y revisar con `ns devices android`.
- La primera vez tarda varios minutos porque descarga y compila el proyecto de Android.
- Mientras `ns run android` esté abierto, al guardar un archivo la app se actualiza sola.

## Estructura

```
TareasApp/
├─ app/
│  ├─ app.ts                  Punto de entrada (Application.run)
│  ├─ app-root.xml            Frame raíz: define la primera pantalla
│  ├─ app.css                 Estilos de toda la app
│  ├─ lista/                  Pantalla 1
│  │  ├─ lista-page.xml       Interfaz
│  │  ├─ lista-page.ts        Eventos y navegación
│  │  └─ lista-view-model.ts  Datos que muestra la pantalla
│  ├─ formulario/             Pantalla 2
│  │  ├─ formulario-page.xml
│  │  ├─ formulario-page.ts
│  │  ├─ formulario-view-model.ts
│  │  └─ validacion.ts        Reglas de validación
│  ├─ plus/                   Pantalla 3 (broma)
│  │  ├─ plus-page.xml
│  │  ├─ plus-page.ts
│  │  ├─ plus-view-model.ts
│  │  └─ planes.ts            Los tres planes y sus precios
│  ├─ datos/
│  │  ├─ tarea.ts             Modelo
│  │  ├─ tareas-iniciales.ts  Datos de prueba
│  │  └─ tarea-service.ts     Agregar, completar y eliminar
│  └─ utilidades/
│     └─ mensaje.ts           Toast: llamada directa a una API nativa de Android
├─ App_Resources/             Íconos, colores y permisos de Android / iOS
├─ nativescript.config.ts     Identificador de la app
├─ package.json               "main" apunta a app/app.ts
└─ webpack.config.js          Empaquetado
```

`node_modules/`, `platforms/` y `hooks/` se generan solos y no se suben al repositorio.

## Limitaciones

- Los datos no se guardan al cerrar la app (no hay base de datos ni API).
- Solo se probó la compilación para Android; para iOS se necesita una Mac con Xcode.
- No consume la API Django del curso (es una ampliación opcional del enunciado).
