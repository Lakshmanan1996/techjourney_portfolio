// Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 3 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } }
  },
  retina_detect: true
});

// Typing Effect
const texts = ["Infrastructure Engineer", "Cloud Specialist", "DevOps Enthusiast"];
let count = 0, index = 0, currentText = "", letter = "";
(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 120);
  }
})();
