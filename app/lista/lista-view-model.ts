// View model del listado: contiene los DATOS que muestra lista-page.xml.
import { Observable, ObservableArray } from '@nativescript/core'
import { Tarea } from '../datos/tarea'
import { TareaService } from '../datos/tarea-service'

export class ListaViewModel extends Observable {
  // La misma lista del servicio. El ListView la muestra con items="{{ tareas }}".
  tareas: ObservableArray<Tarea> = TareaService.obtenerTareas()
  resumen = ''

  constructor() {
    super()
    this.actualizarResumen()
    // Cada vez que la lista cambia (agregar, eliminar, completar) se recalcula el texto.
    this.tareas.on(ObservableArray.changeEvent, () => this.actualizarResumen())
  }

  private actualizarResumen(): void {
    const total = this.tareas.length
    const pendientes = TareaService.contarPendientes()

    let texto = 'Pendientes: ' + pendientes + ' de ' + total
    if (total === 0) {
      texto = 'No hay tareas. Toque "+ Nueva tarea" para agregar una.'
    }
    // set() cambia la propiedad y avisa a la pantalla para que se redibuje.
    this.set('resumen', texto)
  }
}
