// Código de la pantalla "Calendario Plus" (code-behind de plus-page.xml).
// Es una broma: no hay ningún pago real ni conexión a internet.
import { Dialogs, EventData, NavigatedData, Page, View } from '@nativescript/core'
import { PlusViewModel } from './plus-view-model'

export function onNavigatingTo(args: NavigatedData): void {
  const pagina = args.object as Page
  pagina.bindingContext = new PlusViewModel()
}

// Evento al tocar un plan. El id del XML es "plan0", "plan1" o "plan2".
export function onPlanTap(args: EventData): void {
  const tarjeta = args.object as View
  const modelo = tarjeta.page.bindingContext as PlusViewModel
  const posicion = Number(tarjeta.id.replace('plan', ''))
  modelo.seleccionarPlan(posicion)
}

// Evento del botón "Pagar".
export async function onPagarTap(args: EventData): Promise<void> {
  const boton = args.object as View
  const modelo = boton.bindingContext as PlusViewModel

  if (modelo.numeroTarjeta.trim().length === 0) {
    await Dialogs.alert({
      title: 'Falta la tarjeta',
      message: 'Escriba un número de tarjeta. Puede ser inventado.',
      okButtonText: 'OK',
    })
    return
  }

  await Dialogs.alert({
    title: 'Pago rechazado',
    message:
      'Fondos insuficientes para ' +
      modelo.planSeleccionado().nombre +
      ' (' +
      modelo.planSeleccionado().precio +
      ').\n\nTranquilo, es una broma: no se cobró ni se guardó nada.',
    okButtonText: 'Qué alivio',
  })

  boton.page.frame.goBack()
}

export function onVolverTap(args: EventData): void {
  const boton = args.object as View
  boton.page.frame.goBack()
}
