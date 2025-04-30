// Typing effect for "Web Developer"
const editText = document.querySelector('.edit-text');
const words = ['Web Developer', 'Web Designer', 'Photographer', 'Freelancer'];
let idx = 0,
  charIdx = 0,
  adding = true;

function type() {
  const current = words[idx];
  if (adding) {
    editText.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) adding = false;
  } else {
    editText.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      adding = true;
      idx = (idx + 1) % words.length;
    }
  }
  setTimeout(type, adding ? 200 : 100);
}
type();

// Light/Dark Mode Toggle
const toggle = document.querySelector('.lightDark-mode');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.innerHTML = document.body.classList.contains('light')
    ? '<i class="ri-sun-line"></i>'
    : '<i class="ri-moon-line"></i>';
});
