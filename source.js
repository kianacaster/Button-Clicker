const scoreButton = document.getElementById('scoreButton'); // Access the button element
const scoreElement = document.getElementById('score'); // Access the score element
let score = 0; // Set the score to 0 when first loaded

// Run this function as many times as possible per second
setInterval( 
	function(){  
		scoreElement.innerHTML = score + " Points"; // Make sure the score element is displaying the correct score
	}
)

scoreButton.addEventListener('click', event => { // Detect when the button is clicked
	score++; // Increase the score by 1
});
