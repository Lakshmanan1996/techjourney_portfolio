// ===================================================================
// DYNAMIC FEATURES: TYPING, PARTICLES, SCROLL, PROJECT LOADING, SCROLL REVEAL
// ===================================================================

// --- 0. Typing Text Effect ---
const typingTextElement = document.querySelector('.typing-text');
const textToType = "Cloud Engineer";
const TYPING_SPEED = 5;
const BACK_SPEED = 50;
const PAUSE_DELAY = 500;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textToType;
    if (!isDeleting) {
        if (charIndex < currentText.length) {
            typingTextElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, TYPING_SPEED);
        } else {
            isDeleting = true;
            setTimeout(typeEffect, PAUSE_DELAY);
        }
    } else {
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
if (typingTextElement) {
    typeEffect();
}


// --- 1. Load Particles.js background ---
particlesJS.load("particles-js", "./assets/js/app.js", () => {
    console.log("particles.js config loaded");
});


// --- 2. Scroll event for Active Link Highlight ---
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
    let current = "";
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
                
                // *** IMPORTANT: You might need to add ScrollReveal here if projects are loaded asynchronously ***
                ScrollReveal().reveal(card, { origin: 'top', delay: 150 });
            });
        }
    })
    .catch(error => console.error('Error loading projects:', error));


// --- 4. SCROLL REVEAL ANIMATION SETUP ---

// Initialize ScrollReveal with global settings
ScrollReveal({
    distance: '30px', 
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
});

// a. HOME SECTION (Slide In)
ScrollReveal().reveal('.home .content', { origin: 'left', delay: 200, interval: 50 });
ScrollReveal().reveal('.home .image-box', { origin: 'right', delay: 200, interval: 50 });

// b. TIMELINE SECTIONS (Slide from alternate sides)
// These targets must exist in the HTML on page load
ScrollReveal().reveal('.timeline-item:nth-child(odd)', { origin: 'left', delay: 100, interval: 100 });
ScrollReveal().reveal('.timeline-item:nth-child(even)', { origin: 'right', delay: 100, interval: 100 });

// c. SKILLS SECTION (Zoom/Scale effect)
ScrollReveal().reveal('.skill-card', { scale: 0.8, opacity: 0, delay: 100, interval: 100 });

// d. GENERAL SECTIONS (About, Titles, Contact)
ScrollReveal().reveal('.section-title, .subtitle, .about-container, .contact-content-wrapper', { origin: 'top', delay: 100 });

// Note on Projects: Projects are dynamically loaded, so the animation for '.project-card' 
// is now inside the fetch block (see block #3) or should be called again after loading.

// --- 5. jQuery Ready Function for Click Handlers ---
$(document).ready(function() {
    
    // Smooth scrolling for hash links (NAV LINKS & FOOTER LINKS)
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            // Scroll to target offset, adjusted for the fixed header
            scrollTop: $($(this).attr('href')).offset().top - 70, 
        }, 500, 'linear');
    });

    // Scroll-to-Top Button Toggle
    $(window).on('scroll', function() {
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
