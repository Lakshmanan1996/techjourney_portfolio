// Simple moving particles background for the hero section

const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];
const colors = ['#39ff14', '#0ff', '#39d7ff', '#fff'];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.home').offsetHeight || window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(){
        this.radius = Math.random() * 2 + 1.5;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
    update(){
        this.x += this.vx;
        this.y += this.vy;

        // bounce on edges
        if(this.x < this.radius || this.x > canvas.width - this.radius) this.vx *= -1;
        if(this.y < this.radius || this.y > canvas.height - this.radius) this.vy *= -1;
        this.draw();
    }
}

function initParticles(){
    particlesArray = [];
    let numberOfParticles = Math.floor(canvas.width / 20);
    for(let i=0; i<numberOfParticles; i++){
        particlesArray.push(new Particle());
    }
}

function animateParticles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i=0; i<particlesArray.length; i++){
        particlesArray[i].update();
        // connect nearby particles
        for(let j=i+1; j<particlesArray.length; j++){
            let dist = Math.hypot(
                particlesArray[i].x - particlesArray[j].x,
                particlesArray[i].y - particlesArray[j].y
            );
            if(dist < 100){
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.strokeStyle = 'rgba(57,255,20,0.13)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}

resizeCanvas();
initParticles();
animateParticles();

// Re-init particles on resize
window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});