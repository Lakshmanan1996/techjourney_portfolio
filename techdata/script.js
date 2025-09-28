// --- 1. Moving Particles (particles.js configuration) ---

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // Number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // Particle color: White
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#ffffff"
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff", // Line color: White
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6, // Speed of movement
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" // Particles follow mouse on hover
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Click to create new particles
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
        }
    },
    "retina_detect": true
});


// --- 2. Animations (Scroll-Reveal Fade-in) ---

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% of the element is visible
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

    // --- 3. Smooth Scrolling for Navigation (Fallback/Enhancement) ---
    // If you use 'scroll-behavior: smooth' in CSS, this is often unnecessary,
    // but it provides a reliable, cross-browser smooth scroll for anchor links.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
