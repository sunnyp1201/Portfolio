// Typing Animation
// const typingText = ["I'm a Software Engineer.", "Welcome to my portfolio!"];
// let typingIndex = 0;
// let charIndex = 0;
// let typingElement = document.querySelector('h3');

// function typeText() {
//   if (charIndex < typingText[typingIndex].length) {
//       typingElement.textContent += typingText[typingIndex].charAt(charIndex);
//       charIndex++;
//       setTimeout(typeText, 100);
//   } else {
//       setTimeout(eraseText, 1000);
//   }
// }

// function eraseText() {
//   if (charIndex > 0) {
//       typingElement.textContent = typingText[typingIndex].substring(0, charIndex - 1);
//       charIndex--;
//       setTimeout(eraseText, 50);
//   } else {
//       typingIndex = (typingIndex + 1) % typingText.length;
//       setTimeout(typeText, 500);
//   }
// }

// typeText();

window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("scroll-progress").style.width = scrollPercentage + "%";
  });
  

$(document).ready(function(){
  $('.slider').slick({
      dots: true,          // Show navigation dots
      infinite: true,      // Infinite scrolling
      speed: 500,          // Transition speed
      easing : 'ease-in-out',
      slidesToShow: 1,     // Number of slides to show at a time
      slidesToScroll: 1,   // Number of slides to scroll at a time
      autoplay: true,      // Enable auto-play
      autoplaySpeed: 3000, // Auto-play speed (ms)
      draggable: true,    //  for the draggable
      arrows: true         // Show next/prev arrows
  });
});
$(document).ready(function(){
  $('.carousel-container').slick({
      dots: true,          // Show navigation dots
      infinite: true,      // Infinite scrolling
      speed: 500,          // Transition speed
      slidesToShow: 1,     // Number of slides to show at a time
      slidesToScroll: 1,   // Number of slides to scroll at a time
      autoplay: true,      // Enable auto-play
      autoplaySpeed: 3000, // Auto-play speed (ms)
      arrows: true,
      draggable:false         // Show next/prev arrows
  });
});







const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check saved theme from localStorage
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '🌞';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = '🌞';
        localStorage.setItem('theme', 'light');
        
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});


// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
  } else {
      backToTopButton.classList.remove('visible');
  }
});

// Form Validation
const form = document.querySelector('.newslatter form');
const emailInput = document.getElementById('mail');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  if (validateEmail(email)) {
      alert('Thank you for subscribing!');
      emailInput.value = '';
  } else {
      alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}



const roles = ["Software Engineer", "Web Developer", "Web Designer"];
let index = 0;
setInterval(() => {
    document.getElementById("role-text").innerText = roles[index];
    index = (index + 1) % roles.length;
}, 3000);


const text = "Sumit Kumar";
let i = 0;
let isDeleting = false; // Flag to check if deleting

function typeEffect() {
    const nameElement = document.getElementById("name");

    if (!isDeleting) {
        // Typing effect
        if (i < text.length) {
            nameElement.innerHTML = text.substring(0, i + 1) + "|"; // Add cursor
            i++;
            setTimeout(typeEffect, 150);
        } else {
            isDeleting = true; // Start deleting
            setTimeout(typeEffect, 1000); // Wait before deleting
        }
    } else {
        // Deleting effect
        if (i > 0) {
            nameElement.innerHTML = text.substring(0, i - 1) + "|"; // Add cursor
            i--;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = false; // Restart typing
            nameElement.innerHTML = "|"; // Keep cursor visible
            setTimeout(typeEffect, 500); // Wait before typing again
        }
    }
}

typeEffect();

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});





// constainer first

const submitButton = document.querySelector('#name-submit');
const containerfirst = document.querySelector('.container-first');
const containersecond = document.querySelector('.container-second');
const nameOutput = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');

document.addEventListener('DOMContentLoaded', function() {
    const storedName = localStorage.getItem('username');
    if (storedName) {
        nameOutput.textContent = storedName;
        containerfirst.style.display = 'none';
        containersecond.style.display = 'block';
    }
});

submitButton.addEventListener('click', function() {
    const name = nameInput.value.trim(); 
    if (name) {
        localStorage.setItem('username', name);
        nameOutput.textContent = name;
        containerfirst.style.display = 'none';
        containersecond.style.display = 'block';
    }
});

