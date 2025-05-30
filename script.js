// Smooth scroll for nav links
// Handles all nav links, including new sections like Leadership

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight nav link on scroll for all sections
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Adjust for sticky header
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}); 