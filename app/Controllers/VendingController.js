import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Vending.js";
import { vendingService } from "../Services/VendingService.js";

function _drawSnacks() {
  let snacks = ProxyState.snacks
  let template = ''
  snacks.forEach(s => template += s.Template)
  document.getElementById("snacks").innerHTML = template
  console.log(template); 
}
function _addMoney(){
  vendingService.addMoney()
  console.log(ProxyState.money)
  vendingService.showMoney()
}

function _purchaseSnack(name) {
vendingService.purchaseSnack(name)
vendingService.showMoney()
}

export class VendingController {
  constructor() {
    _drawSnacks()
    console.log(ProxyState.snacks)
    setInterval(_addMoney, 10000)
    console.log(ProxyState.money)
  }
  money(){
    console.log('money button');
    _addMoney()
   
  }
  
  snackPurchase(name){
    _purchaseSnack(name)
  }

}