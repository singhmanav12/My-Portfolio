document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.error("GSAP or ScrollTrigger not loaded!");
    }

    // --- 1. Custom Mix-Blend-Mode Cursor ---
    const cursor = document.querySelector('.cursor');
    
    const cursorX = gsap.quickTo(cursor, "left", {duration: 0.4, ease: "power3"});
    const cursorY = gsap.quickTo(cursor, "top", {duration: 0.4, ease: "power3"});

    window.addEventListener('mousemove', (e) => {
        cursorX(e.clientX);
        cursorY(e.clientY);
    });

    document.querySelectorAll('a, .btn-primary, .btn-outline').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });

    // --- 2. Fluid Orb Follower ---
    const orb = document.querySelector('.orb');
    if (orb) {
        const orbX = gsap.quickTo(orb, "x", {duration: 1.5, ease: "power2.out"});
        const orbY = gsap.quickTo(orb, "y", {duration: 1.5, ease: "power2.out"});
        
        window.addEventListener('mousemove', (e) => {
            orbX(e.clientX);
            orbY(e.clientY);
        });
    }

    // --- 3. Magnetic Element Physics ---
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const strength = parseFloat(this.dataset.strength) || 20; 
            
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            
            gsap.to(this, {
                x: (x / rect.width) * strength,
                y: (y / rect.height) * strength,
                duration: 0.5,
                ease: "power2.out"
            });
        });
        
        el.addEventListener('mouseleave', function() {
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // --- 4. Hero Text Reveal Animation ---
    const charWraps = document.querySelectorAll('.char-wrap');
    charWraps.forEach(wrap => {
        const text = wrap.textContent;
        wrap.innerHTML = '';
        for (let char of text) {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; 
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(110%)'; 
            wrap.appendChild(span);
        }
    });

    gsap.to('.char-wrap span', {
        y: '0%',
        duration: 1.2,
        stagger: 0.03,
        ease: "power4.out",
        delay: 0.2
    });

    // --- 5. Scroll Animations ---
    
    // Parallax effect on Hero
    gsap.to('.hero-content', {
        y: -150,
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Fade Up Elements (Bento Boxes, Projects)
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(el => {
        // Handle custom delay classes
        let delay = 0;
        if (el.classList.contains('delay-1')) delay = 0.2;
        if (el.classList.contains('delay-2')) delay = 0.4;
        
        gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%", 
            }
        });
    });
});
