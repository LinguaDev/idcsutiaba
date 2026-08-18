// ============================================================
// cur.js – Control completo para la página del curso
// Incluye: menú hamburguesa, scroll top, navegación del curso
// ============================================================

(function() {
  'use strict';

  // ---- DOMContentLoaded para asegurar que los elementos existen ----
  document.addEventListener('DOMContentLoaded', function() {

    // ============================================================
    // 1. MENÚ HAMBURGUESA (móvil)
    // ============================================================
    const toggle = document.getElementById('mobileToggle');
    const navbar = document.getElementById('navbar');

    if (toggle && navbar) {
      // Abrir/cerrar al hacer clic en el botón
      toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navbar.classList.toggle('active');
      });

      // Cerrar al hacer clic en un enlace del menú
      const navLinks = navbar.querySelectorAll('a');
      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
          }
        });
      });

      // Cerrar al hacer clic fuera del menú
      document.addEventListener('click', function(e) {
        if (navbar.classList.contains('active')) {
          const isInside = navbar.contains(e.target) || toggle.contains(e.target);
          if (!isInside) {
            navbar.classList.remove('active');
          }
        }
      });
    }

    // ============================================================
    // 2. BOTÓN SCROLL TOP
    // ============================================================
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
      // Mostrar/ocultar según scroll
      window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
          scrollBtn.classList.add('visible');
        } else {
          scrollBtn.classList.remove('visible');
        }
      });

      // Scroll suave al hacer clic
      scrollBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // ============================================================
    // 3. NAVEGACIÓN DEL CURSO (selector, botones, mostrar clases)
    // ============================================================
    const classCards = document.querySelectorAll('.class-card');
    const classSelect = document.getElementById('classJump');
    const prevBtn = document.getElementById('prevClass');
    const nextBtn = document.getElementById('nextClass');
    const counter = document.getElementById('classCounter');

    // Si falta algún elemento de navegación, salimos sin error
    if (!classCards.length || !classSelect || !prevBtn || !nextBtn || !counter) {
      return;
    }

    // Ordenar tarjetas por data-order (numérico)
    const sortedCards = Array.from(classCards).sort((a, b) => {
      const orderA = parseInt(a.getAttribute('data-order'), 10) || 0;
      const orderB = parseInt(b.getAttribute('data-order'), 10) || 0;
      return orderA - orderB;
    });

    let currentIndex = 0;

    // Función para mostrar una clase por índice
    function showClass(index) {
      if (index < 0 || index >= sortedCards.length) return;

      // Ocultar todas
      sortedCards.forEach(card => {
        card.style.display = 'none';
      });

      // Mostrar la seleccionada
      const target = sortedCards[index];
      if (target) {
        target.style.display = 'block';
        // Sincronizar el selector
        const classId = target.getAttribute('data-class');
        if (classId) {
          classSelect.value = classId;
        }
      }

      // Actualizar contador
      counter.textContent = `Clase ${index + 1} de ${sortedCards.length}`;

      // Habilitar/deshabilitar botones
      prevBtn.disabled = (index === 0);
      nextBtn.disabled = (index === sortedCards.length - 1);

      currentIndex = index;
    }

    // Saltar a una clase específica por su data-class
    function jumpToClass(value) {
      for (let i = 0; i < sortedCards.length; i++) {
        const card = sortedCards[i];
        if (card.getAttribute('data-class') === value) {
          showClass(i);
          return;
        }
      }
      // Si no se encuentra, mostrar la primera
      showClass(0);
    }

    // Evento: cambio en el selector
    classSelect.addEventListener('change', function(e) {
      jumpToClass(e.target.value);
    });

    // Evento: botón Siguiente
    nextBtn.addEventListener('click', function() {
      if (currentIndex < sortedCards.length - 1) {
        showClass(currentIndex + 1);
      }
    });

    // Evento: botón Anterior
    prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        showClass(currentIndex - 1);
      }
    });

    // Inicializar: mostrar la primera clase (data-order=1 o la primera)
    let firstIndex = 0;
    for (let i = 0; i < sortedCards.length; i++) {
      const order = parseInt(sortedCards[i].getAttribute('data-order'), 10);
      if (order === 1) {
        firstIndex = i;
        break;
      }
    }
    showClass(firstIndex);

    // ============================================================
    // 4. (OPCIONAL) LECTURA EN VOZ ALTA – si hay botones .speak-btn
    // ============================================================
    const speakBtns = document.querySelectorAll('.speak-btn');
    if (speakBtns.length) {
      speakBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          // Detener cualquier lectura en curso
          if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
          }

          // Buscar el contenido de la clase (o sección) más cercana
          const card = this.closest('.class-card') || this.closest('.article-container');
          if (!card) return;

          // Clonar para eliminar el botón y otros elementos no deseados
          const clone = card.cloneNode(true);
          const btnClone = clone.querySelector('.speak-btn');
          if (btnClone) btnClone.remove();

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
    }

  }); // fin DOMContentLoaded
})();