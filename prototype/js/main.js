document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header
    const siteHeader = document.getElementById('site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileNav = document.getElementById('mobile-nav');

    const toggleMobileMenu = () => {
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileCloseBtn.addEventListener('click', toggleMobileMenu);

    // 3. Mobile Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Close other accordions
            accordionHeaders.forEach(h => {
                if (h !== header && h.classList.contains('active')) {
                    h.classList.remove('active');
                    // In a real implementation we would animate the max-height of the panel here
                }
            });
            
            // Toggle current
            header.classList.toggle('active');
            const icon = header.querySelector('i');
            if (header.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'chevron-up');
            } else {
                icon.setAttribute('data-lucide', 'chevron-down');
            }
            lucide.createIcons(); // Re-render icon
        });
    });

    // 4. Mobile Sticky CTA Bar
    const stickyCta = document.getElementById('mobile-sticky-cta');
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection && stickyCta) {
        // Use Intersection Observer for better performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If hero is NOT intersecting (scrolled past), show CTA
                if (!entry.isIntersecting) {
                    stickyCta.classList.add('visible');
                } else {
                    stickyCta.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(heroSection);
    }
});
