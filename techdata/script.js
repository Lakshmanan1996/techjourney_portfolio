// ===================================================================
// DYNAMIC FEATURES: TYPING, PARTICLES, SCROLL, PROJECT LOADING, SCROLL REVEAL
// ===================================================================

// --- 0. Typing Text Effect ---
const typingTextElement = document.querySelector('.typing-text');
const textToType = "Cloud Engineer";

// Define Speeds (in milliseconds)
const TYPING_SPEED = 5;
const BACK_SPEED = 50;
const PAUSE_DELAY = 500;

let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textToType;

    if (!isDeleting) {
        // === TYPING PHASE ===
        if (charIndex < currentText.length) {
            typingTextElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, TYPING_SPEED);
        } else {
            isDeleting = true;
            setTimeout(typeEffect, PAUSE_DELAY);
        }
    } else {
        // === DELETING PHASE ===
        if (charIndex > 0) {
            typingTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, BACK_SPEED);
        } else {
            isDeleting = false;
            setTimeout(typeEffect, TYPING_SPEED);
        }
    }
}

// Start the effect when the page loads
if (typingTextElement) {
    typeEffect();
}


// --- 1. Load Particles.js background ---
// **CRITICAL PATH FIX:** Use the path relative to the website's root for GitHub Pages
particlesJS.load("particles-js", "./assets/js/app.js", () => {
    console.log("particles.js config loaded");
});


// --- 2. Smooth scroll + active link highlight + scroll-top button (Combined with jQuery) ---
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    // Determine which section is "active" based on scroll position
    sections.forEach((section) => {
        // Offset by 150px to account for the fixed header height
        const sectionTop = section.offsetTop - 150; 
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
    
    // Smooth scrolling for hash links (using jQuery CDN from index.html)
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            // Scroll to target offset, adjusted for the fixed header
            scrollTop: $($(this).attr('href')).offset().top - 70, 
        }, 500, 'linear')
    });
});


// --- 3. Load projects.json dynamically (INCLUDING DIAGRAMS) ---
fetch("projects.json")
    .then((res) => res.json())
    .then((projects) => {
        const projectSection = document.querySelector("#projects .project-grid");
        if (projectSection) {
            projects.forEach((proj) => {
                const card = document.createElement("div");
                card.classList.add("project-card");

                // Assumes 'image_path' field is present in projects.json
                const imageHTML = proj.image_path 
                    ? `<img src="${proj.image_path}" alt="Diagram for ${proj.title}" class="project-diagram-img">` 
                    : ''; 

                card.innerHTML = `
                    ${imageHTML}
                    <div class="project-info">
                        <h3>${proj.title}</h3>
                        <p>${proj.description}</p>
                        <p><strong>Tech:</strong> ${proj.tech.join(", ")}</p>
                        <a href="${proj.link}" target="_blank" class="btn-secondary">View Repository <i class="fas fa-external-link-alt"></i></a>
                    </div>
                `;

                projectSection.appendChild(card);
            });
        }
    })
    .catch(error => console.error('Error loading projects:', error));


// --- 4. SCROLL REVEAL ANIMATION SETUP (The preferred setup) ---

// Initialize ScrollReveal with global settings
ScrollReveal({
    // Global animation settings
    distance: '30px', // The distance the element moves from
    duration: 1000,   // Animation speed in milliseconds
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Smoothness
    reset: false      // Keep false so animations only happen once
});

// a. HOME SECTION (Slide In)
ScrollReveal().reveal('.home .content', { 
    origin: 'left',
    delay: 200,
    interval: 50 
});
ScrollReveal().reveal('.home .image-box', { 
    origin: 'right',
    delay: 200,
    interval: 50 
});


// b. TIMELINE SECTIONS (Slide from alternate sides)
ScrollReveal().reveal('.timeline-item:nth-child(odd)', { 
    origin: 'left', // Odd items come from the left
    delay: 100,
    interval: 100 
});
ScrollReveal().reveal('.timeline-item:nth-child(even)', { 
    origin: 'right', // Even items come from the right
    delay: 100,
    interval: 100 
});

// c. SKILLS SECTION (Zoom/Scale effect)
ScrollReveal().reveal('.skill-card', {
    scale: 0.8, // Start slightly smaller (Zoom In effect)
    opacity: 0,
    delay: 100,
    interval: 100 // Stagger the animation across the grid
});

// d. GENERAL SECTIONS (About, Titles, Projects)
// Simple fade-up for general text and titles/containers
ScrollReveal().reveal('.section-title, .subtitle, .about-container, .project-card, .contact-content-wrapper', {
    origin: 'top',
    delay: 100
});


// --- 5. Scroll-to-Top Button Toggle (Integrated from jQuery) ---
$(document).ready(function() {
    $(window).on('scroll', function() {
        // Toggle visibility of scroll-to-top button
        if ($(window).scrollTop() > 100) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }
    });

    // Smooth scroll to top when button is clicked
    $('#scroll-top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
