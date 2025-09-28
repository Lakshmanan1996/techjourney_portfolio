// --- Typing Text Effect ---
const typingTextElement = document.querySelector('.typing-text');
const textToType = "Cloud Engineer";

// Define Speeds (in milliseconds)
const TYPING_SPEED = 5;  // Your requested typing speed
const BACK_SPEED = 50;    // Your requested backspacing speed
const PAUSE_DELAY = 500;  // Pause before backspacing

let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textToType;

    if (!isDeleting) {
        // === TYPING PHASE ===
        if (charIndex < currentText.length) {
            // Add one character
            typingTextElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, TYPING_SPEED);
        } else {
            // Typing complete, switch to deleting phase after a pause
            isDeleting = true;
            setTimeout(typeEffect, PAUSE_DELAY);
        }
    } else {
        // === DELETING PHASE ===
        if (charIndex > 0) {
            // Remove one character
            typingTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, BACK_SPEED);
        } else {
            // Deleting complete, switch back to typing phase
            isDeleting = false;
            // You can add an array here and move to the next phrase if you had one.
            setTimeout(typeEffect, TYPING_SPEED); 
        }
    }
}

// Start the effect when the page loads
if (typingTextElement) {
    typeEffect();
}

// ===================================================================
// DYNAMIC FEATURES: PARTICLES, SCROLL, PROJECT LOADING, SCROLL REVEAL
// Requires jQuery, particles.js, and scrollreveal.js CDNs in index.html
// ===================================================================

// 1. Load Particles.js background
// **CRITICAL PATH FIX:** Use the path relative to the website's root for GitHub Pages
particlesJS.load("particles-js", "./assets/js/app.js", () => {
  console.log("particles.js config loaded");
});

// 2. Smooth scroll + active link highlight + scroll-top button
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

  // Scroll Top Button visibility
  const scrollTopBtn = document.getElementById('scroll-top');
  if (window.scrollY > 300) {
      scrollTopBtn.classList.add('active');
  } else {
      scrollTopBtn.classList.remove('active');
  }
});


// 3. Load projects.json dynamically (INCLUDING DIAGRAMS)
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


// 4. Scroll Reveal Animation Setup
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false // Set to true if you want the animations to repeat on scroll up/down
});

/* SCROLL HOME CONTENT */
srtop.reveal('.home .content', { delay: 200 });
srtop.reveal('.home .image-box', { delay: 400, origin: 'right' });

/* SCROLL SECTIONS */
srtop.reveal('.section-title', { delay: 200 });
srtop.reveal('.subtitle', { delay: 200 });

/* SCROLL ABOUT */
srtop.reveal('#about .about-container p', { interval: 200 });

/* SCROLL SKILLS */
srtop.reveal('.skill-grid .skill-card', { interval: 100 }); 

/* SCROLL EXPERIENCE & EDUCATION */
srtop.reveal('.timeline-item', { interval: 200 }); 

/* SCROLL PROJECTS */
srtop.reveal('.project-grid .project-card', { interval: 150 }); 

/* SCROLL CONTACT */
srtop.reveal('.contact-container > div', { interval: 100 });
srtop.reveal('#contact-form', { delay: 300 });

// 5. Smooth scrolling for hash links (using jQuery CDN from index.html)
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        // Scroll to target offset, adjusted for the fixed header
        scrollTop: $($(this).attr('href')).offset().top - 70, 
    }, 500, 'linear')
});
