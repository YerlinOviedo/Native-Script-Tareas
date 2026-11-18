// PUNTO DE ENTRADA de la aplicación.
// package.json indica en "main" que este es el primer archivo que se ejecuta.
import { Application } from '@nativescript/core'

// Arranca la app y carga app-root.xml como vista raíz.
Application.run({ moduleName: 'app-root' })

// No poner código después de Application.run: en iOS no se ejecuta.
