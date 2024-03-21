'useStrict'

// Text content for typing effect
const textToType = "Welcome to Wardmac";

// Speed of typing in milliseconds
const typingSpeed = 100;

// Index to keep track of characters
let charIndex = 0;

// Function to simulate typing effect
function typeEffect() {
  const text = textToType.slice(0, ++charIndex);
  document.getElementById('typing-text').textContent = text;
  if (charIndex < textToType.length) {
    setTimeout(typeEffect, typingSpeed);
  }
}

// Start typing effect when the page loads
window.onload = function() {
  typeEffect();
};