import { ProxyState } from "../AppState.js";


class VendingService{
    
  addMoney() {
    ProxyState.money += .25
  }

  showMoney() {
    document.getElementById('moniez').innerText = ProxyState.money
  }

  purchaseSnack(name) {
    console.log('buying', name)
    let purchase = ProxyState.snacks.find(p => p.name == name)
    if (ProxyState.money >= purchase.price) {
      ProxyState.money -= purchase.price
    } else {
      alert("You don't have enough money")
    }
  }
}

export const vendingService = new VendingService()