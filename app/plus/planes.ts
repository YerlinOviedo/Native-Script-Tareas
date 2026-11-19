// Planes de "Calendario Plus". Es una BROMA para la exposición:
// los precios son exagerados a propósito y no existe ningún cobro real.

export interface Plan {
  nombre: string
  precio: string
  detalle: string
}

export const PLANES: Plan[] = [
  {
    nombre: 'Plus Básico',
    precio: '₡4.999.999 al mes',
    detalle: 'Permite ver las tareas en orden.',
  },
  {
    nombre: 'Plus Pro Max',
    precio: '₡49.999.999 al mes',
    detalle: 'Incluye el botón de guardar sin anuncios.',
  },
  {
    nombre: 'Plus Ultra Empresarial',
    precio: '₡999.999.999 al mes',
    detalle: 'Un programador le anota las tareas a mano.',
  },
]
