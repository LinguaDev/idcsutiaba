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
const sermonsBtn = document.getElementById('sermonsBtn');
const downloadPlanBtn = document.getElementById('downloadPlanBtn');
const evangelismKitBtn = document.getElementById('evangelismKitBtn');

if (sermonsBtn) sermonsBtn.addEventListener('click', () => alert("🎙️ Pronto tendremos disponibles los sermones en audio. ¡Suscríbete para recibir novedades!"));
if (downloadPlanBtn) downloadPlanBtn.addEventListener('click', () => alert("📘 Plan de lectura 'Discípulos en Acción' listo para descargar. (Simulacro - pronto estará disponible el PDF)"));
if (evangelismKitBtn) evangelismKitBtn.addEventListener('click', () => alert("✝️ Recibirás por correo el kit de evangelismo digital. Pronto nos comunicaremos contigo."));

// ==================== FORMULARIO DE CONTACTO ====================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
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