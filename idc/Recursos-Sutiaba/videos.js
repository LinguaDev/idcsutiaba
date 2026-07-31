// ============================================================
//  DATOS
// ============================================================

// Función para generar la lista de meses desde julio 2026 hasta diciembre 2027
function generarMeses() {
    const nombres = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const meses = [];
    let fecha = new Date(2026, 6, 1); // julio 2026 (mes 6)
    const fin = new Date(2027, 11, 1); // diciembre 2027 (mes 11)

    while (fecha <= fin) {
        const year = fecha.getFullYear();
        const month = fecha.getMonth();
        const label = `${nombres[month]} ${year}`;
        const id = `${year}-${String(month + 1).padStart(2, '0')}`;

        let videos = [];

        // --- Videos Julio 2026 ---
        if (year === 2026 && month === 6) {
            videos = [
                {
                    titulo: 'El justo florecerá como la palmera',
                    // URL del video de Facebook (puede ser un reel o video normal)
                    url: 'https://www.facebook.com/reel/1362661809174750/'
                },
                {
                    titulo: '¿Eres realmente maduro en Cristo?',
                    url: 'https://www.facebook.com/reel/1056865286792650'
                },
                {
                    titulo: 'La exelencia del amor de Cristo',
                    url: 'https://www.facebook.com/reel/1032140639464877'
                },
                {
                    titulo: 'Donde está el Espíritu del Señor, allí hay libertad',
                    url: 'https://www.facebook.com/reel/1048726370927851'
                },
                {
                    titulo: 'Elias: de la cueva al servicio de Dios',
                    url: 'https://www.facebook.com/reel/1485926486912093'
                },
                {
                    titulo: 'El conocimiento que refleja el amor de Cristo',
                    url: 'https://www.facebook.com/reel/2136071030662595'
                }
            ];
        }
        // --- Videos de ejemplo para Agosto 2026 ---
        else if (year === 2026 && month === 7) {
            videos = [
                {
                    titulo: 'Predicación "La Gracia Inagotable"',
                    url: 'https://www.facebook.com/facebook/videos/10153231379946729/'
                },
                {
                    titulo: 'Predicación "Viviendo en Santidad"',
                    url: 'https://www.facebook.com/facebook/videos/10153231379946729/'
                }
            ];
        }

        meses.push({ id, label, videos });
        fecha.setMonth(fecha.getMonth() + 1);
    }
    return meses;
}

// ============================================================
//  FUNCIÓN PARA CONSTRUIR EL IFRAME DE FACEBOOK
// ============================================================

/**
 * Recibe la URL del video de Facebook y devuelve el código HTML del iframe
 * con los parámetros adecuados para incrustación.
 * Ejemplo de URL: https://www.facebook.com/reel/1362661809174750/
 *                o https://www.facebook.com/facebook/videos/10153231379946729/
 */
function crearIframeFacebook(url) {
    // Codificamos la URL para pasarla como parámetro href
    const encodedUrl = encodeURIComponent(url);
    // Construimos el src con los parámetros que proporcionaste (ancho, alto, etc.)
    // Usamos un ancho fijo de 100% (se adapta al contenedor) pero Facebook requiere un ancho numérico.
    // Para que se adapte bien, usamos width=100% pero en el iframe se especifica width="100%" y height="100%".
    // Sin embargo, el plugin de Facebook necesita un ancho fijo en píxeles para el parámetro &width.
    // Vamos a usar 560px como ancho base (se escalará con CSS).
    const src = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=0&width=560&height=476&t=0`;
    // Devolvemos el iframe con atributos que lo hacen responsivo
    return `<iframe src="${src}" 
                    style="border:none;overflow:hidden;width:100%;height:100%;"
                    scrolling="no" 
                    frameborder="0" 
                    allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>`;
}

// ============================================================
//  RENDERIZADO
// ============================================================

const mesesData = generarMeses();
const navContainer = document.getElementById('navContainer');
const mainContent = document.getElementById('mainContent');

let mesActivoId = mesesData[0].id; // por defecto julio 2026

// --- Construir navegación ---
function renderNav() {
    navContainer.innerHTML = '';
    mesesData.forEach((mes) => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn' + (mes.id === mesActivoId ? ' active' : '');
        btn.dataset.id = mes.id;
        btn.innerHTML = `<i class="fas fa-calendar-alt"></i> ${mes.label}`;
        btn.addEventListener('click', () => {
            mesActivoId = mes.id;
            renderNav();
            renderContent(mes.id);
            // scroll al mes visible
            const container = navContainer;
            const btnEl = container.querySelector(`[data-id="${mes.id}"]`);
            if (btnEl) {
                const left = btnEl.offsetLeft - container.offsetWidth / 2 + btnEl.offsetWidth / 2;
                container.scrollTo({ left, behavior: 'smooth' });
            }
        });
        navContainer.appendChild(btn);
    });
}

// --- Construir contenido ---
function renderContent(mesId) {
    const mes = mesesData.find(m => m.id === mesId);
    if (!mes) return;

    const hasVideos = mes.videos && mes.videos.length > 0;

    let html = `<div class="month-title fade-in">
                    <i class="fas fa-calendar-check"></i> ${mes.label}
                    ${hasVideos 
                        ? `<span class="badge">${mes.videos.length} video${mes.videos.length>1?'s':''}</span>` 
                        : `<span class="badge badge-empty">Próximamente</span>`}
                </div>`;

    if (hasVideos) {
        html += `<div class="video-grid">`;
        mes.videos.forEach((video, idx) => {
            // Generar el iframe de Facebook usando la URL del video
            const iframeHtml = crearIframeFacebook(video.url);
            html += `
                <div class="video-card" style="animation-delay:${idx * 0.08}s">
                    <div class="video-wrapper">
                        ${iframeHtml}
                    </div>
                    <div class="card-body">
                        <h3><i class="fas fa-play" style="color:#d4a762;font-size:0.7rem;margin-right:8px;"></i>${video.titulo}</h3>
                        <div class="meta">
                            <i class="fas fa-calendar-alt"></i> ${mes.label}
                            <span style="margin-left:auto;"><i class="fab fa-facebook" style="color:#1877f2;"></i> Facebook</span>
                        </div>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    } else {
        // Placeholder
        html += `
            <div class="video-grid">
                <div class="placeholder-card" style="grid-column:1/-1;">
                    <i class="fas fa-clock"></i>
                    <h4>Videos disponibles próximamente</h4>
                    <p>Estamos preparando las predicaciones de <strong>${mes.label}</strong>. Vuelve pronto.</p>
                    <div style="margin-top:1rem;font-size:0.8rem;color:#555577;">
                        <i class="fas fa-arrow-right" style="color:#d4a762;"></i> Julio 2026 – Diciembre 2027
                    </div>
                </div>
            </div>
        `;
    }

    mainContent.innerHTML = html;
}

// --- Inicializar ---
function init() {
    renderNav();
    renderContent(mesActivoId);
}

init();