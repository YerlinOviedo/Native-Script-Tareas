// View model del formulario: guarda lo que el usuario escribe y los errores.
import { Observable } from '@nativescript/core'
import { DatosTarea, PRIORIDADES } from '../datos/tarea'
import { hayErrores, validarTarea } from './validacion'

export class FormularioViewModel extends Observable {
  // Campos del formulario. Están enlazados en dos vías con el XML:
  // si el usuario escribe, la propiedad cambia sola.
  titulo = ''
  responsable = ''
  descripcion = ''
  prioridadIndex = 1 // 0 = Baja, 1 = Media, 2 = Alta

  // Mensajes de error que se muestran debajo de cada campo.
  errorTitulo = ''
  errorResponsable = ''
  errorDescripcion = ''

  // Revisa los campos. Devuelve true si todo está correcto.
  validar(): boolean {
    const errores = validarTarea(this.titulo, this.responsable, this.descripcion)

    this.set('errorTitulo', errores.titulo)
    this.set('errorResponsable', errores.responsable)
    this.set('errorDescripcion', errores.descripcion)

    return !hayErrores(errores)
  }

  // Arma el objeto con los datos listos para guardar.
  obtenerDatos(): DatosTarea {
    return {
      titulo: this.titulo.trim(),
      responsable: this.responsable.trim(),
      descripcion: this.descripcion.trim(),
      prioridad: PRIORIDADES[this.prioridadIndex],
    }
  }
}
