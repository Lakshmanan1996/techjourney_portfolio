/* Particles.js configuration */
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#007BFF" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#007BFF", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
    modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});

/* Animate Skill Bars on Scroll */
const skillFills = document.querySelectorAll('.skill-fill');

function animateSkills() {
  skillFills.forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0';
    setTimeout(() => fill.style.width = width, 200);
  });
}

window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  const sectionTop = skillsSection.offsetTop;
  const sectionHeight = skillsSection.offsetHeight;
  const scrollY = window.scrollY + window.innerHeight;
  if (scrollY > sectionTop + sectionHeight / 4) {
    animateSkills();
  }
});
