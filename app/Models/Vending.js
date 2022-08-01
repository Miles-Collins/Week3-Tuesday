

export class Snack{
  constructor(name, price, image) {
    this.name = name,
    this.price = price
    this.image = image
  }

  get Template() {
    return `
    <button class="col-4">
    <h3 class="bg-dark text-light">${this.name}</h3> <h5>$${this.price}</h5>
    <img onclick="app.vendingController.snackPurchase('${this.name}')" class="beerCard img-fluid" src=${this.image} alt="" srcset="">
    </button>
    `
  }
}