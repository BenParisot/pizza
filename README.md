# Ben's Pizza Place

#### A Site to Order Some Grub | Released 12-8-2017

#### By Ben Parisot

## Description

This page was created to satisfy the Object Oriented Javascipt Independent Project in Epicodus' Intro to Programming Evening Course. The page uses Javascript and JQuery to take in a variety of inputs from a user, create a new object with the inputted data as its properties, then run a prototype on the object to determine the price of the pizza based on the properties of the new object. The page then displays the name, address, pizza size, toppings, and price to the user and asks them to confirm their order. When they click the confirm button an alert modal pops up to let them know the page has received the order. After closing the modal the page reloads.

The program specs are as follows:
1. The program must accept a variety of inputs from the user: Name, Address, Size, and Toppings, and store them as properties of a new Order object.
	⁃	Example input: Ben Parisot, 111 NE Happy St., Large, Cheese and Pepperoni
	⁃	Example output: order (name:"Ben", address:"111 NE Happy St.", size:"Large", toppings:["cheese", "pepperoni"])
2. The program must run a prototype on the new Order object that determines the price of a pizza based on the pizza size and number of toppings.
	⁃	Example input: Size: Large ($20), Toppings: Cheese ($0), Pepperoni ($0), Sausage ($0), Onion ($1)
	⁃	Example output: Price: 21
3. The program must display the properties of the new Object (after the pricing prototype has been run on it) on the screen
	⁃	Example input: "Order That Pie!" button is clicked
	⁃	Example output: Confirm Your Order: Your Name: Ben, Your Address: 111 NE Happy St., Size: Large, Toppings: Cheese, Pepperoni, Sausage, Onion, Price: $21
4. The program must display an alert message letting the visitor know their order has been received when the "Looks Good!" button is clicked
	⁃	Example input: "Looks Good" button is clicked
	⁃	Example output: "Thanks for your order! We'll be at your door in 30 minutes or less."
5. The program must reload the page when the alert modal is closed.


## Setup/Installation Requirements

* Clone this repository using git clone https://github.com/BenParisot/pizza
* Open index.html in your favorite web browser
* Order a pizza!

## Viewing Project On Github Pages

Visit https://benparisot.github.io/pizza/ to view this project on Github Pages.

## Support and contact details

Questions, comments, or concerns about my code? Contact me at me@benparisot.com.

## Technologies Used

* Javascript
* JQuery
* HTML
* CSS
* Bootstrap
* Github/GitPages

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Ben Parisot
