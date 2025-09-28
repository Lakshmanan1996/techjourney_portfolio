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
fetch("projects.json")
  .then((res) => res.json())
  .then((projects) => {
    const projectSection = document.querySelector("#projects .project-grid");
    projects.forEach((proj) => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <p><strong>Tech:</strong> ${proj.tech.join(", ")}</p>
        <a href="${proj.link}" target="_blank">View Project</a>
      `;

      projectSection.appendChild(card);
    });
  });

