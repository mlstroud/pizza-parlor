// Business Logic = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function Order() {
  this.items = [];
}

Order.prototype.add = function(item) {
  this.items.push(item);
}

Order.prototype.show = function() {
  var outputHTML = "";

  for(var index = 1; index <= this.items.length; i++) {
    outputHTML += 
    "<h2>Pizza " + index + "</h2>" +
    "Size: " + this.items.size + "<br>" +
    "Crust: " + this.items.crust + "<br>" +
    "Cheese: " + this.items.cheese + "<br>" +
    "Meat: " + this.items.meat.join(", ") + "<br>" +
    "Veggies" + this.items.veggies.join(", ") + "<br>";
  }
  
  return outputHTML;
}

Order.prototype.submit = function(item) {

}

function Pizza(pizzaSize, pizzaCrust, pizzaCheese, pizzaMeat, pizzaVeggies) {
  this.size = pizzaSize;
  this.crust = pizzaCrust;
  this.cheese = pizzaCheese;
  this.meat = pizzaMeat;
  this.veggies = pizzaVeggies;
  this.price = 0;
}

Pizza.prototype.updatePrice = function() {
  switch(this.size) {
    case "small":
      this.price = 9.99;
      break;
    case "medium":
      this.price = 11.99;
      break;
    case "large":
      this.price = 13.99;
      break;
    default:
      this.price = 0;
      break;
  }

  var extraToppingCount = (this.meat.length + this.veggies.length) - 3;

  if(extraToppingCount > 0) {
    this.price += extraToppingCount;
  }

  if(this.crust === "panpizza") {
    this.price += 2;
  }

  if(this.cheese === "extra") {
    this.price += 1.50;
  }

  this.price *= 1.10;

  console.log(this.price.toFixed(2));
}

// User Interface = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function createPizza(order) {
  var size = $("input[name=size]:checked").val();
  var crust = $("input[name=crust]:checked").val();
  var cheese = $("input[name=cheese]:checked").val();
  var meat = [];
  var veggies = [];

  $("input:checkbox[name=meat]:checked").each(function() {
    meat.push($(this).val());
  })

  $("input:checkbox[name=veggies]:checked").each(function() {
    veggies.push($(this).val());
  })

  var pizza = new Pizza(size, crust, cheese, meat, veggies);
  pizza.updatePrice();

  order.add(pizza);
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
  "<h2>Size</h2>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='size' value='small' checked> Small" +
  " </label>" +
  "</div>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='size' value='medium'> Medium" +
  " </label>" +
  "</div>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='size' value='large'> Large" +
  " </label>" +
  "</div>" +
  "<h2>Crust</h2>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='crust' value='handtossed' checked> Hand Tossed" +
  " </label>" +
  "</div>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='crust' value='panpizza'> Pan Pizza" +
  " </label>" +
  "</div>" +
  "<h2>Cheese</h2>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='cheese' value='normal' checked> Normal" +
  " </label>" +
  "</div>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='cheese' value='extra'> Extra" +
  " </label>" +
  "</div>" +

  "<h2>Meat</h2>" +
  "<div>" +
  " <input type='checkbox' name='meat' id='beef' value='beef'>" +
  " <label for='beef'>Beef</label><br>" +
  " <input type='checkbox' name='meat' id='canadianbacon' value='canadianbacon'>" +
  " <label for='canadianbacon'>Canadian Bacon</label><br>" +
  " <input type='checkbox' name='meat' id='pepperoni' value='pepperoni'>" +
  " <label for='pepperoni'>Pepperoni</label><br>" +
  "</div>" +

  "<h2>Veggies</h2>" +
  "<div>" +
  " <input type='checkbox' name='veggies' id='olives' value='olives'>" +
  " <label for='olives'>Olives</label><br>" +
  " <input type='checkbox' name='veggies' id='mushrooms' value='mushrooms'>" +
  " <label for='mushrooms'>Mushrooms</label><br>" +
  " <input type='checkbox' name='veggies' id='tomatoes' value='tomatoes'>" +
  " <label for='tomatoes'>Tomatoes</label><br>" +
  " <input type='checkbox' name='veggies' id='peppers' value='peppers'>" +
  " <label for='peppers'>Peppers</label><br>" +
  "</div>";

  $("#modalLabel").html(modalLabel);
  $("#order-form-body").html(orderHTML);
}

function attachListeners() {

  $(".card").click(function(event) {
    var name = $(this).attr("id");
    showOrderForm(name);
  });

  $("#pizza-form").submit(function(event) {
    event.preventDefault();
  });

  $("button#addtocart").click(function() {
    var order = new Order();
    createPizza(order);
    $("#cart").html(order.show());
    $("#cart").slideDown();
  });
}

$(document).ready(function() {
  attachListeners();
});