// Smooth scroll para navegación
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para todos los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove background blur effect
        if (currentScroll > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Intersection Observer para animaciones al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elementos a animar
    const animatedElements = document.querySelectorAll('.card, .modalidad-card, .step, .requisito, .proyecto-card, .galeria-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Gallery functionality
    function loadGalleryImages() {
        const galleryGrid = document.getElementById('galeriaGrid');
        if (!galleryGrid) return;

        const savedImages = localStorage.getItem('galleryImages');
        if (savedImages) {
            const images = JSON.parse(savedImages);
            galleryGrid.innerHTML = '';
            
            images.forEach(image => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'galeria-item';
                galleryItem.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}" loading="lazy">
                    <div class="galeria-overlay">
                        <h4>${image.title}</h4>
                        <p>${image.description}</p>
                    </div>
                `;
                galleryGrid.appendChild(galleryItem);
                
                // Agregar animación al nuevo elemento
                galleryItem.style.opacity = '0';
                galleryItem.style.transform = 'translateY(30px)';
                galleryItem.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(galleryItem);
            });
        }
    }

    // Cargar galería al inicio
    loadGalleryImages();

    // Escuchar cambios en localStorage para actualizar la galería en tiempo real
    window.addEventListener('storage', function(e) {
        if (e.key === 'galleryImages') {
            loadGalleryImages();
        }
    });

    // Funcionalidad de modal para ampliar imágenes
    function createImageModal() {
        const modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        modal.innerHTML = `
            <div style="position: relative; max-width: 90%; max-height: 90%;">
                <img id="modalImage" style="width: 100%; height: auto; border-radius: 1rem;">
                <button id="closeModal" style="position: absolute; top: -40px; right: 0; background: white; border: none; border-radius: 50%; width: 35px; height: 35px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Event listeners para el modal
        modal.addEventListener('click', closeImageModal);
        document.getElementById('closeModal').addEventListener('click', closeImageModal);
        
        // Cerrar con ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeImageModal();
            }
        });
        
        function closeImageModal() {
            modal.style.display = 'none';
        }
        
        // Agregar event listeners a las imágenes de la galería
        document.addEventListener('click', function(e) {
            if (e.target.closest('.galeria-item')) {
                const img = e.target.closest('.galeria-item').querySelector('img');
                if (img) {
                    document.getElementById('modalImage').src = img.src;
                    modal.style.display = 'flex';
                }
            }
        });
    }
    
    createImageModal();

    // Counter animation para las estadísticas del hero
    const counters = document.querySelectorAll('.stat-number');
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const isPercent = counter.textContent.includes('%');
            const isPlus = counter.textContent.includes('+');
            
            let current = 0;
            const increment = target / 100;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (isPercent) {
                        counter.textContent = Math.ceil(current) + '%';
                    } else if (isPlus) {
                        counter.textContent = Math.ceil(current) + '+';
                    } else {
                        counter.textContent = Math.ceil(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    if (isPercent) {
                        counter.textContent = target + '%';
                    } else if (isPlus) {
                        counter.textContent = target + '+';
                    } else {
                        counter.textContent = target;
                    }
                }
            };
            updateCounter();
        });
    };

    // Trigger counter animation cuando la sección hero es visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroObserver.observe(heroStats);
    }



    // Sistema de notificaciones
    function showNotification(message, type = 'info') {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Estilos para la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;

        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            gap: 0.75rem;
        `;

        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
        `;

        document.body.appendChild(notification);

        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Manejar cierre
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            closeNotification(notification);
        });

        // Auto cerrar después de 5 segundos
        setTimeout(() => {
            closeNotification(notification);
        }, 5000);
    }

    function closeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // Parallax effect para el hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroCard = document.querySelector('.hero-card');
        
        if (hero && heroCard) {
            const rate = scrolled * -0.5;
            heroCard.style.transform = `translateY(${rate}px)`;
        }
    });

    // Efecto hover para las cards de modalidades
    const modalidadCards = document.querySelectorAll('.modalidad-card');
    modalidadCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'translateY(-8px) scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Animación de typing para el título principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Iniciar después de un pequeño delay
        setTimeout(typeWriter, 500);
    }

    // Lazy loading para elementos pesados
    if ('IntersectionObserver' in window) {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.classList.add('loaded');
                    lazyObserver.unobserve(element);
                }
            });
        });

        lazyElements.forEach(element => {
            lazyObserver.observe(element);
        });
    }

    // Scroll progress indicator
    const createScrollIndicator = () => {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #2563eb, #f59e0b);
            z-index: 10001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(scrollIndicator);

        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollIndicator.style.width = scrolled + '%';
        });
    };

    createScrollIndicator();

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNavigation = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNavigation);

    console.log('🎓 CENS 456 Landing Page cargada correctamente!');
});