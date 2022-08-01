import { Snack } from "./Models/Vending.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Vending').Value[]} */
  values = []

money = 0


snacks = [
  new Snack('Bud Light', '2.50', 'assets/img/budLight.webp'),
  new Snack('Coors Light', '2.50', 'assets/img/coorslight-can.webp'),
  new Snack('Busch Latte', '2.50', 'assets/img/buschLatte.png'),
  new Snack('Fat Tire', '3.00', 'assets/img/fatTire.png'),
  new Snack('Modelo', '2.50', 'assets/img/modelo.png'),
  new Snack('Blue Moon', '2.50', 'assets/img/blueMoon.png')
]
}
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
