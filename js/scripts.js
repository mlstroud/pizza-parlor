// Business Logic = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function Pizza(pizzaSize, pizzaToppings) {
  this.size = pizzaSize;
  this.toppings = pizzaToppings;
  this.price = 0;
}

Pizza.prototype.updatePrice = function() {
  switch(this.size) {
    case "Small":
      this.price = 10;
      break;
    case "Medium":
      this.price = 12;
      break;
    case "Large":
      this.price = 14;
      break;
    default:
      this.price = 0;
      break;
  }

  var extraToppingCount = this.toppings.length - 3;

  if(extraToppingCount > 0) {
    this.price += extraToppingCount;
  }

  if(this.toppings.includes("Pan Pizza")) {
    this.price += 2;
  }
}



// User Interface = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
$(document).ready(function() {

});