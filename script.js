// Typing effect
const words = ["Full Stack Developer", "React & Laravel Specialist", "Problem Solver"];
let i = 0, timer;

function typingEffect() {
  let word = words[i].split("");
  let loopTyping = function() {
    if (word.length > 0) {
      document.getElementById('typed').innerHTML += word.shift();
    } else {
      deletingEffect();
      return;
    }
    timer = setTimeout(loopTyping, 150);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  let loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById('typed').innerHTML = word.join("");
    } else {
      i = (i+1)%words.length;
      typingEffect();
      return;
    }
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

typingEffect();

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", function() {
  for(let r of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = r.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      r.classList.add("active");
    }
  }
});
