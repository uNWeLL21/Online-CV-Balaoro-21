// Typing animation for the introduction text
const typedText = "Hello World!, I am";
const typedElement = document.querySelector(".typed");
const cursorElement = document.querySelector(".typed-cursor");
let charIndex = 0;

function typeText() {
  if (charIndex < typedText.length) {
    typedElement.textContent += typedText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100); // Adjust typing speed here
  } else {
    setTimeout(() => {
      typedElement.textContent = ""; // Clear text
      charIndex = 0; // Reset index
      cursorElement.style.display = "inline"; // Show cursor again
      typeText(); // Restart typing
    }, 2000); // Pause before restarting
  }
}

// Start typing animation
window.onload = typeText;

// Function to initialize circular progress bars
document.addEventListener("DOMContentLoaded", () => {
  const circularSkills = document.querySelectorAll(".circular-skill");

  circularSkills.forEach((skill) => {
    const progress = skill.getAttribute("data-progress");
    const circle = skill.querySelector(".circle");
    const percentage = skill.querySelector(".percentage");

    // Calculate the stroke-dashoffset based on progress
    const offset = 283 - (100 * progress) / 100;
    circle.style.strokeDashoffset = offset;

    // Update the percentage text
    percentage.textContent = `${progress}%`;
  });
});