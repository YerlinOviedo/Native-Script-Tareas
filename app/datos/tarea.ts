// Modelo de datos: describe cómo es una tarea dentro de la app.

export type Prioridad = 'Baja' | 'Media' | 'Alta'

// Orden en que aparecen las prioridades en el formulario.
export const PRIORIDADES: Prioridad[] = ['Baja', 'Media', 'Alta']

export interface Tarea {
  id: number
  titulo: string
  responsable: string
  descripcion: string
  prioridad: Prioridad
  completada: boolean
}

// Datos que el usuario escribe en el formulario (sin id ni estado).
export interface DatosTarea {
  titulo: string
  responsable: string
  descripcion: string
  prioridad: Prioridad
}
