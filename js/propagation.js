let buttonContainer = document.querySelector('#button-container');
let button = document.getElementById('my-button');

buttonContainer.addEventListener('click', breakLamp);
button.addEventListener('click', handleLightSwitch);

function handleLightSwitch(event) {
	event.stopPropagation();

	buttonContainer.classList.toggle('activated');
}

function breakLamp(event) {
	buttonContainer.classList.add('broken');
}