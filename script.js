// Initalize variables
let page;

// Dark mode
const darkMode = localStorage.getItem("dark-mode");
const toggle = document.getElementById("toggle");

// Mobile nav
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (darkMode) {
    document.body.classList.add("dark-mode");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", true);
    } else {
        localStorage.removeItem("dark-mode");
    }
});

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

function navActive(p) {
    page = p;
    document.querySelectorAll('#navbar > #nav-menu > a').forEach(e => {
        e.style.borderBottom = ''
    })
    document.querySelector(`#nav-${page}`).style.borderBottom = "2px solid var(--primary)";
}