class Discount{
  constructor() {
    this.original_amount = 0
    this.discount_applied = false
  }

  order_discount(){
    if (order.total.pre_tax_total > 50){
      this.discount_applied = true
      this.original_amount = order.total.pre_tax_total
      let discount = order.total.pre_tax_total * .95
      order.total.pre_tax_total = Math.round(discount * 100) / 100
    } 
  }
}