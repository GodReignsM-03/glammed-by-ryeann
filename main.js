/* ============================================
   MAIN.JS — Glammed by Ryeann
   Navbar scroll effect, mobile menu, fade-ins
============================================ */

document.addEventListener('DOMContentLoaded', function () {

  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  const links     = document.querySelectorAll('.nav-link, .nav-cta');

  // ---- Navbar shadow on scroll ----
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // ---- Mobile menu toggle ----
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    navToggle.innerHTML = navLinks.classList.contains('open') ? '&#10005;' : '&#9776;';
  });

  // ---- Close mobile menu when a link is tapped ----
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.innerHTML = '&#9776;';
    });
  });

  // ---- Gentle fade-in as sections enter the screen ----
  const sections = document.querySelectorAll('.about, .services, .gallery, .booking, .contact');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(function (section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(24px)';
    section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(section);
  });

});
