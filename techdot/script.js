// Typing effect
const text = ["Front-End Developer", "React & JS Enthusiast", "Tech Lover"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
      document.querySelector(".typing-text").textContent = currentText;
      setTimeout(type, 150);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
      document.querySelector(".typing-text").textContent = currentText;
      setTimeout(type, 100);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i++;
      if (i >= text.length) i = 0;
      setTimeout(type, 500);
    }
  }
}
type();

// Particles.js config
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles loaded');
});
