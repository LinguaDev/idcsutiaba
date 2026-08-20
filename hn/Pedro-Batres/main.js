(function() {
  'use strict';

  // ===== MENÚ MÓVIL =====
  const toggle = document.getElementById('mobileToggle');
  const navbar = document.getElementById('navbar');
  if (toggle && navbar) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navbar.classList.toggle('active');
    });
    const links = navbar.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        if (navbar.classList.contains('active')) {
          navbar.classList.remove('active');
        }
      });
    });
    document.addEventListener('click', function(e) {
      if (navbar.classList.contains('active')) {
        const isInside = navbar.contains(e.target) || toggle.contains(e.target);
        if (!isInside) {
          navbar.classList.remove('active');
        }
      }
    });
  }

  // ===== NAVEGACIÓN POR ACORDEÓN =====
  const navLinks = document.querySelectorAll('.navbar a[data-target]');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('data-target');
      const targetDetail = document.getElementById(targetId);
      if (targetDetail) {
        e.preventDefault();
        targetDetail.open = true;
        targetDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== BOTÓN SCROLL TOP =====
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
      }
    });
    scrollBtn.style.opacity = '0';
    scrollBtn.style.visibility = 'hidden';
    scrollBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== LECTURA EN VOZ ALTA =====
  const speakBtns = document.querySelectorAll('.speak-btn');
  speakBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      const section = this.closest('.accordion-section');
      if (!section) return;
      const content = section.querySelector('.accordion-content');
      if (!content) return;
      const clone = content.cloneNode(true);
      const speakBtnClone = clone.querySelector('.speak-btn');
      if (speakBtnClone) speakBtnClone.remove();
      let text = clone.textContent || '';
      text = text.replace(/\s+/g, ' ').trim();
      if (!text) {
        alert('No hay texto para leer en esta sección.');
        return;
      }
      if (!window.speechSynthesis) {
        alert('Tu navegador no soporta la lectura en voz alta.');
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    });
  });

})();