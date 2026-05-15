// ==================== TEMPLATE GENÉRICO PARA MINISTERIOS - IDCLATAM ====================
// Funcionalidades: menú hamburguesa, scroll suave, scroll top, enlaces externos seguros
document.addEventListener('DOMContentLoaded', () => {

    // ---------- MENÚ HAMBURGUESA ----------
    const hamburger = document.querySelector('.hamburger');
    const navMobile = document.querySelector('.nav-mobile');
    const body = document.body;

    if (hamburger && navMobile) {
        // Abrir/cerrar menú
        hamburger.addEventListener('click', () => {
            navMobile.classList.toggle('active');
            hamburger.classList.toggle('active');
            body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
        });

        // Cerrar menú al hacer clic en un enlace
        const mobileLinks = document.querySelectorAll('.menu-mobile a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMobile.classList.remove('active');
                hamburger.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }

    // ---------- SCROLL SUAVE PARA ENLACES INTERNOS ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                // Opcional: actualizar URL sin recargar
                history.pushState(null, null, href);
            }
        });
    });

    // ---------- BOTÓN SCROLL TOP ----------
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.classList.toggle('visible', window.scrollY > 600);
        });
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---------- SEGURIDAD EN ENLACES EXTERNOS ----------
    // Abre en nueva pestaña y agrega rel="noopener" a todos los enlaces externos
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        // Excluir dominios internos (IDCLATAM y BibleFluent) para que no se abran en nueva pestaña innecesariamente
        if (!link.href.includes('idclatam.org') && !link.href.includes('biblefluent.org')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // ---------- PEQUEÑO LOG PARA CONFIRMAR CARGA ----------
    console.log('Sitio de ministerio cargado correctamente');
});