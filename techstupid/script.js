// Typed.js effect for hero section
var typed = new Typed(".profile-summary", {
    strings: ["Windows Administrator", "System Engineer", "DevOps Enthusiast"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Animate skill bars on scroll
const skills = document.querySelectorAll('.skill-category ul li');
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills-section');
    const rect = skillsSection.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0){
        skills.forEach(skill => {
            skill.style.fontWeight = "bold";
            skill.style.color = "#007BFF";
        });
    }
});
