// Function to change the background color dynamically
function changeDynamicColor() {
    // 1. Generate a random hue (0 to 360)
    const hue = Math.floor(Math.random() * 360);
    
    // 2. Create the color using HSL (Hue, Saturation, Lightness).
    // Saturation is kept high (80%) for vibrancy.
    // Lightness is kept low (25%) to ensure the background remains dark,
    // so the white text (--text-light) stays readable.
    const dynamicColor = `hsl(${hue}, 80%, 25%)`;

    // 3. Apply the new color to the root CSS variable (--dark-bg)
    // This instantly updates the navbar, skills section, home background, and particles background.
    document.documentElement.style.setProperty('--dark-bg', dynamicColor);
}

// Initialize dynamic color: set the first color immediately
changeDynamicColor();

// Set interval to change the color every 10 seconds (10000ms)
setInterval(changeDynamicColor, 10000); 


// Function to initialize particles.js for the background
document.addEventListener('DOMContentLoaded', function() {
    // IMPORTANT: particlesJS needs to be defined in your HTML,
    // ensure you have this line in your <head> section:
    // <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" 
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                // The particle lines use the --primary-color (Cyan)
                "color": "#00bcd4", 
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
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
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});
