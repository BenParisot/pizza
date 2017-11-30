// back end logic
var numberToppings = [];

function Order(name, address, size, toppings, price) {
	this.name = name;
	this.address = address;
	this.size = size;
	this.toppings = toppings;
	this.price = 0;
};

Order.prototype.pricing = function() {
	if (this.size === "Small") {
		this.price = this.price + 15;
	}
	else if (this.size === "Medium") {
		this.price = this.price + 20;
	}
	else if (this.size === "Large") {
		this.price = this.price + 25;
	}
	if (numberToppings.length <= 3) {
		this.price = this.price + 0;
	}
	else if (numberToppings.length > 3) {
		for (var index = 0; index < numberToppings.length - 3; index += 1) {
			this.price = this.price + 1;
		}
	}
};

// front end logic

$(document).ready(function() {
	$("form#order").submit(function(event) {
		event.preventDefault();
		var inputtedName = $("#name").val();
		var inputtedAddress = $("#address").val();
		var inputtedSize = $("input:radio[name=size]:checked").val();
		$("input:checkbox[name=toppings]:checked").each(function() {
			var inputtedToppings = $(this).val();
			numberToppings.push(inputtedToppings);
		});

		newOrder = new Order(inputtedName, inputtedAddress, inputtedSize, numberToppings);
		newOrder.pricing();
		console.log(newOrder);

	});
});
