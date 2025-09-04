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

// Portfolio Filter
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
});

// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function() {
  // Create scroll to top button
  const scrollTopBtn = document.createElement('a');
  scrollTopBtn.href = '#hero';
  scrollTopBtn.className = 'scroll-top';
  scrollTopBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';
  document.body.appendChild(scrollTopBtn);
  
  // Show/hide scroll to top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
});

// Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        // Add specific animation classes
        if (entry.target.classList.contains('fade-up')) {
          entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        } else if (entry.target.classList.contains('fade-left')) {
          entry.target.style.animation = 'fadeInLeft 0.6s ease forwards';
        } else if (entry.target.classList.contains('fade-right')) {
          entry.target.style.animation = 'fadeInRight 0.6s ease forwards';
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animateElements.forEach(el => observer.observe(el));
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Show loading state
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = '#00d084';
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 3000);
      }, 2000);
    });
  }
});

// Enhanced Mobile Menu (for future mobile hamburger menu)
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Loading Screen
window.addEventListener('load', function() {
  const loading = document.querySelector('.loading');
  if (loading) {
    setTimeout(() => {
      loading.classList.add('hidden');
      setTimeout(() => {
        loading.remove();
      }, 500);
    }, 1000);
  }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector('.header-hero');
  
  if (heroSection) {
    const rate = scrolled * -0.5;
    heroSection.style.transform = `translateY(${rate}px)`;
  }
});
