// Particles.js background
particlesJS.load("particles-js", "particles.json", () => {
  console.log("particles.js config loaded");
});

// Smooth scroll + active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
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

// Load projects.json dynamically
// Load projects.json dynamically
fetch("projects.json")
  .then((res) => res.json())
  .then((projects) => {
    const projectSection = document.querySelector("#projects .project-grid");
    if (projectSection) {
        projects.forEach((proj) => {
          const card = document.createElement("div");
          card.classList.add("project-card");

          // Conditionally create the image HTML if image_path is present
          const imageHTML = proj.image_path 
            ? `<img src="${proj.image_path}" alt="Diagram for ${proj.title}" class="project-diagram-img">` 
            : ''; // If no path, show nothing

          // Display the data, including the diagram image
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

// ... (rest of the script.js code remains the same)

// Particles.js background configuration. Assumes you have a particles.json or app.js config.
// Since you uploaded app.js and particles.min.js, this call will run the background dots.
particlesJS.load("particles-js", "assets/js/particles.json", () => {
  console.log("particles.js config loaded");
});

// Smooth scroll + active link highlight (from your existing logic)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    // Adjust offset to trigger active link higher up the screen
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

// Load projects.json dynamically (modified to match your index.html structure)
// Load projects.json dynamically
fetch("projects.json")
  .then((res) => res.json())
  .then((projects) => {
    const projectSection = document.querySelector("#projects .project-grid");
    if (projectSection) {
        projects.forEach((proj) => {
          const card = document.createElement("div");
          card.classList.add("project-card");

          // Conditionally create the image HTML if image_path is present
          const imageHTML = proj.image_path 
            ? `<img src="${proj.image_path}" alt="Diagram for ${proj.title}" class="project-diagram-img">` 
            : ''; // If no path, show nothing

          // Display the data, including the diagram image
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

// ... (rest of the script.js code remains the same)

// Smooth scrolling for hash links
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    }, 500, 'linear')
});

// Simple scroll-top button logic
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scroll-top');
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

// Tawk.to Live Chat (from your uploaded files)
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// ===================================================================
// DYNAMIC FEATURES: PARTICLES, SCROLL, PROJECT LOADING
// ===================================================================

// 1. Particles.js background configuration
// Assumes you have a particles.json file in your assets/js folder
// The 'particles-js' element is loaded from index.html
particlesJS.load("particles-js", "assets/js/particles.json", () => {
  console.log("particles.js config loaded");
});

// 2. Smooth scroll + active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  // Check scroll position to determine which section is "active"
  sections.forEach((section) => {
    // Offset adjusted to trigger active link higher up the screen
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

// 3. Load projects.json dynamically
fetch("projects.json")
  .then((res) => res.json())
  .then((projects) => {
    const projectSection = document.querySelector("#projects .project-grid");
    if (projectSection) {
        projects.forEach((proj) => {
          const card = document.createElement("div");
          card.classList.add("project-card");

          // Display the data from projects.json
          card.innerHTML = `
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <p><strong>Tech:</strong> ${proj.tech.join(", ")}</p>
            <a href="${proj.link}" target="_blank" class="btn-secondary">View Repository <i class="fas fa-external-link-alt"></i></a>
          `;

          projectSection.appendChild(card);
        });
    }
  })
  .catch(error => console.error('Error loading projects:', error));


// 4. Scroll Reveal Animation Setup (THE NEW EFFECTS)
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false // Set to false so animations don't repeat on scroll
});

/* SCROLL HOME CONTENT */
// Animate the text and the floating image
srtop.reveal('.home .hero-image-content .content', { delay: 200 });
srtop.reveal('.home .floating-image', { delay: 400 });

/* SCROLL ABOUT */
srtop.reveal('#about .section-title', { delay: 200 });
srtop.reveal('#about .about-container p', { interval: 200 });

/* SCROLL SKILLS */
srtop.reveal('#skills .section-title', { delay: 200 });
// Interval reveals each skill card sequentially
srtop.reveal('.skill-grid .skill-card', { interval: 100 }); 

/* SCROLL EXPERIENCE & EDUCATION */
// Animate the main timeline container
srtop.reveal('.timeline', { delay: 400 });
// Animate each item in the timeline
srtop.reveal('.timeline-item', { interval: 200 }); 

/* SCROLL PROJECTS */
srtop.reveal('#projects .section-title', { delay: 200 });
// Animate each project card
srtop.reveal('.project-grid .project-card', { interval: 150 }); 

/* SCROLL CONTACT */
srtop.reveal('#contact .section-title', { delay: 200 });
srtop.reveal('.contact-container > div', { interval: 100 });
srtop.reveal('#contact-form', { delay: 300 });

/* SCROLL FOOTER */
srtop.reveal('footer', { delay: 200 });


// 5. Smooth scrolling for anchor links (if not using jQuery version)
// Note: You have jQuery for this in your HTML, but this is a backup/alternative.
// $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: $($(this).attr('href')).offset().top,
//     }, 500, 'linear')
// });

