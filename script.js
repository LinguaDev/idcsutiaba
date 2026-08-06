document.addEventListener('DOMContentLoaded', function() {

  // ==================== ACORDEÓN ====================
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      this.classList.toggle('active');
      if (content.classList.contains('show')) {
        content.classList.remove('show');
      } else {
        content.classList.add('show');
      }
    });
  });

  function openAccordion(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
      const header = target.querySelector('.accordion-header');
      const content = target.querySelector('.accordion-content');
      if (header && content && !content.classList.contains('show')) {
        header.classList.add('active');
        content.classList.add('show');
      }
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      if (targetId) openAccordion(targetId);
      const navbar = document.getElementById('navbar');
      if (navbar && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        const mobileToggle = document.getElementById('mobileToggle');
        if (mobileToggle) {
          const icon = mobileToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
        document.body.style.overflow = '';
      }
    });
  });

  // ==================== MENÚ HAMBURGUESA Y SUBMENÚS MÓVIL ====================
  const mobileToggle = document.getElementById('mobileToggle');
  const navbar = document.getElementById('navbar');
  const body = document.body;

  if (mobileToggle && navbar) {
    mobileToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navbar.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        body.style.overflow = 'hidden';
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        body.style.overflow = '';
        document.querySelectorAll('.menu-item-has-children.active-submenu').forEach(item => {
          item.classList.remove('active-submenu');
        });
      }
    });
  }

  function handleSubmenuClick(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parentLi = this.closest('.menu-item-has-children');
      if (parentLi) {
        document.querySelectorAll('.menu-item-has-children.active-submenu').forEach(item => {
          if (item !== parentLi) {
            item.classList.remove('active-submenu');
          }
        });
        parentLi.classList.toggle('active-submenu');
      }
    }
  }

  function setupMobileSubmenus() {
    const menuParents = document.querySelectorAll('.menu-item-has-children');
    menuParents.forEach(parent => {
      const link = parent.querySelector('a.nav-link');
      if (link) {
        link.removeEventListener('click', handleSubmenuClick);
        link.addEventListener('click', handleSubmenuClick);
      }
    });
  }

  setupMobileSubmenus();

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      document.querySelectorAll('.menu-item-has-children.active-submenu').forEach(item => {
        item.classList.remove('active-submenu');
      });
    } else {
      setupMobileSubmenus();
    }
  });

  document.addEventListener('click', function(e) {
    if (navbar && navbar.classList.contains('active') &&
        !navbar.contains(e.target) &&
        !mobileToggle.contains(e.target)) {
      navbar.classList.remove('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
      body.style.overflow = '';
      document.querySelectorAll('.menu-item-has-children.active-submenu').forEach(item => {
        item.classList.remove('active-submenu');
      });
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#') && href !== '#') {
        if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
          navbar.classList.remove('active');
          if (mobileToggle) {
            const icon = mobileToggle.querySelector('i');
            if (icon) {
              icon.classList.remove('fa-times');
              icon.classList.add('fa-bars');
            }
          }
          body.style.overflow = '';
          document.querySelectorAll('.menu-item-has-children.active-submenu').forEach(item => {
            item.classList.remove('active-submenu');
          });
        }
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (href === 'javascript:void(0)') {
        // No hacer nada
      }
    });
  });

  // ==================== VERSÍCULO ALEATORIO ====================
  const verses = [
    "Juan 3:16 — Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
    "Hechos 2:38 — Arrepentíos y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados, y recibiréis el don del Espíritu Santo.",
    "Romanos 1:16 — No me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree.",
    "Mateo 28:19 — Id y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, del Hijo y del Espíritu Santo.",
    "Efesios 4:5 — Un Señor, una fe, un bautismo.",
    "Romanos 10:9 — Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo.",
    "Hechos 22:16 — Ahora, ¿por qué te detienes? Levántate y bautízate, y lava tus pecados, invocando su nombre."
  ];
  const verseElement = document.getElementById('verseOfDay');
  if (verseElement) {
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    verseElement.innerHTML = `<i class="fas fa-bible"></i> ${randomVerse}`;
  }

  // ==================== ORACIÓN DE FE ====================
  const prayerBtn = document.getElementById('prayerBtn');
  const prayerMsg = document.getElementById('prayerMessage');
  if (prayerBtn && prayerMsg) {
    prayerBtn.addEventListener('click', () => {
      prayerMsg.classList.toggle('hidden');
    });
  }

  // ==================== VERSÍCULOS DESPLEGABLES EN LOS PASOS ====================
  document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', (e) => {
      e.stopPropagation();
      const verseDiv = step.querySelector('.step-verse');
      if (verseDiv) {
        verseDiv.classList.toggle('hidden');
      }
    });
  });

  // ==================== FORMULARIO DE CONTACTO (WhatsApp) ====================
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const whatsappNumber = "50557514440";

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const pais = document.getElementById('pais').value;
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !email || !pais || !mensaje) {
        formFeedback.textContent = "⚠️ Por favor completa todos los campos.";
        formFeedback.style.color = "#dc3545";
        return;
      }

      formFeedback.innerHTML = `<i class="fas fa-spinner fa-pulse"></i> Procesando...`;
      formFeedback.style.color = "#f4b642";

      const textoWhatsApp = `*Nuevo mensaje del sitio web IDCLATAM*%0A%0A` +
        `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*País:* ${encodeURIComponent(pais)}%0A` +
        `*Mensaje:* ${encodeURIComponent(mensaje)}%0A%0A` +
        `Responder a: ${encodeURIComponent(email)}`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${textoWhatsApp}`;
      window.open(whatsappUrl, '_blank');

      formFeedback.innerHTML = `<i class="fas fa-check-circle"></i> ¡Gracias ${nombre}! Se ha abierto WhatsApp para enviar tu mensaje.`;
      formFeedback.style.color = "#28a745";
      contactForm.reset();
      
      setTimeout(() => {
        if (formFeedback) formFeedback.innerHTML = "";
      }, 6000);
    });
  }

  // ==================== DIRECTORIO DE IGLESIAS ====================
  const churchesCatalog = [
    {
      name: "Iglesia de Cristo en Sutiaba, Nicaragua",
      location: "León, Nicaragua",
      description: "Congregación local con énfasis en evangelismo y discipulado.",
      url: "https://idclatam.org/sutiaba"
    },
    {
      name: "Iglesia de Cristo en Vedado, La Habana",
      location: "Vedado, La Habana, Cuba",
      description: "Congregación en el corazón de Vedado con énfasis en evangelismo, discipulado y servicio comunitario en Cuba.",
      url: "idc/Vedado/La-Habana-Cuba"
    },
    {
      name: "Iglesia de Cristo en Pomacanchi, Cusco",
      location: "Pomacanchi, Cusco, Perú",
      description: "Congregación en el sur del Perú, con énfasis en evangelismo, discipulado y servicio comunitario. Transmite contenido en redes y tiene un sitio web propio.",
      url: "idc/peru/cusco/pomacanchi"
    },
    {
      name: "Iglesia de Cristo en Colonia Israel Sur, Tegucigalpa",
      location: "Tegucigalpa, Honduras",
      description: "Congregación en Tegucigalpa con énfasis en evangelismo, discipulado y servicio comunitario.",
      url: "idc/Honduras/Tegucigalpa/Colonia-Israel-Sur"
    }
  ];

  // ==================== DIRECTORIO DE HERMANOS ====================
  const brothersCatalog = [
    {
      name: "Juan Pineda",
      location: "Nicaragua",
      description: "Predicador y maestro de la Palabra. Conferencias y estudios bíblicos.",
      url: "Juan-Pineda"
    },
     {
      name: "Mario Salinas",
      location: "Nicaragua",
      description: "Predicador y maestro de la Palabra. Conferencias y estudios bíblicos.",
      url: "hn/Mario-Salinas/main"
    }
  ];

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderResults(containerId, dataArray, filterText, type) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const lowerFilter = filterText.toLowerCase().trim();
    let filtered = dataArray;
    
    if (lowerFilter !== "") {
      filtered = dataArray.filter(item =>
        item.name.toLowerCase().includes(lowerFilter) ||
        item.location.toLowerCase().includes(lowerFilter) ||
        (item.description && item.description.toLowerCase().includes(lowerFilter))
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div class="no-results"><i class="fas fa-search"></i> No se encontraron ${type === 'church' ? 'iglesias' : 'hermanos'} con ese criterio.</div>`;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="result-item">
        <div class="result-info">
          <h4>${escapeHtml(item.name)}</h4>
          <p><i class="fas fa-map-marker-alt"></i> ${escapeHtml(item.location)}</p>
          <p class="result-desc">${escapeHtml(item.description)}</p>
        </div>
        <a href="${item.url}" class="result-link">Ver página <i class="fas fa-arrow-right"></i></a>
      </div>
    `).join('');
  }

  const churchSearch = document.getElementById('churchSearch');
  const churchResults = document.getElementById('churchResults');
  if (churchSearch && churchResults) {
    churchResults.innerHTML = '<div class="info-message">Escribe el nombre de una ciudad, país o iglesia para encontrar su página.</div>';
    churchSearch.addEventListener('input', (e) => {
      renderResults('churchResults', churchesCatalog, e.target.value, 'church');
    });
  }

  const brotherSearch = document.getElementById('brotherSearch');
  const brotherResults = document.getElementById('brotherResults');
  if (brotherSearch && brotherResults) {
    brotherResults.innerHTML = '<div class="info-message">Escribe el nombre de un hermano para encontrar su perfil.</div>';
    brotherSearch.addEventListener('input', (e) => {
      renderResults('brotherResults', brothersCatalog, e.target.value, 'brother');
    });
  }

  // ==================== BOTÓN SUBIR (SCROLL TOP) ====================
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    scrollBtn.style.display = "none";
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        scrollBtn.style.display = "flex";
        scrollBtn.style.opacity = "1";
      } else {
        scrollBtn.style.display = "none";
      }
    });
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==================== NAVEGACIÓN SUAVE PARA ENLACES INTERNOS ====================
  document.querySelectorAll('a[href^="#"]:not(.nav-link[href="javascript:void(0)"])').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ==================== POPUPS POR TIEMPO ====================
  const popupOverlay = document.getElementById('popupOverlay');
  const popupContent = document.getElementById('popupContent');
  const popupClose = document.getElementById('popupClose');

  let versePopupShown = false;
  let versePopupClosed = false;
  let donationPopupShown = false;
  let donationTimer = null;

  function showPopup(htmlContent) {
    if (!popupOverlay) return;
    popupContent.innerHTML = htmlContent;
    popupOverlay.classList.remove('hidden');
  }

  function closePopup() {
    if (!popupOverlay) return;
    popupOverlay.classList.add('hidden');
    if (versePopupShown && !versePopupClosed && !donationPopupShown) {
      versePopupClosed = true;
      donationTimer = setTimeout(() => {
        if (!donationPopupShown) {
          showDonationPopup();
        }
      }, 300000); // 5 minutos
    }
  }

  function showVersePopup() {
    if (versePopupShown || !popupOverlay) return;
    versePopupShown = true;

    // Usamos la misma lista de versículos que ya existe
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];

    const html = `
      <div class="popup-content">
        <i class="fas fa-bible"></i>
        <h3>Versículo del día</h3>
        <div class="verse-text">“${randomVerse}”</div>
        <p>Comparte este mensaje de esperanza con tus seres queridos.</p>
        <div class="social-buttons">
          <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="social-fb"><i class="fab fa-facebook-f"></i> Facebook</a>
          <a href="https://wa.me/?text=${encodeURIComponent('Mira este versículo: ' + randomVerse + ' - ' + window.location.href)}" target="_blank" class="social-wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>
          <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(randomVerse + ' ' + window.location.href)}" target="_blank" class="social-tw"><i class="fab fa-twitter"></i> X</a>
          <button onclick="navigator.clipboard.writeText('${randomVerse} - ${window.location.href}')" class="social-copy" style="background:#555; color:white; border:none; padding:0.5rem 1rem; border-radius:50px; cursor:pointer;"><i class="fas fa-copy"></i> Copiar</button>
        </div>
        <button class="btn-share" onclick="closePopup()">Cerrar</button>
      </div>
    `;
    showPopup(html);

    popupClose.onclick = closePopup;
    popupOverlay.onclick = function(e) {
      if (e.target === popupOverlay) closePopup();
    };
  }

  function showDonationPopup() {
    if (donationPopupShown || !popupOverlay) return;
    donationPopupShown = true;

    const html = `
      <div class="popup-content">
        <i class="fas fa-hand-holding-heart"></i>
        <h3>Apoya este ministerio</h3>
        <p>IDCLATAM es un proyecto voluntario que busca conectar y edificar a la Iglesia de Cristo en Latinoamérica. Tu donación nos ayuda a mantener y expandir este trabajo.</p>
        <p><strong>¡Gracias por tu generosidad!</strong></p>
        <a href="https://paypal.me/JOHNJPC?locale.x=es_XC&country.x=NI" target="_blank" class="btn-donate"><i class="fab fa-paypal"></i> Donar vía PayPal</a>
        <br>
        <button class="btn-share" onclick="closePopup()" style="background:#1a4a44; color:white; border:none; padding:0.7rem 1.6rem; border-radius:50px; margin-top:0.8rem; cursor:pointer;">Cerrar</button>
      </div>
    `;
    showPopup(html);
    popupClose.onclick = closePopup;
    popupOverlay.onclick = function(e) {
      if (e.target === popupOverlay) closePopup();
    };
  }

  // Iniciar temporizador para el popup de versículo a los 60 segundos
  setTimeout(() => {
    if (!versePopupShown) {
      showVersePopup();
    }
  }, 60000); // 1 minuto

});