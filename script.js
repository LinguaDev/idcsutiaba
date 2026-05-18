// ==================== MENÚ HAMBURGUESA Y SUBMENÚS EN MÓVIL ====================
const mobileToggle = document.getElementById('mobileToggle');
const navbar = document.getElementById('navbar');

if (mobileToggle && navbar) {
  // Abrir/cerrar menú principal
  mobileToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (navbar.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Manejo de submenús en móvil (toggle)
  const menuItemsWithChildren = document.querySelectorAll('.menu-item-has-children');
  menuItemsWithChildren.forEach(item => {
    const link = item.querySelector('a.nav-link');
    if (link) {
      link.addEventListener('click', (e) => {
        // Solo en móvil (ancho < 768px) y si el menú está activo
        if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
          e.preventDefault();
          item.classList.toggle('active-submenu');
        }
      });
    }
  });
}

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
    // Evitar que el clic en el versículo cierre el padre accidentalmente
    e.stopPropagation();
    const verseDiv = step.querySelector('.step-verse');
    if (verseDiv) {
      verseDiv.classList.toggle('hidden');
    }
  });
});

// ==================== BOTONES DE RECURSOS ====================
const podcastBtn = document.getElementById('podcastBtn');
const studiesBtn = document.getElementById('studiesBtn');
const leadersBtn = document.getElementById('leadersBtn');

if (podcastBtn) {
  podcastBtn.addEventListener('click', () => alert("🎙️ Pronto tendrás acceso a nuestros episodios. Te avisaremos por correo."));
}
if (studiesBtn) {
  studiesBtn.addEventListener('click', () => alert("📚 Biblioteca de estudios disponible próximamente. Déjanos tu email en contacto."));
}
if (leadersBtn) {
  leadersBtn.addEventListener('click', () => alert("👥 Capacitación para líderes: te enviaremos información al correo registrado."));
}

// ==================== FORMULARIO DE CONTACTO (WhatsApp + Email) ====================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
const whatsappNumber = "50557514440"; // Número sin el +

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
      formFeedback.style.fontSize = "0.9rem";
      return;
    }

    formFeedback.innerHTML = `<i class="fas fa-spinner fa-pulse"></i> Procesando...`;
    formFeedback.style.color = "#f4c542";

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
      if (formFeedback) {
        formFeedback.innerHTML = "";
      }
    }, 6000);
  });
}

// ==================== DIRECTORIO DE IGLESIAS ====================
const churchesCatalog = [
  {
    name: "Iglesia de Cristo en Sutiaba, Nicaragua",
    location: "León, Nicaragua",
    description: "Congregación local con énfasis en evangelismo y discipulado.",
    url: "sutiaba.html"
  },
  {
    name: "Iglesia de Cristo en Ciudad de México",
    location: "Ciudad de México, México",
    description: "Congregación centenaria, activa en misiones urbanas.",
    url: "/idc/mexico-cdmx.html"
  },
  {
    name: "Iglesia de Cristo en Buenos Aires",
    location: "Buenos Aires, Argentina",
    description: "Radio cristiana y podcasts. Discipulado para toda la familia.",
    url: "/idc/buenos-aires.html"
  },
  {
    name: "Iglesia de Cristo en Managua",
    location: "Managua, Nicaragua",
    description: "Trabajo social y evangelismo en la capital nicaragüense.",
    url: "/idc/managua.html"
  },
  {
    name: "Iglesia de Cristo en San José",
    location: "San José, Costa Rica",
    description: "Ministerio de jóvenes y familias.",
    url: "/idc/san-jose.html"
  },
  {
    name: "Iglesia de Cristo en Bogotá",
    location: "Bogotá, Colombia",
    description: "Programas de discipulado y misiones.",
    url: "/idc/bogota.html"
  }
];

// ==================== DIRECTORIO DE HERMANOS ====================
const brothersCatalog = [
  {
    name: "Juan Pineda",
    location: "Nicaragua",
    description: "Predicador y maestro de la Palabra. Conferencias y estudios bíblicos.",
    url: "/hn/juan-pineda.html"
  },
  {
    name: "María González",
    location: "Colombia",
    description: "Escritora cristiana, autora de devocionales diarios.",
    url: "/hn/maria-gonzalez.html"
  },
  {
    name: "Carlos Méndez",
    location: "Argentina",
    description: "Músico y compositor de alabanza. Recursos para adoración.",
    url: "/hn/carlos-mendez.html"
  },
  {
    name: "David Reyes",
    location: "México",
    description: "Evangelista y conferencista internacional.",
    url: "/hn/david-reyes.html"
  },
  {
    name: "Ruth Martínez",
    location: "El Salvador",
    description: "Ministerio de mujeres y consejería familiar.",
    url: "/hn/ruth-martinez.html"
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

// Buscador de iglesias
const churchSearch = document.getElementById('churchSearch');
const churchResults = document.getElementById('churchResults');
if (churchSearch && churchResults) {
  churchResults.innerHTML = '<div class="info-message">✝️ Escribe el nombre de una ciudad, país o iglesia para encontrar su página.</div>';
  churchSearch.addEventListener('input', (e) => {
    renderResults('churchResults', churchesCatalog, e.target.value, 'church');
  });
}

// Buscador de hermanos
const brotherSearch = document.getElementById('brotherSearch');
const brotherResults = document.getElementById('brotherResults');
if (brotherSearch && brotherResults) {
  brotherResults.innerHTML = '<div class="info-message">🙏 Escribe el nombre de un hermano para encontrar su perfil.</div>';
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

// ==================== NAVEGACIÓN SUAVE Y CIERRE DE MENÚ ====================
document.querySelectorAll('.nav-link, .submenu a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Solo aplicar a enlaces internos que comiencen con #
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Cerrar menú móvil si está abierto
    if (navbar && navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      const toggleIcon = mobileToggle?.querySelector('i');
      if (toggleIcon) {
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-bars');
      }
      // También cerrar submenús abiertos
      document.querySelectorAll('.menu-item-has-children.active-submenu').forEach(item => {
        item.classList.remove('active-submenu');
      });
    }
  });
});