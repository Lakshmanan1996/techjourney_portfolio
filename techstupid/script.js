// Typed.js
var typed = new Typed(".typed-text", {
    strings: ["Windows Administrator", "System Engineer", "DevOps Enthusiast"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Vanilla Tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400
});

// Scroll reveal example
ScrollReveal().reveal('.about, .skills, .education, .work, .experience, .contact', { 
    origin: 'bottom', 
    distance: '50px', 
    duration: 1000,
    reset: true
});
