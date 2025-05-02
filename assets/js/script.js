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

// Skill Progress Bar
document.addEventListener('DOMContentLoaded', function () {
  const progressBars = document.querySelectorAll('.progress-fill');
  const skillSection = document.getElementById('skill');

  const animateProgress = () => {
    progressBars.forEach((bar) => {
      const targetWidth = bar.parentElement.getAttribute('data-percent');
      bar.style.width = targetWidth;
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgress();
          observer.unobserve(skillSection);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  observer.observe(skillSection);
});
