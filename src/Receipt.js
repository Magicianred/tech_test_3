class Receipt{
constructor(order = new Order) {
  this.order = order
}

  getDate(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    return dateTime
  }

  receiptHeader(){
    let header =
    (this.getDate()+ "<br />"+
    'The Coffee Connection'+ "<br />"+"<br />"+
    "123 Lakeside Way"+ "<br />"+
    "Phone: 1 (650) 360-0708"+ "<br />"+
    ". <br />"
    )
    return header
  }
  
  printOrder(){
   return this.order.customerOrder.toString().replace(",","")
  }

  whichReceipt(){
    if(this.order.total.discountApplied === true){
      let discountReceipt =
      (this.receiptHeader() +
       this.printOrder() +"<br />"+
      'Disc     5% from $'+ this.order.total.discount.originalAmount+"<br />"+
      'Tax:     $'+ this.order.total.tax +"<br />"+
      'Total:     $'+ this.order.total.amountOwed+"<br />"+
      'Cash:     $'+ this.order.total.payment.received+"<br />"+
      'Change:     $' + this.order.total.payment.change)
      return discountReceipt
     } 
     else if(this.order.total.discountApplied === false){
      let receipt = 
      (this.receiptHeader()+
       this.printOrder() +"<br />"+
      'Tax:     $'+ this.order.total.tax +"<br />"+
      'Total:     $'+ this.order.total.amountOwed+"<br />"+
      'Cash:     $'+ this.order.total.payment.received+"<br />"+
      'Change:     $' + this.order.total.payment.change)
      return receipt
    }
  }

  printReceipt(){
    return this.whichReceipt()
  }
}

  