
        // Loading animation
        window.addEventListener('load', () => {
            const loader = document.querySelector('.loader');
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 1500);
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const nav = document.getElementById('nav');
        
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
            }
        });
        
        // Simple filter functionality
        const filterBtn = document.querySelector('.filter-btn button');
        
        filterBtn.addEventListener('click', () => {
            const brand = document.getElementById('brand').value;
            const type = document.getElementById('type').value;
            const year = document.getElementById('year').value;
            const price = document.getElementById('price').value;
            
            alert(`Filter diterapkan:\nMerek: ${brand || 'Semua'}\nTipe: ${type || 'Semua'}\nTahun: ${year || 'Semua'}\nHarga Maks: ${price ? 'Rp ' + parseInt(price).toLocaleString('id-ID') : 'Semua'}`);
        });

        // Scroll animations with Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe product cards
        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });

        // Observe features
        document.querySelectorAll('.feature').forEach(feature => {
            observer.observe(feature);
        });

        // Observe gallery items
        document.querySelectorAll('.gallery-item').forEach(item => {
            observer.observe(item);
        });

        // Scroll to top functionality
        const scrollToTopBtn = document.querySelector('.scroll-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('active');
            } else {
                scrollToTopBtn.classList.remove('active');
            }
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Parallax effect on hero and cta sections
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const cta = document.querySelector('.cta');
            
            if (hero) {
                hero.style.backgroundPositionY = scroll * 0.5 + 'px';
            }
            
            if (cta) {
                cta.style.backgroundPositionY = scroll * 0.5 + 'px';
            }
        });

        // Gallery Modal functionality
        const modal = document.getElementById('galleryModal');
        const modalImage = document.getElementById('modalImage');
        const modalCaption = document.getElementById('modalCaption');
        const modalClose = document.getElementById('modalClose');
        
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('.gallery-img').src;
                const title = item.querySelector('.gallery-title').textContent;
                const desc = item.querySelector('.gallery-desc').textContent;
                
                modalImage.src = imgSrc;
                modalCaption.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        });
        
        modalClose.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    