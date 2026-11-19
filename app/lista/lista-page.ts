// Código de la pantalla de listado (code-behind de lista-page.xml).
// Aquí van los EVENTOS: funciones que se ejecutan cuando el usuario toca algo.
import { EventData, ItemEventData, NavigatedData, Page, View } from '@nativescript/core'
import { TareaService } from '../datos/tarea-service'
import { ListaViewModel } from './lista-view-model'

// Se ejecuta cada vez que se va a mostrar la página.
export function onNavigatingTo(args: NavigatedData): void {
  const pagina = args.object as Page
  // bindingContext conecta el XML con los datos del view model.
  if (!pagina.bindingContext) {
    pagina.bindingContext = new ListaViewModel()
  }
}

// Evento del botón "+ Nueva tarea": navega a la pantalla del formulario.
export function onNuevaTareaTap(args: EventData): void {
  const boton = args.object as View
  boton.page.frame.navigate('formulario/formulario-page')
}

// Evento al tocar una fila: marca la tarea como completada o pendiente.
export function onTareaTap(args: ItemEventData): void {
  TareaService.cambiarEstado(args.index)
}
