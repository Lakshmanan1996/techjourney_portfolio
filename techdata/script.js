// Function to load and filter projects using Isotope
$(document).ready(function () {
    
    // --- Mobile navigation toggle ---
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // --- Window Scroll/Load Logic ---
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Scroll-to-top button visibility
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
    
    // --- Smooth Scrolling ---
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear')
    });

    // --- Home Section Typing Effect ---
    var typed = new Typed('.typing-text', {
        strings: ["Infrastructure Management Engineer", "SCCM & Cloud Specialist", "Automation Enthusiast"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });
    
    // --- Particles.js Initialization (Deep Blue Theme) ---
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00b4d8" 
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#002d59"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00509e", 
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
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
                    "distance": 180,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // --- Dynamic Project Loading and Isotope Filtering ---

    function getProjects() {
        return fetch("projects.json")
            .then(response => response.json())
            .then(data => {
                return data
            });
    }

    function showProjects(projects) {
        let projectsContainer = document.querySelector(".work .box-container");
        let projectsHTML = "";

        projects.forEach(project => {
            const liveLink = project.links.live && project.links.live !== "#" ? `<a href="${project.links.live}" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : '';
            const codeLink = project.links.code && project.links.code !== "#" ? `<a href="${project.links.code}" target="_blank"><i class="fab fa-github"></i></a>` : '';

            projectsHTML += `
                <div class="grid-item ${project.category}">
                    <div class="box" data-tilt>
                        <img src="https://via.placeholder.com/300x300/00509e/ffffff?text=${project.name.replace(/\s/g, '+')}" alt="${project.name}">
                        <div class="info">
                            <h3>${project.name}</h3>
                            <p>${project.desc}</p>
                            <div class="share">
                                ${liveLink}
                                ${codeLink}
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        projectsContainer.innerHTML = projectsHTML;

        // Initialize Isotope after projects are loaded
        $('.work .box-container').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
        });

        // Filter items on button click
        $('.button-group').on('click', 'button', function () {
            $('.button-group').find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
            var filterValue = $(this).attr('data-filter');
            $('.work .box-container').isotope({ filter: filterValue });
        });

         // Initialize Vanilla Tilt on project boxes after they are loaded
         VanillaTilt.init(document.querySelectorAll(".work .box-container .grid-item .box"), {
            max: 25,
            speed: 400
        });
    }

    // Execute the project fetching and displaying process
    getProjects().then(data => {
        showProjects(data);
    }).catch(error => {
        console.error("Error loading projects:", error);
        document.querySelector(".work .box-container").innerHTML = "<h3 style='color: var(--secondary-color); text-align: center;'>Could not load projects. Ensure projects.json is present.</h3>";
    });
    
    // --- Developer Mode Disable (from your original script) ---
    document.onkeydown = function (e) {
        if (e.keyCode == 123) { return false; }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; }
    }
});
