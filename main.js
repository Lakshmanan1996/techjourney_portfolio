// main.js
document.addEventListener('DOMContentLoaded', function() {
  // set year on footers
  const years = document.querySelectorAll('[id^="year"]');
  years.forEach(el => el.textContent = new Date().getFullYear());

  // mobile nav toggles (works for each page)
  const toggles = document.querySelectorAll('.menu-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.nextElementSibling;
      if (nav) nav.classList.toggle('show');
    });
  });

  // initialize VanillaTilt for elements with data-tilt if available
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
      max: 12,
      speed: 400,
      glare: true,
      "max-glare": 0.12,
      scale: 1.02
    });
  }

  // particles.js configuration (if particlesJS available)
  if (window.particlesJS) {
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#cfefff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.7 },
        "size": { "value": 3 },
        "line_linked": {
          "enable": true,
          "distance": 160,
          "color": "#9fe9ff",
          "opacity": 0.25,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {"enable": true, "mode": "grab"},
          "onclick": {"enable": true, "mode": "push"},
          "resize": true
        },
        "modes": {
          "grab": {"distance":200, "line_linked":{"opacity":0.4}},
          "bubble": {"distance":400, "size":4, "duration":2, "opacity":0.8},
          "push": {"particles_nb":4}
        }
      },
      "retina_detect": true
    });
  }

});
