class Total{
constructor() {
  this.discount = new Discount()
  this.tax = 0
  this.preTaxTotal = 0
  this.amountOwed= 0
  }

  itemPrice(item){
    if(item.includes("Muffin")){
    return this.discount.tenDiscount(item)
    }else{
    return order.menu.options[item]
    }
  }

  itemTotal(num,item){
    return num * this.itemPrice(item)
  }

  price(num,item){
    this.preTaxTotal +=this.itemTotal(num,item)
  }

  orderTax(pct=0.0864){ 
    let tax = (this.preTaxTotal * pct)
    this.tax = (Math.round(tax * 100) / 100)
  }

  totalCost(amt){
    order.discount.orderDiscount(amt)
    let final = this.preTaxTotal + this.tax
    this.amountOwed += Math.round(final * 100) / 100
  }
}
