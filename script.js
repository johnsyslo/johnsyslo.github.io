const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

async function getDog() {
	const response = await fetch("https://dog.ceo/api/breeds/image/random");
	var data = await response.json();
	var dogImage = data.message;

	document.getElementById("doggieImg").src = dogImage;
}
