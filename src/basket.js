const Bagel = require("./bagel");

class Basket {
  bagels;
  basketCapacity;
  basketQuantity;

  constructor() {
    this.bagels = [];
    this.basketCapacity = 10;
    this.basketQuantity = 0;
  }

  add(bagel, quantity) {
    if (this.basketQuantity + quantity <= this.basketCapacity && quantity > 0) {
      const findResult = this.find(bagel);

      //if bagel is already in the basket
      if (findResult.length > 0) {
        findResult[0].quantity += quantity;
      } else {
        //if it is a new bagel
        this.bagels.push({
          bagel,
          quantity,
        });
      }

      this.basketQuantity += quantity;
      return true;
    }

    return false;
  }

  remove(bagel, quantity){

    const findResult = this.find(bagel)

    if (findResult.length > 0 && quantity > 0) {

        if(findResult[0].quantity >= quantity){
            findResult[0].quantity -= quantity;
            this.basketQuantity -= quantity;
        } else {
            const index = this.bagels.findIndex(item => item.bagel.name === findResult[0].bagel.name)
            if (index != -1) this.bagels.splice(index, 1)
        }
        
        return true
    }

    return false
  }

  find(bagel) {
    return this.bagels.filter((item) => item.bagel.name === bagel.name);
  }
}

module.exports = Basket;
