drums = document.getElementsByClassName('drum');

for (let i = 0; i < drums.length; i++) {
	drums[i].addEventListener('click', function () /* An anonymous function */ {
		let buttonInnerHTML = this.innerHTML;

		makeSound(buttonInnerHTML);
		buttonAnimation(buttonInnerHTML);
	});
}

// Detecting button press

document.addEventListener('keydown', e => {
	makeSound(e.key);
	buttonAnimation(e.key);
});

function makeSound(key) {
	switch (key) {
		case 'w':
			const tom1 = new Audio('sounds/tom-1.mp3');
			tom1.play();
			break;

		case 'a':
			const tom2 = new Audio('sounds/tom-2.mp3');
			tom2.play();
			break;

		case 's':
			const tom3 = new Audio('sounds/tom-3.mp3');
			tom3.play();
			break;

		case 'd':
			const tom4 = new Audio('sounds/tom-4.mp3');
			tom4.play();
			break;

		case 'j':
			const snare = new Audio('sounds/snare.mp3');
			snare.play();
			break;

		case 'k':
			const crash = new Audio('sounds/crash.mp3');
			crash.play();
			break;

		case 'l':
			const kick = new Audio('sounds/kick-bass.mp3');
			kick.play();
			break;

		default:
			console.log(buttonInnerHTML);
			break;
	}
}

function buttonAnimation(currentKey) {
	let activeButton = document.querySelector('.' + currentKey);
	activeButton.classList.add('pressed');

	setTimeout(() => {
		activeButton.classList.remove('pressed');
	}, 100);
}

// function HouseKeeper(yearsofExperience, name, cleaningRepertoire) {  /* Constructor Function */
//     this.yearsofExperience = yearsofExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.clean = function () {
//     alert("Cleaning in progress...")
//     }
// }

// const houseKeeper1 = new HouseKeeper(12, 'Jane', ['bathroom', 'lobby', 'bedroom']);
// console.log(houseKeeper1.name);
