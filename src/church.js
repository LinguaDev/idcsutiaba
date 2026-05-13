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

// ==================== VERSÍCULO DEL DÍA ====================
const verses = [
  "Juan 3:16 — Porque de tal manera amó Dios al mundo...",
  "Romanos 10:9 — Si confesares con tu boca que Jesús es el Señor...",
  "Hechos 16:31 — Cree en el Señor Jesucristo, y serás salvo.",
  "Mateo 28:19 — Id y haced discípulos a todas las naciones.",
  "Romanos 6:23 — Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna."
];
const verseElement = document.getElementById('verseOfDay');
if (verseElement) {
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];
  verseElement.innerHTML = `<i class="fas fa-bible"></i> ${randomVerse}`;
}

// ==================== ACORDEÓN DE LOS 7 PASOS ====================
document.querySelectorAll('.step-card').forEach(card => {
  const header = card.querySelector('.step-header');
  if (header) {
    header.addEventListener('click', () => {
      card.classList.toggle('active');
    });
    // Para dispositivos táctiles
    header.addEventListener('touchstart', (e) => {
      e.preventDefault();
      header.click();
    });
  }
});

// Opcional: abrir el primer paso por defecto
// const firstStep = document.querySelector('.step-card');
// if (firstStep) firstStep.classList.add('active');

// ==================== ORACIÓN DE FE ====================
const prayerBtn = document.getElementById('prayerBtn');
const prayerMsg = document.getElementById('prayerMessage');
if (prayerBtn && prayerMsg) {
  prayerBtn.addEventListener('click', () => {
    prayerMsg.classList.toggle('hidden');
  });
}

// ==================== BOTONES DE RECURSOS ====================
const downloadPlanBtn = document.getElementById('downloadPlanBtn');
const evangelismKitBtn = document.getElementById('evangelismKitBtn');
const podcastBtns = document.querySelectorAll('.btn-outline-small');

if (downloadPlanBtn) {
  downloadPlanBtn.addEventListener('click', () => {
    alert("📘 El plan de lectura 'Discípulos en Acción' estará disponible pronto. Mientras tanto, escríbenos por WhatsApp para recibirlo.");
  });
}

if (evangelismKitBtn) {
  evangelismKitBtn.addEventListener('click', () => {
    alert("✝️ Te enviaremos el kit de evangelismo digital por WhatsApp. Por favor, contáctanos directamente al número +505 57514440.");
  });
}

podcastBtns.forEach(btn => {
  if (btn.textContent.includes('Próximamente') || btn.textContent.includes('podcast')) {
    btn.addEventListener('click', () => {
      alert("🎙️ Pronto tendremos disponibles los sermones en audio. ¡Suscríbete a nuestro canal!");
    });
  }
});

// ==================== FORMULARIO DE CONTACTO → WHATSAPP ====================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    if (!nombre || !email || !mensaje) {
      if (formFeedback) {
        formFeedback.textContent = "⚠️ Por favor completa todos los campos.";
        formFeedback.style.color = "#f4b642";
      }
      return;
    }
    
    // Número de WhatsApp (sin el signo +, pero wa.me lo acepta)
    const phoneNumber = "50557514440";
    
    // Construir el mensaje para WhatsApp
    const waMessage = `Hola, soy ${nombre} (${email}).%0A%0A${mensaje}`;
    
    // Crear el enlace de WhatsApp
    const waLink = `https://wa.me/${phoneNumber}?text=${waMessage}`;
    
    // Abrir WhatsApp en una nueva pestaña/ventana
    window.open(waLink, '_blank');
    
    // Mostrar feedback y resetear formulario
    if (formFeedback) {
      formFeedback.innerHTML = `<i class="fas fa-check-circle"></i> ¡Gracias ${nombre}! Serás redirigido a WhatsApp para completar tu mensaje.`;
      formFeedback.style.color = "#8bc34a";
    }
    contactForm.reset();
    
    // Limpiar feedback después de 5 segundos
    setTimeout(() => {
      if (formFeedback) formFeedback.textContent = "";
    }, 5000);
  });
}

// ==================== BOTÓN SCROLL TOP ====================
const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  scrollBtn.style.display = "none";
}