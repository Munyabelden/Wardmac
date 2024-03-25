const menuBar = document.querySelector('#menu-bars');
const menuItems = document.querySelector('#menu-items');
const menuItem = document.querySelectorAll('.menu-item');
const elements = document.querySelectorAll('.fade-in-up');

menuBar.addEventListener('click', () => {
  menuItems.classList.toggle('render');
})

menuItem.forEach((item) => {
  item.addEventListener('click', () => menuItems.classList.toggle('render'));
})

const textToType = "Welcome to Wardmac";

const typingSpeed = 100;

let charIndex = 0;

function typeEffect() {
  const text = textToType.slice(0, ++charIndex);
  document.getElementById('typing-text').textContent = text;
  if (charIndex < textToType.length) {
    setTimeout(typeEffect, typingSpeed);
  }
}

window.onload = function() {
  typeEffect();
};

function fadeInUpElements() {
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add('show');
    }
  });
}

window.addEventListener("scroll", () => {
  fadeInUpElements();
});

fadeInUpElements();
