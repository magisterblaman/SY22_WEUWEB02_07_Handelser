let counter = document.querySelector('#counter');
let clickButton = document.getElementById('click-button');
// let clicker2 = document.querySelectorAll('#clicker2')[0];
// let clicker3 = document.querySelectorAll('#clicker3')[0];
let clickers = document.getElementsByClassName('clicker');
let link = document.querySelectorAll('.link')[0];

clickButton.addEventListener('click', handleClickEvent);
clickButton.addEventListener('touchstart', handleClickEvent); // fungera även på mobiler

// clicker2.addEventListener('click', handleClickEvent3);
// clicker3.addEventListener('click', handleClickEvent3);

for (let i = 0; i < clickers.length; i++) {
	clickers[i].addEventListener('click', handleClickEvent3);
}

function handleClickEvent() {
	let currentCount = parseInt(counter.innerText);
	let newCount = currentCount + 1;
	counter.innerText = newCount;
}

let count = 0;

function handleClickEvent2() {
	count++;
	counter.innerText = count;
}

function handleClickEvent3(event) {
	console.log(event);

	let currentCount = parseInt(event.target.innerText);
	let newCount = currentCount + 1;
	event.target.innerText = newCount;
}

link.addEventListener('click', handleLinkClick);

function handleLinkClick(event) {
	event.preventDefault();

	document.body.style.backgroundColor = 'red';

	let hackedText = document.createElement('h1');
	hackedText.innerText = "DU HAR BLIVIT HACKAD LOLOLOLOLOL";
	document.body.appendChild(hackedText);
}