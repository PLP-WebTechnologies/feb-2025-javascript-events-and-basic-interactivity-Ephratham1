// Click and double click
const btn = document.getElementById('clickBtn');
const secret = document.getElementById('secret');
let clickTimeout;

btn.addEventListener('click', () => {
  btn.textContent = "Clicked!";
  btn.style.backgroundColor = "#28a745";
  clearTimeout(clickTimeout);
  clickTimeout = setTimeout(() => {
    btn.textContent = "Click Me";
    btn.style.backgroundColor = "#007bff";
  }, 1000);
});

btn.addEventListener('dblclick', () => {
  secret.style.display = 'block';
});

// Hover
const hoverText = document.getElementById('hoverText');
hoverText.addEventListener('mouseover', () => {
  hoverText.style.color = "blue";
});
hoverText.addEventListener('mouseout', () => {
  hoverText.style.color = "";
});

// Keypress
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keydown', (e) => {
  console.log("You pressed:", e.key);
});

// Gallery
const images = document.querySelectorAll('.gallery img');
let index = 0;

const showImage = (i) => {
  images.forEach(img => img.classList.remove('active'));
  images[i].classList.add('active');
}

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage(index);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});

// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    const i = tab.dataset.index;
    contents[i].classList.add('active');
  });
});

// Form Validation
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passFeedback = document.getElementById('passFeedback');

emailInput.addEventListener('input', () => {
  const email = emailInput.value;
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    emailFeedback.textContent = "Invalid email format.";
    emailFeedback.classList.remove('valid');
  } else {
    emailFeedback.textContent = "✅ Looks good!";
    emailFeedback.classList.add('valid');
  }
});

passInput.addEventListener('input', () => {
  const pass = passInput.value;
  if (pass.length < 8) {
    passFeedback.textContent = "Password must be at least 8 characters.";
    passFeedback.classList.remove('valid');
  } else {
    passFeedback.textContent = "✅ Strong enough.";
    passFeedback.classList.add('valid');
  }
});

form.addEventListener('submit', (e) => {
  if (!emailInput.value || !passInput.value) {
    alert("Please fill out all fields.");
    e.preventDefault();
  }
});
