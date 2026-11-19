// SERVICIO DE DATOS: único lugar donde se guardan y modifican las tareas.
// Las dos pantallas usan este mismo servicio, por eso comparten la lista.
import { ObservableArray } from '@nativescript/core'
import { DatosTarea, Tarea } from './tarea'
import { TAREAS_INICIALES } from './tareas-iniciales'

// ObservableArray es un arreglo que "avisa" cuando cambia.
// Gracias a eso el ListView se actualiza solo al agregar o eliminar.
const tareas = new ObservableArray<Tarea>(TAREAS_INICIALES.map((t) => ({ ...t })))

let siguienteId = TAREAS_INICIALES.length + 1

export const TareaService = {
  obtenerTareas(): ObservableArray<Tarea> {
    return tareas
  },

  agregar(datos: DatosTarea): void {
    const nueva: Tarea = { id: siguienteId, ...datos, completada: false }
    siguienteId++
    // unshift la coloca de primera en la lista.
    tareas.unshift(nueva)
  },

  // Cambia entre pendiente y completada la tarea que está en esa posición.
  cambiarEstado(posicion: number): void {
    const tarea = tareas.getItem(posicion)
    tareas.setItem(posicion, { ...tarea, completada: !tarea.completada })
  },

  eliminar(id: number): void {
    const posicion = tareas.findIndex((t) => t.id === id)
    if (posicion >= 0) {
      tareas.splice(posicion, 1)
    }
  },

  contarPendientes(): number {
    return tareas.filter((t) => !t.completada).length
  },
}
