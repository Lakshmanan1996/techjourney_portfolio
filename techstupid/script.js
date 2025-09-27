// Typed.js animation
var typed = new Typed(".typed-text", {
    strings: ["Windows Administrator", "System Engineer", "DevOps Enthusiast"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Vanilla Tilt for profile image
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400
});

// Animate Skills on scroll
const skills = document.querySelectorAll('.progress-bar');
function animateSkills() {
    skills.forEach(skill => {
        const width = skill.getAttribute('data-width');
        skill.style.width = width;
    });
}
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const rect = skillsSection.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0) {
        animateSkills();
    }
});
