// Business Logic = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function Order() {
  this.items = [];
}

Order.prototype.add = function(item) {
  this.items.push(item);
}

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

function showOrderForm(pizzaName) {
  var orderHTML = "";
  var modalLabel = "Customize your ";
  var name = "";

  switch(pizzaName) {
    case "custom":
      modalLabel += "Custom pizza!";
      break;
    case "pepperoni":
      modalLabel += "Pepperoni++ pizza!";
      break;
    case "mushroom":
      modalLabel += "Mushroom pizza!";
      break;
    case "veggie":
      modalLabel += "Veggie pizza!";
      break;
    default:
      modalLabel = "Error";
      break;
  }

  orderHTML +=
  "<h2>Crust</h2>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='crust' value='handtossed' checked> Hand Tossed" +
  " </label>" +
  "</div>" +
  "<h2>Cheese</h2>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='crust' value='handtossed' checked> Hand Tossed" +
  " </label>" +
  "</div>";

  $("#modalLabel").html(modalLabel);
  $("#order-form-body").html(orderHTML);
}

function attachListeners() {

  $(".card").click(function(event) {
    startOrder();

    var name = $(this).attr("id");
    showOrderForm(name);

  });
}

$(document).ready(function() {

  attachListeners();
});