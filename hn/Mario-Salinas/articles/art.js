/**
 * art.js - Funcionalidad compartida para todos los artículos
 * Uso: <script src="art.js" defer></script>
 */

(function() {
  'use strict';

  // ===== MENÚ MÓVIL =====
  const mobileToggle = document.getElementById('mobileToggle');
  const navbar = document.getElementById('navbar');

  if (mobileToggle && navbar) {
    // Alternar clase 'active' al hacer clic en el botón
    mobileToggle.addEventListener('click', function(e) {
      e.stopPropagation(); // Evita que el clic se propague al documento
      navbar.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en cualquier enlace del navbar
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (navbar.classList.contains('active')) {
          navbar.classList.remove('active');
        }
      });
    });

    // Cerrar el menú si se hace clic fuera de él (en el documento)
    document.addEventListener('click', function(e) {
      if (navbar.classList.contains('active')) {
        const isClickInside = navbar.contains(e.target) || mobileToggle.contains(e.target);
        if (!isClickInside) {
          navbar.classList.remove('active');
        }
      }
    });
  }

  // ===== BOTÓN SCROLL TOP =====
  const scrollBtn = document.getElementById('scrollTopBtn');

  if (scrollBtn) {
    // Mostrar/ocultar el botón según la posición de scroll
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
      }
    });

    // Al hacer clic, volver al inicio con animación suave
    scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Inicializar estado (oculto al cargar) - ya está en CSS
    // La transición la maneja el CSS
  }

})();