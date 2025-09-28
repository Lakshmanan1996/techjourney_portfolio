// --- 1. Moving Particles (particles.js configuration) ---

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 90, // Slightly more particles for density
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
            "stroke": {
                "width": 0,
            },
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
            "speed": 3, // Slower, smoother movement
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
                "mode": "repulse" // Push particles away on hover
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
    const sections = document.querySelectorAll('.fade-in');

    // **Scroll-Reveal Logic**
    const observerOptions = {
        root: null, // viewport
        threshold: 0.2, // trigger when 20% of the element is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS transition
                entry.target.classList.add('visible');
                // Stop observing once it's visible
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Apply the observer to all fade-in sections
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
