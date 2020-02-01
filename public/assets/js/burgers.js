$(function() {
	// Click handler for "DEVOUR" button
	$(".devour-it").on("click", function(event) {
		var id = $(this).data("id");
		var newDevoured = $(this).data("newdevour");

		var newDevourState = {
			devoured: newDevoured
		};

			
		// Send the PUT request to update database
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevourState
		}).then(
			function() {
				console.log("changed devour to", newDevoured);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	// Click handler for "SUBMIT" button for adding a new burger
	$(".create-form").submit(function(event) {
		// preventDefault for submit event
		
		event.preventDefault();

		var newBurger = {
			name: $("#burg").val().trim(),
			devoured: 0
		};

		// Send the PUT request to update database
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("created new burger");
				// Reload the page to get the updated list
        		location.reload();
			}
		);
	});





});