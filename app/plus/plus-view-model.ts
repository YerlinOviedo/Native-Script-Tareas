// View model de la pantalla "Calendario Plus" (broma para la exposición).
import { Observable } from '@nativescript/core'
import { Plan, PLANES } from './planes'

export class PlusViewModel extends Observable {
  // Los tres planes que se muestran en pantalla.
  plan0: Plan = PLANES[0]
  plan1: Plan = PLANES[1]
  plan2: Plan = PLANES[2]

  // Plan seleccionado: 0, 1 o 2. Inicia en el del medio.
  planIndex = 1
  textoBoton = ''

  // Campos de la tarjeta. Solo viven en esta pantalla:
  // no se guardan ni se envían a ningún lado.
  numeroTarjeta = ''
  vencimiento = ''
  cvv = ''
  titular = ''

  constructor() {
    super()
    this.seleccionarPlan(1)
  }

  seleccionarPlan(posicion: number): void {
    this.set('planIndex', posicion)
    this.set('textoBoton', 'Pagar ' + PLANES[posicion].precio)
  }

  planSeleccionado(): Plan {
    return PLANES[this.planIndex]
  }
}
