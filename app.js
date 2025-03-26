const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// var icon = document.getElementById("icon");
// icon.onclick=function (){
// 	document.body.classList.toggle("dark-theme");
// 	if (document.body.classList.contains("dark-theme")){
// 		icon.src ="img/sun.png";
// 	}
// 	else {
// 		icon.src ="img/moon.png";
// 	}
// }

particlesJS.load('particles-js-ecommerce', 'particles.json', function() {
	console.log('callback - particles.js config loaded');
});
particlesJS.load('particles-js-maintenance', 'particles.json', function() {
	console.log('callback - particles.js config loaded');
});
particlesJS.load('particles-js-extension1', 'particles.json', function() {
	console.log('callback - particles.js config loaded');
});
particlesJS.load('particles-js-extension2', 'particles.json', function() {
	console.log('callback - particles.js config loaded');
});
particlesJS.load('particles-js-consult', 'particles.json', function() {
	console.log('callback - particles.js config loaded');
});
particlesJS.load('particles-js-cover', 'particles.json', function() {
	console.log('callback - particles.js config loaded');
});