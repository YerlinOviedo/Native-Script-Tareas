// Código de la pantalla del formulario (code-behind de formulario-page.xml).
import { EventData, NavigatedData, Page, View } from '@nativescript/core'
import { TareaService } from '../datos/tarea-service'
import { FormularioViewModel } from './formulario-view-model'

// Cada vez que se abre el formulario se crea un view model nuevo (campos vacíos).
export function onNavigatingTo(args: NavigatedData): void {
  const pagina = args.object as Page
  pagina.bindingContext = new FormularioViewModel()
}

// Evento del botón "Guardar tarea".
export function onGuardarTap(args: EventData): void {
  const boton = args.object as View
  const formulario = boton.bindingContext as FormularioViewModel

  // 1. Validar. Si hay errores se muestran en pantalla y no se guarda.
  if (!formulario.validar()) {
    return
  }

  // 2. Guardar la tarea en el servicio de datos.
  TareaService.agregar(formulario.obtenerDatos())

  // 3. Regreso a la lista.
  boton.page.frame.goBack()
}

// Evento del botón "Cancelar": vuelve a la pantalla anterior sin guardar.
export function onCancelarTap(args: EventData): void {
  const boton = args.object as View
  boton.page.frame.goBack()
}
