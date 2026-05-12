// ==================== MENÚ HAMBURGUESA ====================
const mobileToggle = document.getElementById('mobileToggle');
const navbar = document.getElementById('navbar');

if (mobileToggle && navbar) {
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

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      const icon = mobileToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
}

// ==================== VERSÍCULO ALEATORIO ====================
const verses = [
  "Juan 3:16 — Porque de tal manera amó Dios al mundo...",
  "Hechos 2:38 — Arrepentíos y bautícese cada uno...",
  "Romanos 1:16 — No me avergüenzo del evangelio...",
  "Mateo 28:19 — Id y haced discípulos a todas las naciones.",
  "Efesios 4:5 — Un Señor, una fe, un bautismo."
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

// ==================== BOTONES DE RECURSOS ====================
const podcastBtn = document.getElementById('podcastBtn');
const studiesBtn = document.getElementById('studiesBtn');
const leadersBtn = document.getElementById('leadersBtn');

if (podcastBtn) podcastBtn.addEventListener('click', () => alert("🎙️ Pronto tendrás acceso a nuestros episodios. Te avisaremos por correo."));
if (studiesBtn) studiesBtn.addEventListener('click', () => alert("📚 Biblioteca de estudios disponible próximamente. Déjanos tu email en contacto."));
if (leadersBtn) leadersBtn.addEventListener('click', () => alert("👥 Capacitación para líderes: te enviaremos información al correo registrado."));

// ==================== FORMULARIO DE CONTACTO ====================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const pais = document.getElementById('pais').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !pais || !mensaje) {
      formFeedback.textContent = "⚠️ Por favor completa todos los campos.";
      formFeedback.style.color = "#F5B041";
      return;
    }

    formFeedback.innerHTML = `<i class="fas fa-check-circle"></i> ¡Gracias ${nombre}! Hemos recibido tu mensaje. Te contactaremos pronto.`;
    formFeedback.style.color = "#a3e4d7";
    contactForm.reset();
    setTimeout(() => {
      formFeedback.textContent = "";
    }, 5000);
  });
}

// ==================== DIRECTORIO DE IGLESIAS (/idc/) ====================
// Cada objeto: nombre, ubicación, descripción breve, url (ruta relativa)
const churchesCatalog = [
  {
    name: "Iglesia de Cristo en Sutiaba, Nicaragua",
    location: "León, Nicaragua",
    description: "Congregación local con énfasis en evangelismo y discipulado.",
    url: "/idc/sutiaba.html"
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
  }
  // Puedes agregar más iglesias aquí (cada una con su archivo .html en /idc/)
];

// ==================== DIRECTORIO DE HERMANOS (/hn/) ====================
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
  }
  // Puedes agregar más hermanos aquí (cada uno con su archivo .html en /hn/)
];

// Función para renderizar resultados (genérica)
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

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// Buscador de iglesias
const churchSearch = document.getElementById('churchSearch');
const churchResults = document.getElementById('churchResults');

if (churchSearch && churchResults) {
  // Mostrar todas al inicio? Preferimos mostrar el mensaje inicial.
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

// ==================== BOTÓN SUBIR ====================
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (scrollBtn) {
    if (window.scrollY > 600) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  }
});
if (scrollBtn) scrollBtn.style.display = "none";