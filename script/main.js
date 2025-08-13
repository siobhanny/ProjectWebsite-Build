
const mainSections = document.getElementsByClassName('mainContent');


const mainSection = mainSections[0];

function scrollToMain() {
    mainSection.scrollIntoView({behavior: 'smooth'})
}


var navContainer = document.getElementById("menu");
var btn = document.getElementById("toggle");

function toggleMenu() {
  navContainer.classList.toggle('active');
}

btn.addEventListener('click', toggleMenu);

// Collapse menu when a nav link is clicked
var navLinks = document.getElementsByClassName("navlink");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    navContainer.classList.remove('active');
  });
}
