// ===== Mobile Navigation Toggle =====
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileToggle?.classList.remove('active');
    navLinks?.classList.remove('active');
  });
});

// ===== Header Scroll Effect =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
    header.style.background = 'rgba(10, 10, 10, 0.8)';
  }
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Fade In Animation on Scroll =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Datos del formulario:', data);
    
    // Show success message
    const successMessage = document.querySelector('.success-message');
    if (successMessage) {
      successMessage.classList.add('show');
      
      // Reset form
      contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 5000);
    }
  });
}

// ===== Active Navigation Link =====
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

setActiveNavLink();

// ===== Counter Animation for Stats =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-item h3');
  
  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    const suffix = counter.textContent.replace(/[0-9]/g, '');
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current) + suffix;
        setTimeout(updateCounter, stepTime);
      } else {
        counter.textContent = target + suffix;
      }
    };
    
    // Only animate when in view
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    statsObserver.observe(counter);
  });
}

// Initialize counter animation if stats section exists
if (document.querySelector('.stats')) {
  animateCounters();
}

// ===== Typing Effect for Hero (optional enhancement) =====
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', () => {
  const heroGraphic = document.querySelector('.hero-graphic');
  if (heroGraphic) {
    const scrolled = window.pageYOffset;
    heroGraphic.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// ===== Form Validation =====
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\d\s\-\+\(\)]{7,20}$/;
  return re.test(phone);
}

// Add validation feedback
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value.trim() === '' && this.hasAttribute('required')) {
      this.style.borderColor = '#ef4444';
    } else if (this.type === 'email' && !validateEmail(this.value)) {
      this.style.borderColor = '#ef4444';
    } else if (this.type === 'tel' && this.value && !validatePhone(this.value)) {
      this.style.borderColor = '#ef4444';
    } else {
      this.style.borderColor = '';
    }
  });
  
  input.addEventListener('focus', function() {
    this.style.borderColor = 'var(--color-primary)';
  });
});

// ===== Preloader (optional) =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Add fade-in class to elements that should animate
  document.querySelectorAll('.service-card, .team-card, .testimonial-card').forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 0.1}s`;
  });
});
