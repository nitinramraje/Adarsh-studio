// Mobile nav toggle
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox (simple): open image in new tab – lightweight replacement
document.querySelectorAll('.glightbox').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    window.open(a.getAttribute('href'), '_blank');
  });
});

// Contact form -> WhatsApp prefill
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const phone = data.get('phone');
    const service = data.get('service');
    const date = data.get('date');
    const message = data.get('message') || '';
    const text = encodeURIComponent(
      `Enquiry from website:%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Service: ${service}%0A` +
      (date ? `Date: ${date}%0A` : '') +
      (message ? `Message: ${message}` : '')
    );
    window.open(`https://wa.me/919834821317?text=${text}`, '_blank');
  });
}
