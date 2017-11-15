var wins = 0;
var losses = 0;
var targetNumber;
var counter = 0;
var gemValues = [];

var gemQuantity = [1, 2, 3, 4];


targetNumber = Math.floor((Math.random() * 101) + 19);
$("#targetNumb").text(targetNumber);

$("#total").text(counter);

for (var i = 0; i < gemQuantity.length; i++) {
	var newValue = Math.floor((Math.random() * 11) + 1);
	gemValues.push(newValue);
}

$(".gemImage").each(function(index, item){
	$(item).attr("data-gem-value", gemValues[index]);
});

$(".gemImage").on("click", function() {
	var singleGemValue = $(this).attr("data-gem-value");
	singleGemValue = parseInt(singleGemValue)

	counter = counter + singleGemValue;

	$("#total").text(counter);

	if (counter > targetNumber) {
		losses++;
		$("#losses").text("Losses: " + losses);
		alert("Oh no! One of the gems is cracked! Try again!.");
		reset();
	} else if (counter === targetNumber) {
		wins++;
		$("#wins").text("Wins: " + wins);
		alert("Yay! You win, the gems will reform soon!")
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