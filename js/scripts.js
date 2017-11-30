// back end logic
var numberToppings = [];

function Order(name, address, size, toppings, price) {
	this.name = name;
	this.address = address;
	this.size = size;
	this.toppings = toppings;
	this.price = 0;
};

// var tipToppings = [];
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
		console.log(newOrder);

	});

});
