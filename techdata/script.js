// --- 1. Moving Particles (particles.js configuration) ---
// This initializes the moving particles on the element with id="particles-js"

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 90, // Number of particles
            "density": {
                "enable": true,
                "value_area": 900
            }
        },
        "color": {
            "value": "#ffffff" // Particle color: White
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.6,
            "random": true,
        },
        "size": {
            "value": 4,
            "random": true,
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff", // Line color: White
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3, // Smooth, slow movement
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Particles push away from the mouse
            },
            "onclick": {
                "enable": true,
                "mode": "push" 
            },
            "resize": true
        },
    },
    "retina_detect": true
});


// --- 2. Animations (Scroll-Reveal Fade-in) & Smooth Scrolling ---

document.addEventListener('DOMContentLoaded', () => {
    
    // Select all sections that need the fade-in effect
    const sections = document.querySelectorAll('.fade-in');

    // **Scroll-Reveal Logic using Intersection Observer**
    const observerOptions = {
        root: null, // viewport is the root
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS transition
                entry.target.classList.add('visible');
                // Stop observing once the animation has been triggered
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Attach the observer to all fade-in sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // **Smooth Scrolling for Anchor Links**
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
