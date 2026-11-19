// VALIDACIÓN del formulario.
// Recibe lo que el usuario escribió y devuelve un mensaje de error por campo.
// Si el mensaje está vacío ('') significa que ese campo está bien.

export interface ErroresFormulario {
  titulo: string
  responsable: string
  descripcion: string
}

export const MAX_DESCRIPCION = 80

export function validarTarea(titulo: string, responsable: string, descripcion: string): ErroresFormulario {
  const errores: ErroresFormulario = { titulo: '', responsable: '', descripcion: '' }

  // trim() quita los espacios al inicio y al final.
  if (titulo.trim().length === 0) {
    errores.titulo = 'El título es obligatorio'
  } else if (titulo.trim().length < 3) {
    errores.titulo = 'El título debe tener al menos 3 letras'
  }

  if (responsable.trim().length === 0) {
    errores.responsable = 'El responsable es obligatorio'
  }

  // La descripción es opcional, pero tiene un máximo de caracteres.
  if (descripcion.trim().length > MAX_DESCRIPCION) {
    errores.descripcion = 'Máximo ' + MAX_DESCRIPCION + ' caracteres'
  }

  return errores
}

export function hayErrores(errores: ErroresFormulario): boolean {
  return errores.titulo !== '' || errores.responsable !== '' || errores.descripcion !== ''
}
