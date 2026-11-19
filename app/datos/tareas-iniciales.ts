// DATOS DE PRUEBA: tareas con las que inicia la app.
// Son datos locales (no vienen de una API ni de una base de datos).
import { Tarea } from './tarea'

export const TAREAS_INICIALES: Tarea[] = [
  {
    id: 1,
    titulo: 'Preparar la presentación',
    responsable: 'Ana',
    descripcion: 'Terminar las láminas de NativeScript',
    prioridad: 'Alta',
    completada: false,
  },
  {
    id: 2,
    titulo: 'Instalar Android Studio',
    responsable: 'Luis',
    descripcion: 'Crear el emulador para la demostración',
    prioridad: 'Media',
    completada: true,
  },
  {
    id: 3,
    titulo: 'Subir el código a GitHub',
    responsable: 'Ana',
    descripcion: '',
    prioridad: 'Baja',
    completada: false,
  },
]
