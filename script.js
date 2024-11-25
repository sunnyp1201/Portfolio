// Typing Animation
const typingText = ["I'm a Software Engineer.", "Welcome to my portfolio!"];
let typingIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector('h3');

function typeText() {
  if (charIndex < typingText[typingIndex].length) {
      typingElement.textContent += typingText[typingIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
  } else {
      setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (charIndex > 0) {
      typingElement.textContent = typingText[typingIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 50);
  } else {
      typingIndex = (typingIndex + 1) % typingText.length;
      setTimeout(typeText, 500);
  }
}

typeText();

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


