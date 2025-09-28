// ===================================================================
// DYNAMIC FEATURES: PARTICLES, SCROLL, PROJECT LOADING
// ===================================================================

// 1. Load Particles.js background
// Assumes you have a particles.json or app.js config
particlesJS.load("particles-js", "assets/js/app.js", () => {
  console.log("particles.js config loaded");
});

// 2. Smooth scroll + active link highlight
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  // Check scroll position to determine which section is "active"
  sections.forEach((section) => {
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

          // Conditionally create the image HTML for diagrammatic representation
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


// 4. Scroll Reveal Animation Setup (The requested effects)
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false // Set to false so animations don't repeat on scroll
});

/* SCROLL HOME CONTENT */
// Animate the text and the floating image
srtop.reveal('.home .content', { delay: 200 });
srtop.reveal('.home .image-box', { delay: 400, origin: 'right' });

/* SCROLL SECTIONS */
srtop.reveal('.section-title', { delay: 200 });

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

// 5. Smooth scrolling for hash links (using jQuery CDN)
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 70, // -70 for fixed header offset
    }, 500, 'linear')
});
