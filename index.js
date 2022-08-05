// function to handle click 
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var buttonClick = this.innerHTML;
		drumSound(buttonClick);
		buttonAnimation(buttonClick);
	});
}

// function to handle key press 
document.addEventListener("keypress", function (event) {
	drumSound(event.key);
	buttonAnimation(event.key);
})


// function to make drum sound when click or keyh is pressed 
function drumSound(buttonValue) {
	switch (buttonValue) {
		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
	
		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;

		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
			
		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
			
		case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		
		case "k":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
					
		case "l":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;

		default:console.log("yo")
			break;
	}
}


// function to make drum animation when click or keyh is pressed 
function buttonAnimation (buttonValue) {
	var activeButton = document.querySelector("." + buttonValue);

	activeButton.classList.add("pressed")

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}



//function handleClick() {
//	alert("i got clicked");
//}



//function HouseKeeper (name, age, experience, salary) {
//	this.name = name;
//	this.age = age;
//	this.experience = experience;
//	this.salary = salary;
//	this.cleanThis = function () {
//		alert("function inside");
//	}
//}

//var hk1 = new HouseKeeper("Timmy", 19, ["2 years", "3 years"], 1000);
//hk1.cleanThis();