// Business Logic = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function Order() {
  this.items = [];
}

Order.prototype.add = function(item) {
  this.items.push(item);
}

Order.prototype.show = function() {
  var outputHTML = "";
  var totalPrice = 0;

  for(var index = 0; index < this.items.length; index++) {
    outputHTML += 
    "<hr><h2>Pizza " + (index+1) + "</h2>" +
    "Size: " + this.items[index].size + "<br>" +
    "Crust: " + this.items[index].crust + "<br>" +
    "Cheese: " + this.items[index].cheese + "<br>" +
    "Meat: " + this.items[index].meat.join(", ") + "<br>" +
    "Veggies: " + this.items[index].veggies.join(", ") + "<br>";
    totalPrice += this.items[index].price;
  }

  if($("input:radio[name='order-type']:checked").val() === "delivery"){
    totalPrice += 5;
    outputHTML += "<br>Delivery Fee: $5.00";
  }

  $("#current-price").html("Total $" + totalPrice.toFixed(2));
  
  return outputHTML;
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

  var extraToppingCount = (this.meat.length + this.veggies.length) - 3;

  if(extraToppingCount > 0) {
    this.price += extraToppingCount;
  }

  if(this.crust === "Pan Pizza") {
    this.price += 2;
  }

  if(this.cheese === "Extra") {
    this.price += 1.50;
  }

  this.price *= 1.10;
}

// User Interface = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function createPizza() {
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

  return pizza;
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
  "   <input  type='radio' name='size' value='Small' checked> Small" +
  " </label>" +
  "</div>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='size' value='Medium'> Medium" +
  " </label>" +
  "</div>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='size' value='Large'> Large" +
  " </label>" +
  "</div>" +
  "<h2>Crust</h2>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='crust' value='Hand Tossed' checked> Hand Tossed" +
  " </label>" +
  "</div>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='crust' value='Pan Pizza'> Pan Pizza" +
  " </label>" +
  "</div>" +
  "<h2>Cheese</h2>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='cheese' value='Normal' checked> Normal" +
  " </label>" +
  "</div>" +
  "<div class='radio'>" + 
  " <label>" +
  "   <input  type='radio' name='cheese' value='Extra'> Extra" +
  " </label>" +
  "</div>" +

  "<h2>Meat</h2>" +
  "<div>" +
  " <input type='checkbox' name='meat' id='beef' value='Beef'>" +
  " <label for='beef'>Beef</label><br>" +
  " <input type='checkbox' name='meat' id='canadianbacon' value='Canadian Bacon'>" +
  " <label for='canadianbacon'>Canadian Bacon</label><br>" +
  " <input type='checkbox' name='meat' id='pepperoni' value='Pepperoni'>" +
  " <label for='pepperoni'>Pepperoni</label><br>" +
  "</div>" +

  "<h2>Veggies</h2>" +
  "<div>" +
  " <input type='checkbox' name='veggies' id='olives' value='Olives'>" +
  " <label for='olives'>Olives</label><br>" +
  " <input type='checkbox' name='veggies' id='mushrooms' value='Mushrooms'>" +
  " <label for='mushrooms'>Mushrooms</label><br>" +
  " <input type='checkbox' name='veggies' id='tomatoes' value='Mushrooms'>" +
  " <label for='tomatoes'>Tomatoes</label><br>" +
  " <input type='checkbox' name='veggies' id='peppers' value='Mushrooms'>" +
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
    var pizza = createPizza();
    $("#cart").slideUp("slow", function() {
      $("#cart").slideDown();
    });
    order.add(pizza);
    $("#cart").text("");
    $("#cart").html(order.show());
  });

  $("#")

  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    alert("Thanks for your order! You will be redirected to our home page.");
    location.reload();
  });
}
var order = new Order();

$(document).ready(function() {
  attachListeners();
});