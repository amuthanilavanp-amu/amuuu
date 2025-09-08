// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Reveal on scroll for project cards
const revealables = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.9;
  revealables.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('revealed');
  });
};
window.addEventListener('scroll', revealOnScroll, { passive: true });
window.addEventListener('load', revealOnScroll);

// Back-to-top year + smooth anchor fix
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (demo only — replace with your backend or Formspree)
const form = document.querySelector('.contact-form');
const statusEl = document.querySelector('.form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending…';
    // Simulate async send; replace with real fetch()
    await new Promise(r => setTimeout(r, 800));
    statusEl.textContent = 'Thanks! I will reply soon.';
    form.reset();
  });
}
