// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxEmoji = document.getElementById('lightboxEmoji');
const lightboxName = document.getElementById('lightboxName');
const lightboxCat = document.getElementById('lightboxCat');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxEmoji.textContent = item.querySelector('.gallery-emoji').textContent;
    lightboxName.textContent = item.dataset.name;
    lightboxCat.textContent = item.dataset.cat;
    lightbox.classList.add('open');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
