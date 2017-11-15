var wins = 0;
var losses = 0;
var targetNumber;
var counter = 0;
var gemValues = [];

//array with four elements to run for loop four times
var gemQuantity = [1, 2, 3, 4];


// The player will be shown a random number at the start of the game.
targetNumber = Math.floor((Math.random() * 101) + 19);
$("#targetNumb").text(targetNumber);

$("#Total").text(counter);

// Generate four random numbers
for (var i = 0; i < gemQuantity.length; i++) {
	var newValue = Math.floor((Math.random() * 11) + 1);
	gemValues.push(newValue);
}

//Assign one random number to each crystal
// $("#blue").attr("data-rupeeValue", rupeeValues[0]);
// $("#white").attr("data-rupeeValue", rupeeValues[1]);
// $("#red").attr("data-rupeeValue", rupeeValues[2]);
// $("#purple").attr("data-rupeeValue", rupeeValues[3]);
$(".gemImage").each(function(index, item){
	$(item).attr("data-gem-value", gemValue[index]);
});

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
$(".gemImage").on("click", function() {
	var singleGemValue = $(this).attr("data-gem-value");
	singleGemValue = parseInt(singleGemValue)

	counter = counter + singleGemValue;

	$("#total").text(counter);

	if (counter > targetNumber) {
		losses++;
		$("#losses").text("Losses: " + losses);
		alert("You losse! No flower for Zelda, no luck for you.");
		reset();
	} else if (counter === targetNumber) {
		wins++;
		$("#wins").text("Wins: " + wins);
		alert("You win! Your neck and the kingdom are safe.")
		reset();
	}
});

function reset () {
	targetNumber;
	counter = 0;
	gemValues = [];

	$("#total").text(counter);

	//generate new random number
	targetNumber = Math.floor((Math.random() * 101) + 19);
	$("#targetNumb").text(targetNumber);

	for (var i = 0; i < gemQuantity.length; i++) {
		var newValue = Math.floor((Math.random() * 11) + 1);
		gemValues.push(newValue);
	}

	//generate new rupee values
	$(".gemImage").each(function(index, item){
		$(item).attr("data-gem-value", gemValues[index]);
	});
}