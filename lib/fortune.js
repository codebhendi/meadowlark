var fortune = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs",
	"Do not fear what you don't know",
	"You will have a pleasanr surprise",
	"Whenever possible, keep it simple."
];

exports.getFortune = function() {
	var randomFortune = fortune[parseInt( Math.random() * fortune.length )];
	return randomFortune;
}