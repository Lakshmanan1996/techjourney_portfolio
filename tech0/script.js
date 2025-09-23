// Typing Effect
const typedText = ["Infrastructure Engineer", "Automation Expert", "Networking Specialist"];
let i = 0, j = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if(i < typedText.length){
        if(!isDeleting && j <= typedText[i].length){
            currentText = typedText[i].substring(0, j);
            document.querySelector('.typing-text').textContent = currentText;
            j++;
            setTimeout(type, 150);
        } else if(isDeleting && j >= 0){
            currentText = typedText[i].substring(0, j);
            document.querySelector('.typing-text').textContent = currentText;
            j--;
            setTimeout(type, 100);
        } else if(j === typedText[i].length){
            isDeleting = true;
            setTimeout(type, 1000);
        } else if(j === 0){
            isDeleting = false;
            i++;
            if(i === typedText.length) i = 0;
            setTimeout(type, 500);
        }
    }
}
type();

// Particles.js config
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles loaded.');
});
