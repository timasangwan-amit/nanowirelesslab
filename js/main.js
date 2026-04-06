// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.nav-menu-btn');
  const links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
