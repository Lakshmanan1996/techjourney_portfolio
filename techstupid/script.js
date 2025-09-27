// Particles Background
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 3 }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

// Typing Effect
const typedText = document.querySelector(".typing-text");
const words = ["System Engineer", "DevOps Enthusiast", "Cloud Specialist", "Tech Explorer"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  currentWord = words[i];
  if (!isDeleting && j <= currentWord.length) {
    typedText.textContent = currentWord.substring(0, j++);
  } else if (isDeleting && j >= 0) {
    typedText.textContent = currentWord.substring(0, j--);
  }
  if (j == currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1200);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }
  setTimeout(type, isDeleting ? 80 : 120);
}
type();
