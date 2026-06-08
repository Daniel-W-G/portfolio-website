const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const yearEl = document.getElementById('year');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('active');
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
