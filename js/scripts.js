// Business Logic = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function Pizza(pizzaSize, pizzaToppings) {
  this.size = pizzaSize;
  this.toppings = pizzaToppings;
  this.price = 0;
}

Pizza.prototype.updatePrice = function() {
  switch(this.size) {
    case "Small":
      this.price = 9.99;
      break;
    case "Medium":
      this.price = 11.99;
      break;
    case "Large":
      this.price = 13.99;
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

  if(this.toppings.includes("Extra Cheese")) {
    this.price += 1.50;
  }

  this.price *= 1.10;
}

function User(userName, userAddress, userPhoneNumber) {
  this.name = userName;
  this.address = userAddress;
  this.phoneNumber = userPhoneNumber;
  this.pizzas = [];
}

User.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}



// User Interface = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function startOrder() {


}

function attachListeners() {

  $(".card").click(function(event) {
    startOrder();
  });

  $(document).on('show.bs.modal', '#pizza-order', function (event) {
    var modalLink = $(event.relatedTarget);
    modalPlayerCode = $(modalLink).attr("name");
    console.log("hi"  );
    alert("Test");
  });
}

$(document).ready(function() {

  attachListeners();
});