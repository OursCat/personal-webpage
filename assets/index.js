const swup = new Swup();
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const navClicked = document.querySelectorAll('.nav-clicked');

hamburger.addEventListener('click', function () {
	nav.classList.toggle('open');
});

function clicked() {
	document.querySelector('.hamburger').classList.toggle('change');
}

for (var count = 0; count < navClicked.length; count++) {
	navClicked[count].addEventListener('click', function () {
		nav.classList.toggle('open');
		document.querySelector('.hamburger').classList.toggle('change');
	});
}
