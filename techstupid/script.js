// Typing Effect
const texts = ["IT Professional", "Datto Networking Expert", "Cloud Enthusiast"];
let count = 0, index = 0, currentText = '', letter = '';
(function type(){
  if(count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing-text").textContent = letter;
  if(letter.length === currentText.length){
    count++; index=0; setTimeout(type,1500);
  } else setTimeout(type,150);
}());

// Particles.js config for Home section only
particlesJS("home-particles", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#000000" },  // Black dots
    "shape": { "type": "
