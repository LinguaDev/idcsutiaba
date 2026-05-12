// ========== MENÚ HAMBURGUESA ==========
const mobileToggle = document.getElementById('mobileToggle');
const navbar = document.getElementById('navbar');

mobileToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  // Cambiar ícono
  const icon = mobileToggle.querySelector('i');
  if (navbar.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// ========== VERSÍCULO DEL DÍA ==========
const verses = [
  "Juan 3:16 — Porque de tal manera amó Dios al mundo...",
  "Romanos 10:9 — Si confesares con tu boca que Jesús es el Señor...",
  "Hechos 16:31 — Cree en el Señor Jesucristo, y serás salvo.",
  "Mateo 28:19 — Id y haced discípulos a todas las naciones.",
  "Proverbios 3:5 — Confía en Jehová con todo tu corazón."
];
const verseElement = document.getElementById('verseOfDay');
if (verseElement) {
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];
  verseElement.innerHTML = `<i class="fas fa-bible"></i> ${randomVerse}`;
}

// ========== ORACIÓN DE FE ==========
const prayerBtn = document.getElementById('prayerBtn');
const prayerMsg = document.getElementById('prayerMessage');
if (prayerBtn) {
  prayerBtn.addEventListener('click', () => {
    prayerMsg.classList.toggle('hidden');
  });
}

// ========== SIMULACIÓN DE DESCARGAS ==========
const downloadBtn = document.getElementById('downloadPlanBtn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    alert("📘 Plan de lectura 'Discípulos en Acción' listo para descargar. (Simulacro - pronto habilitaremos PDF real)");
  });
}

const kitBtn = document.getElementById('evangelismKitBtn');
if (kitBtn) {
  kitBtn.addEventListener('click', () => {
    alert("✝️ Recibirás por correo el kit de evangelismo digital. Pronto nos comunicaremos contigo.");
  });
}

// ========== FORMULARIO DE CONTACTO ==========
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    if (!nombre || !email || !mensaje) {
      formFeedback.textContent = "Por favor completa todos los campos.";
      formFeedback.style.color = "#f4c542";
      return;
    }
    // Simular envío
    formFeedback.innerHTML = `<i class="fas fa-check-circle"></i> ¡Gracias ${nombre}! Te contactaremos pronto.`;
    formFeedback.style.color = "#c0f2a8";
    contactForm.reset();
    setTimeout(() => {
      formFeedback.textContent = "";
    }, 4000);
  });
}

// ========== BOTÓN IR ARRIBA ==========
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.style.display = "none";