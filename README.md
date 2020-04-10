# _Pizza Parlor_

#### By _**Matt Stroud**_
##### _Last Updated April 10, 2020_

## Description

_An independent project from Epicodus._  
_This application uses object oriented programming to create a pizza order application._  
_Users can customize their pizza, representated by a JavaScript object, and have the cost calculated._  

## Specs

| Behavior                                                                    |                   Input                   |                                                                       Output |
|:----------------------------------------------------------------------------|:-----------------------------------------:|-----------------------------------------------------------------------------:|
| The program will allow the user to select delivery or carry out.            | Delivery                                  | Enter address.                                                               |
| The program will provide pizza options that open a modal when clicked.      | Custom Pizza                              | Modal with topping selection.                                                |
| The program will store selected toppings in an array.                       | Medium, Beef, Olives, Jalapeños           | ["Beef", "Olives", "Jalapeños"]                                              |
| The program will create a pizza object with user selections.                | Large, Hand Tossed, Pepperoni             | var pizza = new Pizza(Large, toppings)                                       |
| The program will calculate cost based on toppings.                          | Large, Pan Pizza, Extra Cheese, Pepperoni | $16.50 | ($12 + $2 + $1) * 1.1                                               |
| The program will add the pizza to the "Order".                              | order.push(pizza)                         | [pizza, pizza, pizza, ...] |
| The program will append the created pizza to the cart.                      | Medium, Combo                             | Pizza 1 - Medium, etc...  |

## Stretch Goals
* Have non-custom pizza's have default topic selections based on the type of pizza.
* Convert HTML display to be dynamically created, reducing overall "typed" code.
* Add additional input validation.
* Show more customized receipts.
* Add payment collection form before submit.

## Known Bugs
* Selecting Pepperoni Label does not trigger the checkbox.
* Delivery address form not yet implemented.


## Setup/Installation Requirements

* Clone this repository.
* Navigate to index.html file.
* Right click and open in the browser of your choice.

## View Online

* View at https://mlstroud.github.io/pizza-parlor

### License

This software is licensed under the MIT license.

Copyright (c) 2020 **Matt Stroud**