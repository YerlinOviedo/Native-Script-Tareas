// Muestra un mensaje corto al usuario.
// Este archivo enseña la característica principal de NativeScript:
// llamar una API NATIVA de Android directamente desde TypeScript.
import { Dialogs, isAndroid, Utils } from '@nativescript/core'

export function mostrarMensaje(texto: string): void {
  if (isAndroid) {
    // android.widget.Toast es una clase de Java/Kotlin del SDK de Android.
    // Aquí se usa sin escribir Java ni instalar ningún plugin.
    const contexto = Utils.android.getApplicationContext()
    android.widget.Toast.makeText(contexto, texto, android.widget.Toast.LENGTH_SHORT).show()
  } else {
    // En iOS no existe Toast, entonces se usa un diálogo normal.
    Dialogs.alert({ message: texto, okButtonText: 'OK' })
  }
}
